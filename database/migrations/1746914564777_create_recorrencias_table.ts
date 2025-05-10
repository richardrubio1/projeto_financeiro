import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Recorrencias extends BaseSchema {
  protected tableName = 'recorrencias'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.enum('frequencia', ['diario', 'semanal', 'mensal', 'anual']).notNullable()
      table.integer('quantidade').notNullable().defaultTo(1)
      table.date('data_inicio').notNullable()
      table.date('data_fim').nullable()
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
