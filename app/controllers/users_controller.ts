import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  public async store({ request, response }: HttpContext) {
    const data =
        request.only
       (['fullName',
       'email', 
       'password'])
    const user = await User.create(data)

    return response.created(user)
  }

  public async update({ params, request, response }: HttpContext) {
    const user = await User.findOrFail(params.id)
    const data = request.only(['fullName', 'email', 'password'])

    user.merge(data)
    await user.save()

    return response.ok(user)
  }

  public async destroy({ params, response }: HttpContext) {
    const user = await User.findOrFail(params.id)
    await user.delete()

    return response.noContent()
  }

  public async index() {
    return User.all()
  }

  public async show({ params }: HttpContext) {
    return User.findOrFail(params.id)
  }
}
