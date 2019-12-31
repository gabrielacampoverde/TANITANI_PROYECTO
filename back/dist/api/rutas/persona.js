"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const persona_1 = require("../controladores/persona");
exports.persona_router = express_1.Router();
exports.persona_router.get('/persona', persona_1.getPersona);
exports.persona_router.get('/persona/:id', persona_1.getPersonaById);
exports.persona_router.post('/persona', persona_1.postPersona);
exports.persona_router.put('/persona', persona_1.putPersona);
// falta delete
exports.persona_router.delete('/persona/:id', persona_1.deletePersonaById);
//# sourceMappingURL=persona.js.map