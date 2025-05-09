import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

import Categoria from './categoria.js'


export default class Lancamento extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
  
  @column()
  declare descricao: string
  @column()
  declare valor: number
  @column()
  declare natureza: string
  @column()
  declare categoriaId: number

  @belongsTo(() => Categoria) //
  declare categoria: BelongsTo<typeof Categoria>

}