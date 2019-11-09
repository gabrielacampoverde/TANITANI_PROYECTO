import { compra_model } from "../modelos/Compra";
import { destino_model } from "../modelos/Destino";
import { categoria_model } from "../modelos/Categoria";
import { comentario_model } from "../modelos/Comentario";
import { imagen_model } from "../modelos/Imagen";
import { ordendetalle_model } from "../modelos/Ordendetalle";
import { persona_model } from "../modelos/Persona";
import { producto_model } from "../modelos/Producto";
import { usuario_model } from "../modelos/Usuario";
import { metodopago_model } from "../modelos/MetodoPago";
import { orden_model } from "../modelos/Orden";

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
export const MetodoPago: any = metodopago_model(conexion);
export const Orden: any = orden_model(conexion);