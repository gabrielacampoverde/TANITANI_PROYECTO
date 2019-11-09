"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./../configuracion/sequelize");
const express_1 = __importDefault(require("express"));
let bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = __importStar(require("./../apidocs/documentacion.json"));
const persona_1 = require("../rutas/persona");
const categoria_1 = require("../rutas/categoria");
const metodoPago_1 = require("../rutas/metodoPago");
class Server {
    constructor() {
        this.app = express_1.default();
        // obtener el puerto que nos asignará heroku
        // o establer por defecto el puerto 3000
        this.puerto = process.env.PORT || 3000;
        // la configuracion de body-parser, siempre debe estas
        // antes de configurar las rutas
        this.configurarBodyParser();
        this.configurarRutas();
    }
    configurarBodyParser() {
        this.app.use(bodyParser.json());
    }
    configurarRutas() {
        // configurando una ruta por defecto o de prueba
        this.app.get('/', (req, res) => {
            res.status(200).send("BIENVENIDO AL SERVIDOR");
        });
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
        this.app.use('/api', persona_1.persona_router);
        this.app.use('/api', categoria_1.categoria_router);
        this.app.use('/api', metodoPago_1.metodoPago_router);
    }
    start() {
        this.app.listen(this.puerto, () => {
            console.log(`Servidor OK en el puerto ${this.puerto}`);
            // force:true, elimina todas las tablas y las crea nuevamente
            // force:false, si las tablas no existen en la base de datos
            // las crea. Si las tablas ya existían en la base de datos
            // sólo crea las nuevas tablas en caso de que hubieran
            sequelize_1.conexion.sync({ force: true }).then(() => {
                console.log("Base de datos creada correctamente");
            });
        });
    }
}
exports.Server = Server;
