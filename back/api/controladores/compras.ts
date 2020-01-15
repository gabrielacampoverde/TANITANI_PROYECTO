import {Request,Response} from 'express';
import { Compras } from '../configuracion/Sequelize';

export let getCompras=(req:Request,res:Response)=>{
    Compras.findAll().then((objCompras:any)=>{
        res.status(200).json({
            mensaje:'OK',
            contenido:objCompras
        })
    })
}
export let getComprasById = (req: Request, res: Response) => {
    Compras.findByPk(req.params.id).then((objCompras: any) => {
        if (objCompras) {
            res.status(200).json({
                message: 'Compras encontrado ',
                Compras: objCompras
            })
        } else {
            res.status(500).json({
                message: 'error',
                content: 'No se encontro al Compras'
            })
        }
    })
}
export let postCompras=(req:Request,res:Response)=>{
    let objCompras=Compras.build(req.body);
    objCompras.save().then((objComprasCreado:any)=>{
        res.status(201).json(
            {
                ok:true,
                contenido:objComprasCreado,
                mensaje:"Compras Creada correctamente"
            }
        )
    }).catch((error:any)=>{
        res.status(500).json(
            {
                ok:true,
                contenido:error,
                mensaje:"Error interno en el servidor"
            }
        )
    })
}
export let putCompras = (req: Request, res: Response) => {
    Compras.update(
        {
            comp_total_cup: req.body.Compras.comp_total_cup,
            comp_descuento: req.body.Compras.comp_descuento,
            comp_dep: req.body.Compras.comp_dep,
            comp_prov: req.body.Compras.comp_prov,
            comp_dist: req.body.Compras.comp_dist,
            comp_direc_ref: req.body.Compras.comp_direc_ref,
            comp_tel_ref: req.body.Compras.comp_tel_ref
        },
        {
            where:{
                comp_id:req.body.Compras.comp_id
            }
        }).then(()=>{
             
            Compras.findByPk(req.body.Compras.comp_id).then((objCompras:any)=>{
                res.status(200).json({
                    message:'ok',
                    content:objCompras
                })
            })
        }).catch((error:any)=>{
            res.status(501).json({
                message:'error',
                content:error
            })
        })
}

export let deleteCompras = (req: Request, res: Response) => {
    let {id} = req.params;

    Compras.destroy({
        where:{
            comp_id:id
        }
    }).then((cantidad:any)=>{
        if(cantidad>0){
            let rpta = {
                success:true,
                message:"Compras Eliminado",
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