import { Router } from 'express';
import { personaController } from '../controllers/personaController';
import {seguimientoController} from "../controllers/seguimientoController";

const router: Router = Router();

router.get('/api/personas', personaController.getAllHandler);
router.post('/api/seguimientos', seguimientoController.createOneHandler);
router.get('/api/persona/:id',personaController.getOneHandler);
router.get('/api/seguimiento/:id',seguimientoController.getOneHandler);
router.put('/api/persona/:id', personaController.updateOneHandler);

export default router;