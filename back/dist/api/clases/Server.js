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
let nodemailer = require('nodemailer');
const swaggerDocument = __importStar(require("./../apidocs/documentacion.json"));
const persona_1 = require("../rutas/persona");
const metodoPago_1 = require("../rutas/metodoPago");
const categoria_1 = require("../rutas/categoria");
const producto_1 = require("../rutas/producto");
const Usuario_1 = require("../rutas/Usuario");
const ordenDetalle_1 = require("../rutas/ordenDetalle");
const compras_1 = require("../rutas/compras");
// const cors=require('cors');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
let transportador = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        // pones el correo que enviara el email
        user: "gabriela.campoverde@gmail.com  ",
        //pones la contraseña del email
        pass: "gabych2401"
    }
});
class Server {
    constructor() {
        this.app = express_1.default();
        // this.app.use(cors());
        // obtener el puerto que nos asignará heroku
        // o establer por defecto el puerto 3000
        this.puerto = process.env.PORT || 4000;
        this.habilitarCORS();
        // la configuracion de body-parser, siempre debe estas
        // antes de configurar las rutas
        this.configurarBodyParser();
        this.configurarRutas();
    }
    habilitarCORS() {
        // console.log("ingreso");
        // this.app.use((req, res, next) => {
        //   res.header('Access-Control-Allow-Origin', '*');
        //   res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        //   if(req.method==='OPTIONS'){
        //     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        //     return res.status(200).json({});
        //   }
        // res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        // next();
        // });
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            next();
        });
    }
    configurarBodyParser() {
        this.app.use(bodyParser.json());
    }
    configurarRutas() {
        // this.app.use(cors({
        //   origin:'http://localhost:4200',
        //   methods:['GET','POST','PATCH','DELETE','PUT']
        // }));
        // configurando una ruta por defecto o de prueba
        this.app.get('/', (req, res) => {
            res.status(200).send("BIENVENIDO AL SERVIDOR");
        });
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
        this.app.use('/api', persona_1.persona_router);
        this.app.use('/api', metodoPago_1.metodoPago_router);
        this.app.use('/api', producto_1.producto_router);
        this.app.use('/api', categoria_1.categoria_router);
        this.app.use('/api', Usuario_1.usuario_router);
        this.app.use('/api', ordenDetalle_1.ordenDetalle_router);
        this.app.use('/api', compras_1.compras_router);
        this.app.post('/correo', (req, res) => {
            console.log("data", req.body);
            let email = {
                from: 'gabriela.campoverde@gmail.com',
                to: 'gabriela.campoverde@gmail.com',
                subject: "Solicitud Nueva",
                text: `Ha llegado una nueva solicitud de TaniTani de: ${req.body.nombre} con los datos ${req.body.email}, ${req.body.telefono}, ${req.body.ciudad}, ${req.body.mensaje}`
            };
            transportador.sendMail(email, (error, info) => {
                if (error) {
                    console.log("aqui pasa algo", error);
                }
                else {
                    console.log("exito");
                    res.status(200).send("Correo Enviados");
                }
            });
        });
    }
    start() {
        this.app.listen(this.puerto, () => {
            console.log(`Servidor OK en el puerto ${this.puerto}`);
            // force:true, elimina todas las tablas y las crea nuevamente
            // force:false, si las tablas no existen en la base de datos
            // las crea. Si las tablas ya existían en la base de datos
            // sólo crea las nuevas tablas en caso de que hubieran
            sequelize_1.conexion.sync({ force: false }).then(() => {
                console.log("Base de datos creada correctamente");
            });
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map