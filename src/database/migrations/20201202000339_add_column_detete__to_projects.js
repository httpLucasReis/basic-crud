
exports.up = knex => knex.schema.alterTable('projects', (table) => {
  table.timestamp('deleted_at');
})


exports.down = knex => knex.schema.alterTable('projects', (table) => {
  table.dropColumn('deleted_at');
})

