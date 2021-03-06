import { Model } from 'sequelize';
// PABELLON CONTROLLER
import { Request, Response } from 'express';
import { Persona} from './../configuracion/sequelize';


export let getPersona = (req: Request, res: Response) => {
  Persona.findAll().then((objPersona: any) =>{
    res.status(200).json({
      message:'ok',
      content: objPersona
    })
  })
}


export let getPersonaById = (req:Request, res:Response) => {
    Persona.findByPk(req.params.id).then((objPersona:any)=>{
      if(objPersona){
        res.status(200).json({
          message:'ok',
          pabellon: objPersona
        })
      }else {
        res.status(500).json({
          message: 'error',
          content: 'No se encontro el pabellon'
        })
      }
    })
  
  }

export let postPersona = (req: Request, res: Response) => {
  // validando si el req.body cumple con los parametros minimos
  // de entrada
  if (!req.body.per_nom) {
    res.status(400).json(
      {
        ok: false,
        mensaje: "No se recibieron todos los campos en el request"
      }
    );
    return;
  }

 // creando una instanacia de la clase o modelo
  // Pabellon
  let objPersona = Persona.build(req.body);


  // guardando el objeto pabellón en la base de datos
  objPersona.save().then((objPersonaCreado: any) => {
    res.status(201).json(
      {
        ok: true,
        contenido: objPersonaCreado,
        mensaje: "Persona creada correctamente"
      }
    );
  }).catch((errorsh: any) => {
    res.status(500).json(
      {
        ok: false,
        mensaje: "Error interno en el servidor",
        contenido: errorsh
      }
    );
  })


}


export let putPersona = (req:Request, res:Response) =>{
  console.log(req);
  
  Persona.update(
      {
        per_nom: req.body.Persona.per_nom,
        per_ape: req.body.Persona.per_ape,
        per_dir: req.body.Persona.per_dir,
        per_cel: req.body.Persona.per_cel,
        per_est: req.body.Persona.per_est
      },
      {
          where: {
              per_id: req.body.Persona.per_id
          }
      }).then(() => {

          Persona.findByPk(req.body.Persona.per_id).then((objPersona: any) => {
              res.status(200).json({
                  message: 'ok',
                  content: objPersona
              })
          })
      }).catch((error: any) => {
          res.status(501).json({
              message: 'error',
              content: error
          })
      })
}

export let deletePersona = (req: Request, res: Response) => {
  let { id } = req.params;
  console.log(res);
  
  Persona.destroy({
      where: {
          per_id: id
      }
  }).then((cantidad: any) => {
      if (cantidad > 0) {
          let rpta = {
              success: true,
              message: "Usuario Eliminado",
              id: id
          }
          res.status(200).send(rpta);
      } else {
          let rpta = {
              success: false,
              message: 'No se ha Eliminado',
              id: ''
          }
          res.status(500).send(rpta);
      }
  })
}