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
    if (!req.body.per_nom) {
        res.status(400).json({
            ok: false,
            mensaje: "No se recibieron todos los campos en el request"
        });
        return;
    }
    // creando una instanacia de la clase o modelo
    // Pabellon
    let objPersona = sequelize_1.Persona.build(req.body);
    // guardando el objeto pabellón en la base de datos
    objPersona.save().then((objPersonaCreado) => {
        res.status(201).json({
            ok: true,
            contenido: objPersonaCreado,
            mensaje: "Persona creada correctamente"
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
        per_nom: req.body.per_nom,
        per_ape: req.body.per_ape,
        per_dir: req.body.per_dir,
        per_cel: req.body.per_cel,
        per_est: req.body.per_est
    }, {
        where: {
            per_id: req.body.per_id
        }
    }).then((perActualizado) => {
        sequelize_1.Persona.findByPk(perActualizado[0]).then((objPersona) => {
            res.status(200).json({
                message: 'ok',
                content: perActualizado,
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
