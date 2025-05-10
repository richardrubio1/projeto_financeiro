import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'


import Categoria from './categoria.js'
import Recorrencia from './recorrencia.js'
import ItensLancados from './itens_lancado.js'
import Cartao from './cartao.js'

export default class Lancamento extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare descricao: string

  @column()
  declare valor: number

  @column()
  declare natureza: string

  @column()
  declare categoriaId: number

  @column()
  declare recorrenciaId: number

  @belongsTo(() => Categoria)
  declare categoria: BelongsTo<typeof Categoria>

  @belongsTo(() => Recorrencia)
  declare recorrencia: BelongsTo<typeof Recorrencia>

  @hasMany(() => ItensLancados)
  declare itensLancados: HasMany<typeof ItensLancados>

  @belongsTo(() => Cartao)
  declare cartao: BelongsTo<typeof Cartao>

  @column()
  declare cartaoId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
