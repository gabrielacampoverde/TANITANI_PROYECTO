"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../configuracion/sequelize");
exports.getProductos = (req, res) => {
    sequelize_1.Producto.findAll().then((objProductos) => {
        res.status(200).json({
            message: 'Ok',
            Producto: objProductos
        });
    });
};
exports.postProducto = (req, res) => {
    console.log("miproducto", req.body);
    sequelize_1.Producto.build(req.body.producto).save().then((proCreada) => {
        // Se hace la relacion para las dos tablas
        let fk_prodcat = proCreada.pro_id;
        console.log("dd", fk_prodcat);
        let jsonpcat = req.body.prodcat;
        console.log("333", jsonpcat);
        jsonpcat.pro_id = fk_prodcat;
        let objcatProd = sequelize_1.CategoriaProducto.build(req.body.prodcat);
        objcatProd.save().then((procCreado) => {
            sequelize_1.CategoriaProducto.findByPk(procCreado.catprod_id).then((procEncontrado) => {
                res.status(201).json({
                    message: 'Usuario creado',
                    content: procEncontrado
                });
            });
        }).catch((error) => {
            res.status(501).json({
                message: 'Error',
                content: error
            });
        });
    });
    // build => CONSTRUYE el objeto usuario, mas NO LO CREA en la base de datos
    // save()=> promesa que GUARDA el registro en la Base de Datos
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
exports.producto_controller = {
    deleteById: (req, res) => {
        let { id } = req.params;
        // console.log("delete",id_empleado)
        sequelize_1.Producto.destroy({
            where: {
                pro_id: id
            }
        }).then((cantidad) => {
            if (cantidad > 0) {
                console.log("Cant", cantidad);
                let respuesta = {
                    success: true,
                    message: "Usuario Eliminado",
                    content: cantidad
                };
                res.status(200).send(respuesta);
            }
            else {
                let respuesta = {
                    success: false,
                    message: "No se ha eliminado",
                    content: ''
                };
                res.status(500).send(respuesta);
            }
        });
    }
};
