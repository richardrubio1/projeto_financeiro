// Migration: create_cartoes_table
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Cartaes extends BaseSchema {
  protected tableName = 'cartoes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome').notNullable()
      table.string('bandeira').nullable()
      table.integer('fechamento').nullable() // Dia do fechamento da fatura
      table.integer('vencimento').nullable() // Dia do vencimento da fatura
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
} 