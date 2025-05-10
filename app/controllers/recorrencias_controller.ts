import type { HttpContext } from '@adonisjs/core/http'
import Recorrencia from '#models/recorrencia'

export default class RecorrenciasController {
  public async index({ response }: HttpContext) {
    const recorrencias = await Recorrencia.all()
    return response.ok(recorrencias)
  }

  public async store({ request, response }: HttpContext) {
    const data = request.only(['descricao', 'intervalo', 'proximaExecucao'])
    const recorrencia = await Recorrencia.create(data)
    return response.created(recorrencia)
  }

  public async show({ params, response }: HttpContext) {
    const recorrencia = await Recorrencia.findOrFail(params.id)
    return response.ok(recorrencia)
  }

  public async update({ params, request, response }: HttpContext) {
    const recorrencia = await Recorrencia.findOrFail(params.id)
    const data = request.only(['descricao', 'intervalo', 'proximaExecucao'])

    recorrencia.merge(data)
    await recorrencia.save()

    return response.ok(recorrencia)
  }

  public async destroy({ params, response }: HttpContext) {
    const recorrencia = await Recorrencia.findOrFail(params.id)
    await recorrencia.delete()

    return response.noContent()
  }
}
