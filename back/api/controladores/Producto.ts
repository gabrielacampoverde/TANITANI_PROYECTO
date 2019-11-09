//PABELLON CONTROLLER
import{Request,Response} from 'express'
import { Producto, Aula, TipoAula } from '../configuracion/sequelize'
import { reserva_model } from '../modelos/Reserva'

export let getProductos=(req:Request,res:Response)=>{
    Producto.findAll().then((objProductos:any)=>{
        res.status(200).json({
            message:'Ok',
            content:objProductos
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


export let getProductossById=(req:Request,res:Response)=>{
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
            pro_nom: req.body.producto.pro_nom
        },{
            where:{
                pro_id: req.body.producto.pro_id
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

