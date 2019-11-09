import { Model } from 'sequelize';
// PABELLON CONTROLLER
import { Request, Response } from 'express';
import { Persona} from './../configuracion/sequelize';
import { ok } from 'assert';
import { persona_router} from '../rutas/persona'; 

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
  if (!req.body.pab_nom) {
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
  let objPabellon = Persona.build(req.body);


  // guardando el objeto pabellón en la base de datos
  objPabellon.save().then((objPabellonCreado: any) => {
    res.status(201).json(
      {
        ok: true,
        contenido: objPabellonCreado,
        mensaje: "Pabellon creado correctamente"
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
  Persona.update(
    {
      per_nom: req.body.Persona.per_nom
    },
    {
      where:{
        per_id: req.body.persona.per_id
      }
    }).then((pabActualizado:any) => {
      Persona.findByPk(pabActualizado[0]). then((objPersona:any) => {
        res.status(200).json({
          message:'ok',
          content:pabActualizado,
        })
      })
      
    }).catch ((error : any)=>{
      res.status(501).json({
        message:'error',
        content:error,
      })
    })
}

export let deletePersonaById = (req:Request, res:Response) =>{
    
}
  