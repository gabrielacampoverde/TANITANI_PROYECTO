import { Router} from 'express';
import { getCategoria, getCategoriaById, postCategoria, putCategoria, deleteCategoriaById } from '../controladores/categoria';



export let categoria_router = Router();

categoria_router.get('/categoria', getCategoria);
categoria_router.get('/categoria/:id', getCategoriaById);
categoria_router.post('/categoria',postCategoria);
categoria_router.put('/categoria/:id', putCategoria);
categoria_router.delete('/catwegoria/:id', deleteCategoriaById);



