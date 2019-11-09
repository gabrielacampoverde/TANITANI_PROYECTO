
//
import { Router} from 'express';
import { MetodoDepago } from '../controladores/MetodoDepago';

export let metodoDepago_router = Router();

metodoDepago_router.post('/metodo', MetodoDepago);