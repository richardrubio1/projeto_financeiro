import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'lancamentos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('descricao').notNullable()
      table.decimal('valor').notNullable()
      table.string('natureza').notNullable()

      table.string('categoria_id').notNullable()
      table
        .foreign('categoria_id')
        .references('id')
        .inTable('categorias')
      
      table.string('usuario_id').notNullable()
        table
          .foreign('usuario_id')
          .references('id')
          .inTable('usuarios')
        
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}