import express from 'express';
import { obtenerMotorista, obtenerMotoristas, crearMotorista } from '../controllers/motoristas.controller';

const router = express.Router();

router.get('/', obtenerMotoristas);
router.get('/:id', obtenerMotorista);
router.post('/', crearMotorista);

export default router;