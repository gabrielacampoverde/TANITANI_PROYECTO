import { Model } from 'sequelize';
// CATEGORIA CONTROLLER
import { Request, Response } from 'express';
import { Categoria} from './../configuracion/sequelize';
import { ok } from 'assert';
import { categoria_router} from '../rutas/categoria'; 

export let getCategoria = (req: Request, res: Response) => {
  Categoria.findAll().then((objCategoria: any) =>{
    res.status(200).json({
      message:'ok',
      content: objCategoria
    })
  })
}


export let getCategoriaById = (req:Request, res:Response) => {
    Categoria.findByPk(req.params.id).then((objCategoria:any)=>{
      if(objCategoria){
        res.status(200).json({
          message:'ok',
          categoria: objCategoria
        })
      }else {
        res.status(500).json({
          message: 'error',
          content: 'No se encontro la Categoria'
        })
      }
    })
  
  }

export let postCategoria = (req: Request, res: Response) => {
  // validando si el req.body cumple con los parametros minimos
  // de entrada
  if (!req.body.cat_nom) {
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
  let objCategoria = Categoria.build(req.body);


  // guardando el objeto pabellón en la base de datos
  objCategoria.save().then((objCategoriaCreado: any) => {
    res.status(201).json(
      {
        ok: true,
        contenido: objCategoriaCreado,
        mensaje: "Categoria creada correctamente"
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


export let updateCategoria = (req:Request, res:Response) =>{
  Categoria.update(
    {
      cat_nom: req.body.cat_nom
    },
    {
      where:{
        cat_id: req.body.cat_id
      }
    }).then((catActualizado:any) => {
        Categoria.findByPk(catActualizado[0]). then((objCategoria:any) => {
        res.status(200).json({
          message:'ok',
          content:catActualizado,
        })
      })
      
    }).catch ((error : any)=>{
      res.status(501).json({
        message:'error',
        content:error,
      })
    })
}

export var categoria_controller = {
    
  deleteById: (req:Request, res:Response) => {
      let {id} = req.params;
      // console.log("delete",id_empleado)
      Categoria.destroy({
          where:{
              cat_id:id
          }
      }).then((cantidad:any) => {
          if(cantidad > 0){
              console.log("Cant",cantidad);
              let respuesta = {
                  success:true,
                  message:"Usuario Eliminado",
                  content:cantidad
              }
              res.status(200).send(respuesta);
          }else{
              let respuesta = {
                  success:false,
                  message:"No se ha eliminado",
                  content:''
              }
              res.status(500).send(respuesta);
          }
      })
  }
}

export let deleteCategoriaById = (req:Request, res:Response) =>{
    
}
  