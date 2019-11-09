import { Request, Response, NextFunction} from 'express';

var jwt = require ('jsonwebtoken');

export let verificarToken =(token: string) => {
    try {
        let data = jwt.verify(token, 'codigo', {algorithm:'RS256'});
        return data;
    } catch (error) {
        console.log(error.message);
        return null;
    }
}

export let wachiman= (req:Request, res: Response, next: NextFunction) =>{ 
    if(req.headers.authorization){
        let token = req. headers.authorization.split(" ")[1];
        let data = verificarToken(token);
        if(data){
            next();
        }else{
            res.status(401).json({
                message:'Error',
                content: 'La token no es valida o ya expiro'
            })    
        }
    }else{
        res.status(401).json({
            message:'Error',
            content: 'Falta la token'
        })
    }
}