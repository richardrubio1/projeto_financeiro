import { BaseSchema } from '@adonisjs/lucid/schema'

export default class ItensLancados extends BaseSchema {
  protected tableName = 'itens_lancados'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome').notNullable()
      table.decimal('quantidade', 10, 2).notNullable()
      table.string('unidade').notNullable()
      table.decimal('preco_unitario', 10, 2).notNullable()
      table.decimal('preco_total', 10, 2).notNullable()
      table.integer('lancamento_id').unsigned().references('id').inTable('lancamentos').onDelete('CASCADE')
      table.date('date').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
