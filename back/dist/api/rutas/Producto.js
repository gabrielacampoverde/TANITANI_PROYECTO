"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//PRODUCTO ROUTER
const express_1 = require("express");
const Producto_1 = require("../controladores/Producto");
exports.producto_router = express_1.Router();
exports.producto_router.post('/producto', Producto_1.postProducto);
// producto_router.post('/imagen', crearImagen);
exports.producto_router.post('/productocat', Producto_1.crearProductoCategoria);
exports.producto_router.get('/producto', Producto_1.getProductos);
exports.producto_router.get('/producto/:id', Producto_1.getProductosById);
exports.producto_router.put('/producto/:id', Producto_1.updateProducto);
exports.producto_router.delete('/producto/:id', Producto_1.producto_controller.deleteById);
// las rutas no pueden ser iguales por eso se cambio pabellones, '/pabellon/:id' asume que es igual '/pabellon/aulas'
//# sourceMappingURL=producto.js.map