import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async login({ request, auth, response }: HttpContext) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      const user = await auth.use('web').attempt(email, password)
      return {
        user,
        token: auth.use('web').user!.rememberMeToken,
      }
    } catch {
      return response.unauthorized({ message: 'Credenciais inválidas' })
    }
  }
}
