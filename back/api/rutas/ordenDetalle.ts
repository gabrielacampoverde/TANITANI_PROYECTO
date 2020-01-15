//PRODUCTO ROUTER
import { Router } from "express";

import { crearOrdenProducto,getDetalles } from '../controladores/ordenDetalle';

export let ordenDetalle_router=Router();

// producto_router.post('/producto', postProducto);
// producto_router.post('/imagen', crearImagen);
ordenDetalle_router.post('/ordendet',crearOrdenProducto);
ordenDetalle_router.get('/orden', getDetalles);
// producto_router.get('/producto/:id', getProductosById);
// producto_router.put('/producto/:id', updateProducto);
// producto_router.delete('/producto/:id',producto_controller.deleteById);

// las rutas no pueden ser iguales por eso se cambio pabellones, '/pabellon/:id' asume que es igual '/pabellon/aulas'
