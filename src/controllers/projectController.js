const knex = require('../database/index');

module.exports = {
  async index (req, res, next) {
    try {
      const { user_id } = req.query;

      const query = knex('projects')

      // if user_id exits
      if(user_id) {
        query.select('projects.*', 'users.username');
        query.join('users', 'users.id', 'projects.user_id')
        query.where({ user_id })
      }

      const results = await query;

      return res.json(results);
    } catch(error) {
      next(error);
    }
  },
}