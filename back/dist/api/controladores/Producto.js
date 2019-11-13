"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../configuracion/sequelize");
exports.getProductos = (req, res) => {
    sequelize_1.Producto.findAll().then((objProductos) => {
        res.status(200).json({
            message: 'Ok',
            content: objProductos
        });
    });
};
exports.postProducto = (req, res) => {
    // validando si el req.body cumple con los parametros minimosde entrada
    if (!req.body.pro_nom) {
        res.status(400).json({
            ok: false,
            mensaje: "No se recibieron todos los campos en el request"
        });
        return;
    }
    let objProducto = sequelize_1.Producto.build(req.body);
    // objPabellon.pab_nom=req.body.pab_nom;
    // console.log(objPabellon);
    objProducto.save().then((objProductoCreado) => {
        res.status(201).json({
            ok: true,
            contenido: objProductoCreado,
            mensaje: "Producto creado correctamente"
        });
    }).catch((errorsh) => {
        res.status(500).json({
            ok: false,
            mensaje: "Error interno en servidor",
            contenido: errorsh
        });
    });
};
exports.getProductosById = (req, res) => {
    sequelize_1.Producto.findByPk(req.params.id).then((objProducto) => {
        if (objProducto) {
            res.status(200).json({
                message: 'Ok',
                Producto: objProducto
            });
        }
        else {
            res.status(500).json({
                message: 'error',
                content: 'No se encontro el producto'
            });
        }
    });
};
exports.updateProducto = (req, res) => {
    sequelize_1.Producto.update({
        // pro_nom: req.body.producto.pro_nom, omiti "producto" para que funcione
        pro_nom: req.body.pro_nom,
        pro_prec: req.body.pro_prec,
        pro_est: req.body.pro_est,
        pro_desc: req.body.pro_desc
    }, {
        where: {
            pro_id: req.body.pro_id
        }
    }).then((prodActualizado) => {
        sequelize_1.Producto.findByPk(prodActualizado[0]).then((objProducto) => {
            res.status(200).json({
                message: 'ok',
                content: objProducto
            });
        });
    }).catch((error) => {
        res.status(501).json({
            message: 'error',
            content: error
        });
    });
};
