import type { HttpContext } from '@adonisjs/core/http'
import Lancamento from '#models/lancamento'

export default class LancamentosController {
    async store({ request, response }: HttpContext) {   
        const dados = request.only([
            'descricao',
            'valor',
            'natureza',
            'categoria_id'
        ])
        const lancamento = await Lancamento.create(dados)
        return response.created(lancamento)
    }
    async index({ response }: HttpContext) {
        const lancamentos = await Lancamento.query().preload('categoria')
        return response.ok(lancamentos)
    }
    async show({ params, response }: HttpContext) {
        const lancamento = await Lancamento.query().where('id', params.id).preload('categoria').first()
        if (!lancamento) {
            return response.notFound({ message: 'Lançamento não encontrado' })
        }
        return response.ok(lancamento)
    }
    async update({ params, request, response }: HttpContext) {
        const lancamento = await Lancamento.find(params.id)
        if (!lancamento) {
            return response.notFound({ message: 'Lançamento não encontrado' })
        }
        const dados = request.only([
            'descricao',
            'valor',
            'natureza',
            'categoria_id'
        ])
        lancamento.merge(dados)
        await lancamento.save()
        return response.ok(lancamento)
    }
    async destroy({ params, response }: HttpContext) {
        const lancamento = await Lancamento.find(params.id)
        if (!lancamento) {
            return response.notFound({ message: 'Lançamento não encontrado' })
        }
        await lancamento.delete()
        return response.noContent()
    }
}