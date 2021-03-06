"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoria_1 = require("../controladores/categoria");
exports.categoria_router = express_1.Router();
exports.categoria_router.post('/categoria', categoria_1.postCategoria);
exports.categoria_router.get('/categoria', categoria_1.getCategoria);
exports.categoria_router.get('/categoria/:id', categoria_1.getCategoriaById);
exports.categoria_router.put('/categoria', categoria_1.updateCategoria);
exports.categoria_router.delete('/categoria/:id', categoria_1.deleteCategoriaById);
// categoria_router.delete('/categoria/:id', deleteCategoriaById);
//# sourceMappingURL=categoria.js.map