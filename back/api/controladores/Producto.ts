//PABELLON CONTROLLER
import{Request,Response} from 'express'
import { Producto } from '../configuracion/sequelize'
import { producto_model } from '../modelos/Producto'

export let getProductos=(req:Request,res:Response)=>{
    Producto.findAll().then((objProductos:any)=>{
        res.status(200).json({
            message:'Ok',
            Producto:objProductos

        })
    })

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


export let getProductosById=(req:Request,res:Response)=>{
    Producto.findByPk(req.params.id).then((objProducto:any)=>{
        if(objProducto){
            res.status(200).json({
                message:'Ok',
                Producto:objProducto
            })
        }else{
            res.status(500).json({
                message:'error',
                content:'No se encontro el producto'
            })
        }
    })
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