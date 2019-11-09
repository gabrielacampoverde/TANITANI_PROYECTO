"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./../configuracion/sequelize");
exports.getPersona = (req, res) => {
    sequelize_1.Persona.findAll().then((objPersona) => {
        res.status(200).json({
            message: 'ok',
            content: objPersona
        });
    });
};
exports.getPersonaById = (req, res) => {
    sequelize_1.Persona.findByPk(req.params.id).then((objPersona) => {
        if (objPersona) {
            res.status(200).json({
                message: 'ok',
                pabellon: objPersona
            });
        }
        else {
            res.status(500).json({
                message: 'error',
                content: 'No se encontro el pabellon'
            });
        }
    });
};
exports.postPersona = (req, res) => {
    // validando si el req.body cumple con los parametros minimos
    // de entrada
    if (!req.body.pab_nom) {
        res.status(400).json({
            ok: false,
            mensaje: "No se recibieron todos los campos en el request"
        });
        return;
    }
    // creando una instanacia de la clase o modelo
    // Pabellon
    let objPabellon = sequelize_1.Persona.build(req.body);
    // guardando el objeto pabellón en la base de datos
    objPabellon.save().then((objPabellonCreado) => {
        res.status(201).json({
            ok: true,
            contenido: objPabellonCreado,
            mensaje: "Pabellon creado correctamente"
        });
    }).catch((errorsh) => {
        res.status(500).json({
            ok: false,
            mensaje: "Error interno en el servidor",
            contenido: errorsh
        });
    });
};
exports.putPersona = (req, res) => {
    sequelize_1.Persona.update({
        per_nom: req.body.Persona.per_nom
    }, {
        where: {
            per_id: req.body.persona.per_id
        }
    }).then((pabActualizado) => {
        sequelize_1.Persona.findByPk(pabActualizado[0]).then((objPersona) => {
            res.status(200).json({
                message: 'ok',
                content: pabActualizado,
            });
        });
    }).catch((error) => {
        res.status(501).json({
            message: 'error',
            content: error,
        });
    });
};
exports.deletePersonaById = (req, res) => {
};
