"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//PRODUCTO ROUTER
const express_1 = require("express");
const Producto_1 = require("./../controladores/Producto");
exports.producto_router = express_1.Router();
exports.producto_router.post('/pabellon', Producto_1.postProducto);
exports.producto_router.get('/pabellon', Producto_1.getProductos);
exports.producto_router.get('/pabellon/:id', Producto_1.getProductosById);
exports.producto_router.put('/pabellon', Producto_1.updateProducto);
// las rutas no pueden ser iguales por eso se cambio pabellones, '/pabellon/:id' asume que es igual '/pabellon/aulas'
