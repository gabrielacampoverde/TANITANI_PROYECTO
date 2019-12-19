"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Compra_1 = require("../modelos/Compra");
const Destino_1 = require("../modelos/Destino");
const Categoria_1 = require("../modelos/Categoria");
const Comentario_1 = require("../modelos/Comentario");
const Imagen_1 = require("../modelos/Imagen");
const Ordendetalle_1 = require("../modelos/Ordendetalle");
const Persona_1 = require("../modelos/Persona");
const Producto_1 = require("../modelos/Producto");
const Usuario_1 = require("../modelos/Usuario");
const Orden_1 = require("../modelos/Orden");
const MetodoPago_1 = require("../modelos/MetodoPago");
const CategoriaProducto_1 = require("../modelos/CategoriaProducto");
const Sequelize = require("sequelize");
exports.conexion = new Sequelize('tanitani', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-05:00',
    // configuración para lectura de fechas en la base de datos
    dialectOptions: {
        useUTC: false,
        dateStrings: true,
        typeCast: true
    }
});
exports.Compras = Compra_1.compra_model(exports.conexion);
exports.Destino = Destino_1.destino_model(exports.conexion);
exports.Imagen = Imagen_1.imagen_model(exports.conexion);
exports.Categoria = Categoria_1.categoria_model(exports.conexion);
exports.Comentario = Comentario_1.comentario_model(exports.conexion);
exports.Ordendetalle = Ordendetalle_1.ordendetalle_model(exports.conexion);
exports.Persona = Persona_1.persona_model(exports.conexion);
exports.Producto = Producto_1.producto_model(exports.conexion);
exports.Usuario = Usuario_1.usuario_model(exports.conexion);
exports.Orden = Orden_1.orden_model(exports.conexion);
exports.MetodoPago = MetodoPago_1.metodopago_model(exports.conexion);
exports.CategoriaProducto = CategoriaProducto_1.categoriaproducto_model(exports.conexion);
exports.Usuario.hasMany(exports.Orden, { foreignKey: "usu_id" });
exports.Orden.belongsTo(exports.Usuario, { foreignKey: "usu_id" });
exports.Usuario.hasMany(exports.Comentario, { foreignKey: "usu_id" });
exports.Comentario.belongsTo(exports.Usuario, { foreignKey: "usu_id" });
exports.MetodoPago.hasMany(exports.Compras, { foreignKey: "mpago_id" });
exports.Compras.belongsTo(exports.MetodoPago, { foreignKey: "mpago_id" });
exports.Orden.hasMany(exports.Compras, { foreignKey: "orde_id" });
exports.Compras.belongsTo(exports.Orden, { foreignKey: "orde_id" });
exports.Compras.hasMany(exports.Destino, { foreignKey: "compra_id" });
exports.Destino.belongsTo(exports.Compras, { foreignKey: "compra_id" });
exports.Persona.hasMany(exports.Usuario, { foreignKey: "per_id" });
exports.Usuario.belongsTo(exports.Persona, { foreignKey: "per_id" });
exports.Producto.hasMany(exports.Ordendetalle, { foreignKey: "pro_id" });
exports.Ordendetalle.belongsTo(exports.Producto, { foreignKey: "pro_id" });
exports.Producto.hasMany(exports.Imagen, { foreignKey: "pro_id" });
exports.Imagen.belongsTo(exports.Producto, { foreignKey: "pro_id" });
exports.Producto.hasMany(exports.Comentario, { foreignKey: "pro_id" });
exports.Comentario.belongsTo(exports.Producto, { foreignKey: "pro_id" });
exports.Producto.hasMany(exports.CategoriaProducto, { foreignKey: "pro_id" });
exports.CategoriaProducto.belongsTo(exports.Producto, { foreignKey: "pro_id" });
exports.Categoria.hasMany(exports.CategoriaProducto, { foreignKey: "cat_id" });
exports.CategoriaProducto.belongsTo(exports.Categoria, { foreignKey: "cat_id" });
