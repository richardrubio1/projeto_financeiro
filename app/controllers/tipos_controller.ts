import type { HttpContext } from '@adonisjs/core/http'
import Tipo from '#models/tipo'

export default class TiposController {
  async index({ response }: HttpContext) {
    const tipos = await Tipo.all()
    return response.ok(tipos)
  }

  async show({ params, response }: HttpContext) {
    const tipo = await Tipo.find(params.id)
    if (!tipo) {
      return response.notFound({ message: 'Tipo não encontrado' })
    }
    return response.ok(tipo)
  }

  async store({ request, response }: HttpContext) {
    const dados = request.only(['nome'])
    const tipo = await Tipo.create(dados)
    return response.created(tipo)
  }

  async update({ params, request, response }: HttpContext) {
    const tipo = await Tipo.find(params.id)
    if (!tipo) {
      return response.notFound({ message: 'Tipo não encontrado' })
    }

    tipo.merge(request.only(['nome']))
    await tipo.save()

    return response.ok(tipo)
  }

  async destroy({ params, response }: HttpContext) {
    const tipo = await Tipo.find(params.id)
    if (!tipo) {
      return response.notFound({ message: 'Tipo não encontrado' })
    }

    await tipo.delete()
    return response.noContent()
  }
}
