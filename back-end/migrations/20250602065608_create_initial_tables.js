
export async function up(knex) {
  await knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('user_name').notNullable()
    table.string('email').notNullable().unique()
    table.string('role').notNullable()
    table.string('password').notNullable()
  })
  await knex.schema.createTable('admins', (table) => {
    table.increments('id').primary()
    table.string('user_name').notNullable()
    table.string('email').notNullable().unique()
    table.string('password').notNullable()
  })
  await knex.schema.createTable('work_logs', (table) => {
    table.increments('id').primary()
    table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE')
    table.date('work_date').notNullable()
    table.time('start_time').notNullable()
    table.time('end_time').notNullable()
    table.integer('hours_worked').notNullable()
  })
};


export async function down(knex) {
    await knex.schema.dropTableIfExists('work_logs');
    await knex.schema.dropTableIfExists('admins');
    await knex.schema.dropTableIfExists('users');
};
