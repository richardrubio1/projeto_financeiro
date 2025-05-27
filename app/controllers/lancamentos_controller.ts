import type { HttpContext } from '@adonisjs/core/http'
import Lancamento from '#models/lancamento'
//import Recorrencia from '#models/recorrencia'
// Controller completo de Lancamento com suporte a ItensLancados
//import ItensLancados from '#models/itensLancados'

export default class LancamentosController {
  public async index({ response }: HttpContext) {
    const lancamentos = await Lancamento.query().preload('itensLancados')
    return response.ok(lancamentos)
  }

  public async store({ request, response }: HttpContext) {
    const data = request.only(['descricao', 'valor', 'natureza', 'categoria_id', 'recorrencia_id'])
    const itens = request.input('itens', [])

    const lancamento = await Lancamento.create(data)

    if (Array.isArray(itens) && itens.length > 0) {
      await lancamento.related('itensLancados').createMany(
        itens.map((item) => ({
          ...item,
          lancamentoId: lancamento.id
        }))
      )
    }

    await lancamento.load('itensLancados')
    return response.created(lancamento)
  }

  public async show({ params, response }: HttpContext) {
    const lancamento = await Lancamento.query()
      .where('id', params.id)
      .preload('itensLancados')
      .firstOrFail()
    return response.ok(lancamento)
  }

  public async update({ params, request, response }: HttpContext) {
    const lancamento = await Lancamento.findOrFail(params.id)
    const data = request.only(['descricao', 'valor', 'natureza', 'categoria_id', 'recorrencia_id'])
    lancamento.merge(data)
    await lancamento.save()
    return response.ok(lancamento)
  }

  public async destroy({ params, response }: HttpContext) {
    const lancamento = await Lancamento.findOrFail(params.id)
    await lancamento.delete()
    return response.noContent()
  }
}
