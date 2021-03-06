"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./../configuracion/sequelize");
exports.getCategoria = (req, res) => {
    sequelize_1.Categoria.findAll().then((objCategoria) => {
        res.status(200).json({
            message: 'ok',
            content: objCategoria
        });
    });
};
exports.getCategoriaById = (req, res) => {
    sequelize_1.Categoria.findByPk(req.params.id).then((objCategoria) => {
        if (objCategoria) {
            res.status(200).json({
                message: 'ok',
                categoria: objCategoria
            });
        }
        else {
            res.status(500).json({
                message: 'error',
                content: 'No se encontro la Categoria'
            });
        }
    });
};
exports.postCategoria = (req, res) => {
    // validando si el req.body cumple con los parametros minimos
    // de entrada
    if (!req.body.cat_nom) {
        res.status(400).json({
            ok: false,
            mensaje: "No se recibieron todos los campos en el request"
        });
        return;
    }
    // creando una instanacia de la clase o modelo
    // Pabellon
    let objCategoria = sequelize_1.Categoria.build(req.body);
    // guardando el objeto pabellón en la base de datos
    objCategoria.save().then((objCategoriaCreado) => {
        res.status(201).json({
            ok: true,
            contenido: objCategoriaCreado,
            mensaje: "Categoria creada correctamente"
        });
    }).catch((error) => {
        res.status(500).json({
            ok: false,
            mensaje: "Error interno en el servidor",
            contenido: error
        });
    });
};
exports.updateCategoria = (req, res) => {
    sequelize_1.Categoria.update({
        cat_nom: req.body.Categoria.cat_nom
    }, {
        where: {
            cat_id: req.body.Categoria.cat_id
        }
    }).then(() => {
        sequelize_1.Categoria.findByPk(req.body.Categoria.cat_id).then((objCategoria) => {
            res.status(200).json({
                message: 'ok',
                content: objCategoria
            });
        });
    }).catch((error) => {
        res.status(501).json({
            message: 'error',
            content: error
        });
    });
};
// export var categoria_controller = {
//   deleteById: (req:Request, res:Response) => {
//       let {id} = req.params;
//       // console.log("delete",id_empleado)
//       Categoria.destroy({
//           where:{
//               cat_id:id
//           }
//       }).then((cantidad:any) => {
//           if(cantidad > 0){
//               console.log("Cant",cantidad);
//               let respuesta = {
//                   success:true,
//                   message:"Usuario Eliminado",
//                   content:cantidad
//               }
//               res.status(200).send(respuesta);
//           }else{
//               let respuesta = {
//                   success:false,
//                   message:"No se ha eliminado",
//                   content:''
//               }
//               res.status(500).send(respuesta);
//           }
//       })
//   }
// }
exports.deleteCategoriaById = (req, res) => {
    let { id } = req.params;
    sequelize_1.Categoria.destroy({
        where: {
            cat_id: id
        }
    }).then((cantidad) => {
        if (cantidad > 0) {
            let rpta = {
                success: true,
                message: "Categoria Eliminado",
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
//# sourceMappingURL=categoria.js.map