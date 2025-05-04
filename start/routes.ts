import router from '@adonisjs/core/services/router'
import Categoria from '#models/categoria'


router.resource('/categorias', '#controllers/categorias_controller').apiOnly()