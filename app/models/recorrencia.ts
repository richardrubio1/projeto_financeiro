import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Lancamento from './lancamento.js'

export default class Recorrencia extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare intervalo: string // Ex: mensal, semanal, etc

  @column.date()
  declare proximaExecucao: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Lancamento)
  declare lancamentos: HasMany<typeof Lancamento>
}
