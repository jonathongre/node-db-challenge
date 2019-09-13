
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('project_id');
        tbl.string('name')
        .notNullable();
        tbl.string('description');
        tbl.boolean('completed')
        .defaultTo(false);
    })
    .createTable('resources', tbl => {
        tbl.increments('resource_id');
        tbl.string('name')
        .unique()
        .notNullable();
        tbl.string('description');
    })
    .createTable('project_resources', tbl => {
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects');
        tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resource_id')
        .inTable('resources');
    })
    .createTable('tasks', tbl => {
        tbl.increments('task_id');
        tbl.string('description')
        .notNullable();
        tbl.string('notes');
        tbl.boolean('completed')
        .defaultTo(false);
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
  };