import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel' 

// 🔐 Autenticação
router.post('/login', '#controllers/auth_controller.login')
router.post('/logout', '#controllers/auth_controller.logout').use(middleware.auth({ guards: ['api'] }))
router.get('/me', '#controllers/auth_controller.me').use(middleware.auth({ guards: ['api'] }))


// 👤 Cadastro de usuários (se aplicável)
router.resource('/users', '#controllers/users_controller').apiOnly()
router.resource('/tipos', '#controllers/tipos_controller').apiOnly()


// 📂 Recurso protegido: Categorias
router.resource('/categorias', '#controllers/categorias_controller').apiOnly()
