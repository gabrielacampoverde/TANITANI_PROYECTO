import { conexion } from './../configuracion/sequelize';
import express, { Request, Response } from 'express';
let bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');

import * as swaggerDocument from './../apidocs/documentacion.json';


import { persona_router} from '../rutas/persona';
import { metodoPago_router } from '../rutas/metodoPago';
import { categoria_router } from '../rutas/categoria';
import {producto_router} from '../rutas/producto';
import {usuario_router} from '../rutas/Usuario';
import {ordenDetalle_router} from '../rutas/ordenDetalle'
import { compras_router } from '../rutas/compras';

// const cors=require('cors');

export class Server {
  public app: express.Application;
  public puerto: any;
  constructor() {
    this.app = express();

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

  habilitarCORS(){
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
    this.app.get('/', (req: Request, res: Response) => {
      res.status(200).send("BIENVENIDO AL SERVIDOR");
    });
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    this.app.use('/api', persona_router);
    this.app.use('/api', metodoPago_router);
    this.app.use('/api', producto_router);
    this.app.use('/api', categoria_router);
    this.app.use('/api', usuario_router);
    this.app.use('/api', ordenDetalle_router);
    this.app.use('/api', compras_router);
    
  }

  start() {
    this.app.listen(this.puerto, () => {
      console.log(`Servidor OK en el puerto ${this.puerto}`);
      // force:true, elimina todas las tablas y las crea nuevamente
      // force:false, si las tablas no existen en la base de datos
      // las crea. Si las tablas ya existían en la base de datos
      // sólo crea las nuevas tablas en caso de que hubieran
      conexion.sync({ force: false}).then(() => {
        console.log("Base de datos creada correctamente");
      })
    });
  }

}