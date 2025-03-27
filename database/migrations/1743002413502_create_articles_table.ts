import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'articles'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string("title").notNullable();
      table.text("content").notNullable();
      table.string("image_url").nullable();
      table.integer("user_id").unsigned().references("users.id").onDelete("CASCADE");
      table.timestamps(true, true)

    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
