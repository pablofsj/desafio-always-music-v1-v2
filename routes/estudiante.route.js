import { Router } from "express";
import { estudianteController } from "../controllers/estudiante.controller.js";

const router = Router()

router.get('/', estudianteController.todosEstudiantes)
router.get('/:rut', estudianteController.estudianteObtenido)
router.post('/', estudianteController.estudianteRegistrado)
router.put('/:rut', estudianteController.estudianteActualizado)
router.delete('/:rut', estudianteController.estudianteBorrado)

export default router;