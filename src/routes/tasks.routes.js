
import { Router } from 'express';
import {getTasks, createTask, getOneTask, deleteTask, updateTask} from './../controllers/task.controller';
const router = Router();

router.get('/', getTasks);
router.get('/:id', getOneTask);
router.post('/', createTask);
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);

export default router;