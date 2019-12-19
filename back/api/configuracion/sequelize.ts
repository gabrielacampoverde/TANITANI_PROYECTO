import { compra_model } from "../modelos/Compra";
import { destino_model } from "../modelos/Destino";
import { categoria_model } from "../modelos/Categoria";
import { comentario_model } from "../modelos/Comentario";
import { imagen_model } from "../modelos/Imagen";
import { ordendetalle_model } from "../modelos/Ordendetalle";
import { persona_model } from "../modelos/Persona";
import { producto_model } from "../modelos/Producto";
import { usuario_model } from "../modelos/Usuario";
import { orden_model } from "../modelos/Orden";
import { metodopago_model } from "../modelos/MetodoPago";
import { categoriaproducto_model } from "../modelos/CategoriaProducto";


const Sequelize = require("sequelize");

export const conexion = new Sequelize('tanitani','root', 'root', {
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


export const Compras: any = compra_model(conexion);
export const Destino: any = destino_model(conexion);
export const Imagen: any = imagen_model(conexion);
export const Categoria: any = categoria_model(conexion);
export const Comentario: any = comentario_model(conexion);
export const Ordendetalle: any = ordendetalle_model(conexion);
export const Persona: any = persona_model(conexion);
export const Producto: any = producto_model(conexion);
export const Usuario: any = usuario_model(conexion);
export const Orden:any = orden_model(conexion);
export const MetodoPago:any = metodopago_model(conexion);
export const CategoriaProducto:any = categoriaproducto_model(conexion);


Usuario.hasMany(Orden,{foreignKey:"usu_id"});
Orden.belongsTo(Usuario,{foreignKey:"usu_id"});

Usuario.hasMany(Comentario,{foreignKey:"usu_id"});
Comentario.belongsTo(Usuario,{foreignKey:"usu_id"});

MetodoPago.hasMany(Compras,{foreignKey:"mpago_id"});
Compras.belongsTo(MetodoPago,{foreignKey:"mpago_id"});

Orden.hasMany(Compras,{foreignKey:"orde_id"});
Compras.belongsTo(Orden,{foreignKey:"orde_id"});

Compras.hasMany(Destino,{foreignKey:"compra_id"});
Destino.belongsTo(Compras,{foreignKey:"compra_id"});

Persona.hasMany(Usuario,{foreignKey:"per_id"});
Usuario.belongsTo(Persona,{foreignKey:"per_id"});

Producto.hasMany(Ordendetalle,{foreignKey:"pro_id"});
Ordendetalle.belongsTo(Producto,{foreignKey:"pro_id"});

Producto.hasMany(Imagen,{foreignKey:"pro_id"});
Imagen.belongsTo(Producto,{foreignKey:"pro_id"});

Producto.hasMany(Comentario,{foreignKey:"pro_id"});
Comentario.belongsTo(Producto,{foreignKey:"pro_id"});

Producto.hasMany(CategoriaProducto,{foreignKey:"pro_id"});
CategoriaProducto.belongsTo(Producto,{foreignKey:"pro_id"});

Categoria.hasMany(CategoriaProducto,{foreignKey:"cat_id"});
CategoriaProducto.belongsTo(Categoria,{foreignKey:"cat_id"});

