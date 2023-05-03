import express from 'express';
import { obtenerUsuario, obtenerUsuarios, crearUsuario } from '../controllers/usuarios.controller';

const router = express.Router();

router.get('/', obtenerUsuario);
router.post('/', crearUsuario);

export default router;