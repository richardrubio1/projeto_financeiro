import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Lancamento from './lancamento.js'

export default class Cartao extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare bandeira: string

  @column()
  declare fechamento: number

  @column()
  declare vencimento: number

  @hasMany(() => Lancamento)
  declare lancamentos: HasMany<typeof Lancamento>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}