import { Model } from 'sequelize';
// PABELLON CONTROLLER
import { Request, Response } from 'express';
import { ok } from 'assert';
import { MetodoPago} from './../configuracion/sequelize';
import { metodoPago_router} from '../rutas/metodoPago'; 

export let getMetPago = (req: Request, res: Response) => {
  MetodoPago.findAll().then((objmetPago: any) =>{
    res.status(200).json({
      message:'ok',
      content: objmetPago
    })
  })
}


export let getMetPagoById = (req:Request, res:Response) => {
    MetodoPago.findByPk(req.params.id).then((objmetPago:any)=>{
      if(objmetPago){
        res.status(200).json({
          message:'ok',
          metPago: objmetPago
        })
      }else {
        res.status(500).json({
          message: 'error',
          content: 'No se encontro el metodo de pago'
        })
      }
    })
  
  }

export let postMetPago = (req: Request, res: Response) => {
  // validando si el req.body cumple con los parametros minimos
  // de entrada
  if (!req.body.mpago_nom) {
    res.status(400).json(
      {
        ok: false,
        mensaje: "No se recibieron todos los campos REQUERIDOS"
      }
    );
    return;
  }

 // creando una instanacia de la clase o modelo
  // Pabellon
  let objmetPago = MetodoPago.build(req.body);


  // guardando el objeto pabellón en la base de datos
  objmetPago.save().then((objmetPagoCreado: any) => {
    res.status(201).json(
      {
        ok: true,
        contenido: objmetPagoCreado,
        mensaje: "Metodo de pago creado correctamente"
      }
    );
  }).catch((error: any) => {
    res.status(500).json(
      {
        ok: false,
        mensaje: "Error interno en el servidor",
        contenido: error
      }
    );
  })


}

export let putmetPago = (req:Request, res:Response) =>{
  MetodoPago.update(
    {
      mpago_nom: req.body.MetodoPago.mpago_nom
    },
    {
      where:{
        mpago_id: req.body.MetodoPago.mpago_id
      }
    }).then(() => {
      MetodoPago.findByPk(req.body.MetodoPago.mpago_id). then((objmetPago:any) => {
        res.status(200).json({
          message:'ok, pago actualizado',
          content:objmetPago,
        })
      })
      
    }).catch ((error : any)=>{
      res.status(501).json({
        message:'error',
        content:error,
      })
    })
}

export let deleteMetPagoById = (req:Request, res:Response) =>{
  let {id} = req.params;

  MetodoPago.destroy({
      where:{
        mpago_id:id
      }
  }).then((cantidad:any)=>{
      if(cantidad>0){
          let rpta = {
              success:true,
              message:"Metodo de Pago Eliminado",
              id:id
          }
          res.status(200).send(rpta);
      }else{
          let rpta = {
              success:false,
              message:'No se ha Eliminado',
              id:''
          }
          res.status(500).send(rpta);
      }
  })
}