//PABELLON CONTROLLER
import{Request,Response} from 'express'
import { Producto, CategoriaProducto } from '../configuracion/sequelize'

export let getProductos=(req:Request,res:Response)=>{
    Producto.findAll().then((objProductos:any)=>{
        res.status(200).json({
            message:'Ok',
            Producto:objProductos

        })
    })

}
export let postProducto = (req: Request, res: Response) => {
    console.log("miproducto",req.body);
    Producto.build(req.body.producto).save().then((proCreada:any)=>{
        // Se hace la relacion para las dos tablas
        let fk_prodcat= proCreada.pro_id
        console.log("dd",fk_prodcat);
        
        let jsonpcat = req.body.prodcat
        console.log("333",jsonpcat);
        
        jsonpcat.pro_id = fk_prodcat
        let objcatProd = CategoriaProducto.build(req.body.prodcat);
        objcatProd.save().then((procCreado: any) => {
            CategoriaProducto.findByPk(procCreado.catprod_id).then((procEncontrado: any) => {
                res.status(201).json({
                    message: 'Usuario creado',
                    content: procEncontrado
                })
            })
        }).catch((error: any) => {
            res.status(501).json({
                message: 'Error',
                content: error
            })
        })

    })
    // build => CONSTRUYE el objeto usuario, mas NO LO CREA en la base de datos
    // save()=> promesa que GUARDA el registro en la Base de Datos
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