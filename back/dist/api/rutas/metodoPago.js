"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const metodoPago_1 = require("../controladores/metodoPago");
exports.metodoPago_router = express_1.Router();
exports.metodoPago_router.get('/metpago', metodoPago_1.getMetPago);
exports.metodoPago_router.get('/metpago/:id', metodoPago_1.getMetPagoById);
exports.metodoPago_router.post('/metpago', metodoPago_1.postMetPago);
exports.metodoPago_router.put('/metpago', metodoPago_1.putmetPago);
exports.metodoPago_router.delete('/metpago/:id', metodoPago_1.deleteMetPagoById);
//# sourceMappingURL=metodoPago.js.map