const knex = require('../database/index');

module.exports = {
  async index (req, res, next) {
    try {
      const { user_id , page = 1 } = req.query;

      const query = knex('projects')
          .limit(5)
          .offset((page - 1) * 5) // growthing 5 by 5
          .where('projects.deleted_at', null)

      const countObject = knex('projects').count();

      // if user_id exits
      if(user_id) {
        query.select('projects.*', 'users.username')
        query.join('users', 'users.id', 'projects.user_id')
        query.where({ user_id })
        query.where('users.deleted_at', null)
        query.where('projects.deleted_at', null)
        
        countObject.where({ user_id })
      }

      const [count] =  await countObject;
      res.header('X-Total-Count', count['count']);

      const results = await query;

      return res.json(results);
    } catch(error) {
      next(error);
    }
  }, 

  async create(req, res, next) {
    try {
      const { title, user_id } = req.body;
      await knex('projects').insert({
        title,
        user_id
      }) 

      return res.status(201).send();

    } catch(error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const { title } = req.body;
      const { id } = req.params;

      await knex('projects')
        .update({ title })
        .where({ id })

      return res.send();
    } catch(error){
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const { id } = req.params;

      await knex('projects')
        .update({ deleted_at: new Date() })
        .where({ id })

      return res.send()

    } catch(error){
      next(error)
    }
  }
}