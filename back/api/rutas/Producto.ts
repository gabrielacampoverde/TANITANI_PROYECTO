//PRODUCTO ROUTER
import { Router } from "express";

import { postProducto, getProductos, getProductosById, updateProducto } from './../controladores/Producto';

export let producto_router=Router();

producto_router.post('/pabellon', postProducto);
producto_router.get('/pabellon', getProductos);
producto_router.get('/pabellon/:id', getProductosById);
producto_router.put('/pabellon', updateProducto);
// las rutas no pueden ser iguales por eso se cambio pabellones, '/pabellon/:id' asume que es igual '/pabellon/aulas'
