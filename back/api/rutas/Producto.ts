//PRODUCTO ROUTER
import { Router } from "express";

import { postProducto, getProductos, getProductosById, updateProducto, producto_controller,crearProductoCategoria } from '../controladores/Producto';

export let producto_router=Router();

producto_router.post('/producto', postProducto);
// producto_router.post('/imagen', crearImagen);
producto_router.post('/productocat', crearProductoCategoria);
producto_router.get('/producto', getProductos);
producto_router.get('/producto/:id', getProductosById);
producto_router.put('/producto/:id', updateProducto);
producto_router.delete('/producto/:id',producto_controller.deleteById);

// las rutas no pueden ser iguales por eso se cambio pabellones, '/pabellon/:id' asume que es igual '/pabellon/aulas'
