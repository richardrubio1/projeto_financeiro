import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Lancamentos extends BaseSchema {
  protected tableName = 'lancamentos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('descricao').notNullable()
      table.decimal('valor', 10, 2).notNullable()
      table.string('natureza').notNullable() // Ex: "Fixa" ou "Variável"
      table.integer('categoria_id').unsigned().references('id').inTable('categorias').onDelete('CASCADE')
      table.integer('recorrencia_id').unsigned().references('id').inTable('recorrencias').nullable()
      table.timestamp('create_at', { useTz: true })
      table.timestamp('update_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
