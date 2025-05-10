import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  public async login({ request, response, auth }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    try {
      const user = await User.verifyCredentials(email, password)
      const token = await auth.use('api').createToken(user)

      return response.ok({ token, user })
    } catch {
      return response.unauthorized({ message: 'Credenciais inválidas' })
    }
  }

  public async logout({ auth, response }: HttpContext) {
    const user = auth.user

    if (user && user.currentAccessToken) {
      await User.accessTokens.delete(user, user.currentAccessToken.identifier)
    }

    return response.ok({ message: 'Logout realizado com sucesso' })
  }

  public async me({ auth, response }: HttpContext) {
    const user = await auth.authenticate()
    return response.ok(user)
  }
}
