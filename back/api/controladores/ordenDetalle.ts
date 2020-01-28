//ORDENDETALLE CONTROLLER
import{Request,Response} from 'express'
import { Producto,Ordendetalle,Orden,Usuario,Persona} from '../configuracion/sequelize'
import { producto_model } from '../modelos/Producto'


export let crearOrdenProducto = (req: Request, res: Response) => {
    // let objCP = CategoriaProducto.build(req.body);
    // console.log(req.body)
    // console.log(objCP)
    // objCP.save().then((algo:any)=>{
    //     // console.log(algo)
    // })
    let ProductoId = req.body.pro_id;
    console.log(req.body.pro_id);
    
    let objOrden = Orden.build(req.body);
    let objOrdenDet=Ordendetalle.build(req.body);
    let objUsuario=Usuario.build(req.body);
    objOrden.save().then((ordenCreado:any) => {
        var OrdenTemp = ordenCreado;
        console.log(OrdenTemp);
        
        return Producto.findOne({where: {pro_id: ProductoId}})
        .then((pro_encontrada:any)=> {
            let objProOrden = {
                orde_id:OrdenTemp.orde_id,
                pro_id:pro_encontrada.pro_id,
                usu_id:objUsuario.usu_id,
                odet_cant:objOrdenDet.odet_cant,
                odet_prec:objOrdenDet.odet_prec,
            }
            let objPO = Ordendetalle.build(objProOrden);
            objPO.save().then((proOrdenCreado:any) => {
                let rpta = {
                    ok:true,
                    orden:ordenCreado,
                    Ordendetalle:proOrdenCreado
                }
                res.status(201).send(rpta);
            })
            
        })
    })
};
export let getDetalles=(req:Request,res:Response)=>{
Persona.findAll({
    include:[{model:Usuario,
        include:[{
            model: Orden, 
                include:[{
                    model: Ordendetalle,
                    include:[{
                        model: Producto
                    }]
                }]
            
            
        }]
    }]
 
}).then((resultado:any)=>{
    res.status(200).json({
        message: 'ok',
        content: resultado
    })
})


}

export let getOrdenes=(req:Request,res:Response)=>{
    Orden.findAll({
      
        include:[{
            
              model:Ordendetalle,
                         include:[{
                              model: Producto
        }]
       
    }]
}).then((resultado:any)=>{
        res.status(200).json({
            message: 'ok',
            content: resultado
        })
    })

// Producto.findAll({  include:[{
//     model: Ordendetalle
// }]}).then((objProductos:any)=>{
//     res.status(200).json({
//         message:'Ok',
//         Producto:objProductos,

//     })
// })
}

export let postProducto=(req:Request,res:Response)=>{


// validando si el req.body cumple con los parametros minimosde entrada

if(!req.body.pro_nom){
    res.status(400).json(
        {
            ok:false,
            mensaje:"No se recibieron todos los campos en el request"
        }
    );
    return;
}

    let objProducto=Producto.build(req.body);
    // objPabellon.pab_nom=req.body.pab_nom;
    // console.log(objPabellon);
    objProducto.save().then((objProductoCreado:any)=>{
        res.status(201).json(
            {
                ok:true,
                contenido: objProductoCreado,
                mensaje:"Producto creado correctamente"
            }
        );
    }).catch((errorsh:any)=>{
        res.status(500).json(
            {
                ok:false,
                mensaje:"Error interno en servidor",
                contenido: errorsh
            }
        );
    })
}


export let getOrdenById=(req:Request,res:Response)=>{
    console.log(res);
  
    Persona.findAll({
        where:{
            per_id: req.params.id
         },
        include:[{model:Usuario,
            include:[{
                model: Orden, 
                    include:[{
                        model: Ordendetalle,
                        include:[{
                            model: Producto
                        }]
                    }]
                
                
            }]
        }]
     
    }).then((resultado:any)=>{
        res.status(200).json({
            message: 'ok',
            content: resultado
        })
    })
    
    // Producto.findByPk(req.params.id).then((objProducto:any)=>{
    //     if(objProducto){
    //         res.status(200).json({
    //             message:'Ok',
    //             Producto:objProducto
    //         })
    //     }else{
    //         res.status(500).json({
    //             message:'error',
    //             content:'No se encontro el producto'
    //         })
    //     }
    // })
}

export let updateProducto=(req:Request,res:Response)=>{
    Producto.update(
        {
            // pro_nom: req.body.producto.pro_nom, omiti "producto" para que funcione
            pro_nom: req.body.pro_nom,
            pro_prec: req.body.pro_prec,
            pro_est: req.body.pro_est,
            pro_desc: req.body.pro_desc

        },{
            where:{
                pro_id: req.body.pro_id
            }
        
        }).then((prodActualizado:any)=>{
            Producto.findByPk(prodActualizado[0]).then((objProducto:any)=>{
                
                res.status(200).json({
                    message:'ok',
                    content: objProducto
            })
        })
    }).catch((error:any)=>{
        res.status(501).json({
            message:'error',
            content:error
        })
    })
}
 
export var producto_controller = {
    
    deleteById: (req:Request, res:Response) => {
        let {id} = req.params;
        // console.log("delete",id_empleado)
        Producto.destroy({
            where:{
                pro_id:id
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