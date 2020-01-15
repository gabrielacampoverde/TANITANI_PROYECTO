"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./../configuracion/sequelize");
exports.getMetPago = (req, res) => {
    sequelize_1.MetodoPago.findAll().then((objmetPago) => {
        res.status(200).json({
            message: 'ok',
            content: objmetPago
        });
    });
};
exports.getMetPagoById = (req, res) => {
    sequelize_1.MetodoPago.findByPk(req.params.id).then((objmetPago) => {
        if (objmetPago) {
            res.status(200).json({
                message: 'ok',
                metPago: objmetPago
            });
        }
        else {
            res.status(500).json({
                message: 'error',
                content: 'No se encontro el metodo de pago'
            });
        }
    });
};
exports.postMetPago = (req, res) => {
    // validando si el req.body cumple con los parametros minimos
    // de entrada
    if (!req.body.mpago_nom) {
        res.status(400).json({
            ok: false,
            mensaje: "No se recibieron todos los campos REQUERIDOS"
        });
        return;
    }
    // creando una instanacia de la clase o modelo
    // Pabellon
    let objmetPago = sequelize_1.MetodoPago.build(req.body);
    // guardando el objeto pabellón en la base de datos
    objmetPago.save().then((objmetPagoCreado) => {
        res.status(201).json({
            ok: true,
            contenido: objmetPagoCreado,
            mensaje: "Metodo de pago creado correctamente"
        });
    }).catch((error) => {
        res.status(500).json({
            ok: false,
            mensaje: "Error interno en el servidor",
            contenido: error
        });
    });
};
exports.putmetPago = (req, res) => {
    sequelize_1.MetodoPago.update({
        mpago_nom: req.body.MetodoPago.mpago_nom
    }, {
        where: {
            mpago_id: req.body.MetodoPago.mpago_id
        }
    }).then(() => {
        sequelize_1.MetodoPago.findByPk(req.body.MetodoPago.mpago_id).then((objmetPago) => {
            res.status(200).json({
                message: 'ok, pago actualizado',
                content: objmetPago,
            });
        });
    }).catch((error) => {
        res.status(501).json({
            message: 'error',
            content: error,
        });
    });
};
exports.deleteMetPagoById = (req, res) => {
    let { id } = req.params;
    sequelize_1.MetodoPago.destroy({
        where: {
            mpago_id: id
        }
    }).then((cantidad) => {
        if (cantidad > 0) {
            let rpta = {
                success: true,
                message: "Metodo de Pago Eliminado",
                id: id
            };
            res.status(200).send(rpta);
        }
        else {
            let rpta = {
                success: false,
                message: 'No se ha Eliminado',
                id: ''
            };
            res.status(500).send(rpta);
        }
    });
};
//# sourceMappingURL=metodoPago.js.map