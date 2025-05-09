import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'


export default class Categoria extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  
  @column()
  declare nome: string
  @column()
  declare tipo: string // entrada - despesas - investimento
  @column()
  declare descricao: string // Descrição da categoria, se necessário
  
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}