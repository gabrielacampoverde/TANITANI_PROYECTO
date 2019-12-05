import { Request, Response } from 'express';
import { Usuario, Persona } from '../configuracion/sequelize';
const Sequelize = require('sequelize');
const Op = Sequelize.Op; // Los operadores de comparacion de sequelize
export let crearUsuario = (req: Request, res: Response) => {
    console.log("misuario",req.body);
    Persona.build(req.body.persona).save().then((perCreada:any)=>{
        // Se hace la relacion para las dos tablas
        let fk_persona= perCreada.per_id
        let jsonusu = req.body.usuario 
        jsonusu.per_id = fk_persona
        let objUsuario = Usuario.build(req.body.usuario);
        objUsuario.setSaltYHash(req.body.usuario.usu_pass);
        objUsuario.save().then((usuarioCreado: any) => {
            Usuario.findByPk(usuarioCreado.usu_id).then((usuarioEncontrado: any) => {
                res.status(201).json({
                    message: 'Usuario creado',
                    content: usuarioEncontrado
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
export let encontrarUsuByNomOApe = (req: Request, res: Response) => {
    let busqueda = req.body.busqueda;
    Usuario.findAll({
        where: {
            [Op.or]: [
                {
                    usu_nom: {
                        [Op.substring]: busqueda
                    }
                },
                {
                    usu_ape: {
                        [Op.substring]: busqueda
                    }
                }
            ]
        }
    }).then((rpta:any)=>{
        res.json(rpta);
    })
}
export let iniciarSesion = (req: Request, res: Response) => {
    let {usu_email, usu_pass} = req.body;
    // tenemos que encriptar la contraseñe en hexadecimal
    let buff = Buffer.from(usu_pass,'utf-8').toString('ascii');
    Usuario.findOne({
        where: {
            usu_email: usu_email
        }
    }).then((objUsuario:any)=>{
        if(objUsuario){
            let validarPass = objUsuario.validPass(buff);
            if(validarPass){
                let token = objUsuario.generarJWT();
                res.status(200).json({
                    message:'Ok',
                    token
                })
            }else{
                res.status(500).json({
                    message:'error',
                    content:'Usuario o contraseña incorrectos.'
                })
            }

        }else{
            res.status(500).json({
                message: 'error',
                content: 'No se encontro el usuario'
            })
        }
    })
 }