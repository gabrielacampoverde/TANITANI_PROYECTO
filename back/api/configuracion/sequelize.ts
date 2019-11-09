import { compra_model } from "../modelos/Compra";
import { destino_model } from "../modelos/Destino";
import { categoria_model } from "../modelos/Categoria";
import { comentario_model } from "../modelos/Comentario";
import { imagen_model } from "../modelos/Imagen";
import { ordendetalle_model } from "../modelos/Ordendetalle";
import { persona_model } from "../modelos/Persona";
import { producto_model } from "../modelos/Producto";
import { usuario_model } from "../modelos/Usuario";

const Sequelize = require("sequelize");

export const conexion = new Sequelize('aulas','root', 'admin', {
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