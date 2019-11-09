import { compra_model } from "../modelos/Compra";
import { destino_model } from "../modelos/Destino";

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