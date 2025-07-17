import express from 'express';
import { getNote , getNotes , postNote , updateNote , deleteNote } from '../controllers/noteControllers.js';

const router = express.Router();

router.post('/', postNote)

router.get('/', getNotes);

router.get('/:id', getNote)

router.put('/:id', updateNote)

router.delete('/:id', deleteNote)

export default router;