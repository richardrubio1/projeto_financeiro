import type { HttpContext } from '@adonisjs/core/http'
import ItensLancado from '#models/itens_lancado'

export default class ItensLancadosController {
  public async index({ response }: HttpContext) {
    const itens = await ItensLancado.all()
    return response.ok(itens)
  }

  public async store({ request, response }: HttpContext) {
    const data = request.only([
      'nome',
      'quantidade',
      'unidade',
      'precoUnitario',
      'precoTotal',
      'lancamentoId',
      'date',
    ])

    const item = await ItensLancado.create(data)
    return response.created(item)
  }

  public async show({ params, response }: HttpContext) {
    const item = await ItensLancado.findOrFail(params.id)
    return response.ok(item)
  }

  public async update({ params, request, response }: HttpContext) {
    const item = await ItensLancado.findOrFail(params.id)
    const data = request.only([
      'nome',
      'quantidade',
      'unidade',
      'precoUnitario',
      'precoTotal',
      'lancamentoId',
      'date',
    ])

    item.merge(data)
    await item.save()

    return response.ok(item)
  }

  public async destroy({ params, response }: HttpContext) {
    const item = await ItensLancado.findOrFail(params.id)
    await item.delete()
    return response.noContent()
  }
}
