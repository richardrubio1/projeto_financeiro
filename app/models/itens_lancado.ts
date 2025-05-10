import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Lancamento from './lancamento.js'

export default class ItensLancado extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare quantidade: number

  @column()
  declare unidade: string

  @column()
  declare precoUnitario: number

  @column()
  declare precoTotal: number

  @column()
  declare lancamentoId: number

  @column.date()
  declare date: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Lancamento)
  declare lancamento: BelongsTo<typeof Lancamento>
}
