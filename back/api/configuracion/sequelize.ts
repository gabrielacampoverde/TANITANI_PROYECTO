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

export const conexion = new Sequelize('aulas','root', 'root', {
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


Usuario.hasMany(Orden,{foreingKey:"usu_id"});
Orden.belongsTo(Usuario,{foreingKey:"usu_id"});

Usuario.hasMany(Comentario,{foreingKey:"usu_id"});
Comentario.belongsTo(Usuario,{foreingKey:"usu_id"});

MetodoPago.hasMany(Compras,{foreingKey:"mpago_id"});
Compras.belongsTo(MetodoPago,{foreingKey:"mpago_id"});

Orden.hasMany(Compras,{foreingKey:"orde_id"});
Compras.belongsTo(Orden,{foreingKey:"orde_id"});

Compras.hasMany(Destino,{foreingKey:"compra_id"});
Destino.belongsTo(Compras,{foreingKey:"compra_id"});

Persona.hasMany(Usuario,{foreingKey:"per_id"});
Usuario.belongsTo(Persona,{foreingKey:"per_id"});

Producto.hasMany(Ordendetalle,{foreingKey:"pro_id"});
Ordendetalle.belongsTo(Producto,{foreingKey:"pro_id"});

Producto.hasMany(Imagen,{foreingKey:"pro_id"});
Imagen.belongsTo(Producto,{foreingKey:"pro_id"});

Producto.hasMany(Comentario,{foreingKey:"pro_id"});
Comentario.belongsTo(Producto,{foreingKey:"pro_id"});

Producto.hasMany(CategoriaProducto,{foreingKey:"prod_id"});
CategoriaProducto.belongsTo(Producto,{foreignKey:"prod_id"});

Categoria.hasMany(CategoriaProducto,{foreingKey:"cat_id"});
CategoriaProducto.belongsTo(Categoria,{foreignKey:"cat_id"});

