import type { HttpContext } from '@adonisjs/core/http'
import Categoria from '#models/categoria'

export default class CategoriasController {
    async index({ response }: HttpContext) {
        const categorias = await Categoria.all()
        return response.ok(categorias)
    }
    async show({ params, response }: HttpContext) {
        const categoria = await Categoria.find(params.id)
        if (!categoria) {
            return response.notFound({ message: 'Categoria não encontrada' })
        }
        return response.ok(categoria)
    }
    async update({ params, request, response }: HttpContext) {  
        const categoria = await Categoria.find(params.id)
        if (!categoria) {
            return response.notFound({ message: 'Categoria não encontrada' })
        }
        categoria.merge(await request.body())
        await categoria.save()
        return response.ok(categoria)
    }
    async destroy({ params, response }: HttpContext) {
        const categoria = await Categoria.find(params.id)
        if (!categoria) {
            return response.notFound({ message: 'Categoria não encontrada' })
        }
        await categoria.delete()
        return response.noContent()
    }
    async store({ request, response }: HttpContext) {
        const dados = request.only([
            'nome',
            'tipo',
            'descricao',
            'usuarioId' //chave estrangeira
        ])
        const categoria = await Categoria.create(dados)
        return response.created(categoria)
    }

}