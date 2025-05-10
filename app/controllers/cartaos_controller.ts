// Controller: app/controllers/cartoes_controller.ts
import type { HttpContext } from '@adonisjs/core/http'
import Cartao from '#models/cartao'

export default class CartaosController {
  public async index({ response }: HttpContext) {
    const cartoes = await Cartao.all()
    return response.ok(cartoes)
  }

  public async store({ request, response }: HttpContext) {
    const data = request.only(['nome', 'bandeira', 'fechamento', 'vencimento'])
    const cartao = await Cartao.create(data)
    return response.created(cartao)
  }

  public async show({ params, response }: HttpContext) {
    const cartao = await Cartao.findOrFail(params.id)
    return response.ok(cartao)
  }

  public async update({ params, request, response }: HttpContext) {
    const cartao = await Cartao.findOrFail(params.id)
    const data = request.only(['nome', 'bandeira', 'fechamento', 'vencimento'])
    cartao.merge(data)
    await cartao.save()
    return response.ok(cartao)
  }

  public async destroy({ params, response }: HttpContext) {
    const cartao = await Cartao.findOrFail(params.id)
    await cartao.delete()
    return response.noContent()
  }
}
