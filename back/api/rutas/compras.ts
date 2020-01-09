import { Router} from 'express';
import { getCompras, getComprasById, postCompras, putCompras, deleteCompras } from '../controladores/compras';


export let compras_router = Router();

compras_router.get('/compras', getCompras);
compras_router.get('/compras/:id', getComprasById);
compras_router.post('/compras', postCompras);
compras_router.put('/compras', putCompras);
compras_router.delete('/compras/:id' , deleteCompras);