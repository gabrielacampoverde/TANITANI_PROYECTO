//PRODUCTO ROUTER
import { Router } from "express";

import { crearOrdenProducto,getDetalles,getOrdenes,getOrdenById } from '../controladores/ordenDetalle';

export let ordenDetalle_router=Router();

// producto_router.post('/producto', postProducto);
// producto_router.post('/imagen', crearImagen);
ordenDetalle_router.post('/creorden',crearOrdenProducto);
ordenDetalle_router.get('/ordendet', getDetalles);
ordenDetalle_router.get('/ordenes', getOrdenes);
ordenDetalle_router.get('/orden/:id', getOrdenById);
// producto_router.put('/producto/:id', updateProducto);
// producto_router.delete('/producto/:id',producto_controller.deleteById);

// las rutas no pueden ser iguales por eso se cambio pabellones, '/pabellon/:id' asume que es igual '/pabellon/aulas'
