import { Router } from "express"
import { UsuarioController } from '../controllers/usuario-controller.js'
import { authMiddleware } from '../middlewares/auth-middleware.js'

const router = Router()

router.get('/usuario', authMiddleware, UsuarioController.index)
router.get('/usuarios/:id', authMiddleware, UsuarioController.buscarPorId)

router.post('/register', UsuarioController.register)
router.post('/login', UsuarioController.login)

router.put('/usuarios/:id', authMiddleware, UsuarioController.update)
router.delete('/usuarios/:id', authMiddleware, UsuarioController.delete)

router.post('/pedido', UsuarioController.criarPedido) 


export default router