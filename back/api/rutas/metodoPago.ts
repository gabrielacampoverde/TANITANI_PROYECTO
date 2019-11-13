import { Router} from 'express';
import { getMetPago, getMetPagoById, postMetPago, putmetPago, deleteMetPagoById } from '../controladores/metodoPago';

export let metodoPago_router = Router();

metodoPago_router.get('/metpago', getMetPago);
metodoPago_router.get('/metpago/:id', getMetPagoById);
metodoPago_router.post('/metpago', postMetPago);
metodoPago_router.put('/metpago', putmetPago);
// metodoPago_router.delete('/metpago' , deleteMetPagoById);