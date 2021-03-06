import { Router} from 'express';
import { getCategoria, getCategoriaById, postCategoria, updateCategoria, deleteCategoriaById } from '../controladores/categoria';



export let categoria_router = Router();

categoria_router.post('/categoria',postCategoria);
categoria_router.get('/categoria', getCategoria);
categoria_router.get('/categoria/:id', getCategoriaById);
categoria_router.put('/categoria', updateCategoria);
categoria_router.delete('/categoria/:id', deleteCategoriaById);
// categoria_router.delete('/categoria/:id', deleteCategoriaById);



