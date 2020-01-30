import { Request, Response } from 'express';

let nodemailer = require('nodemailer');

let transportador = nodemailer.createTransport({
    service: 'gmail',
    auth: { 
        // pones el correo que enviara el email
        user: "gabriela.campoverde@gmail.com",
        //pones la contraseña del email
        pass: "gabych2401"
    }
});

//Habilita la opción, https://myaccount.google.com/lesssecureapps?pli=1

export var email = {

    create: (req: Request, res: Response) => {
        //obtengamos el req.body
        console.log(req.body);
        let email = {
            from: "gabriela.campoverde@gmail.com",
            to: "gabriela.campoverde@gmail.com",
            subject: "Solicitud Coorporativo",
            // text: `aqui va el cuerpo del texto, por ejemplo ${JSON.stringify(empleadoCreado)}`
        }

        transportador.sendMail(email, (error: any, info: any) => {
            if (error) {
                console.log(error);
            } else {
                console.log(`Email enviado: ${info.response}`)
            }
        })
    }
}