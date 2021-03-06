import { Router } from 'express';
import * as usuario_controlador from '../controladores/Usuario';
export let usuario_router = Router();

usuario_router.post('/usuario/crear', usuario_controlador.crearUsuario);
usuario_router.post('/usuario/find',usuario_controlador.encontrarUsuByNomOApe);
usuario_router.post('/usuario/loggin',usuario_controlador.iniciarSesion);
usuario_router.get('/usuario',usuario_controlador.getUsuarios);
usuario_router.delete('/usuario/:id',usuario_controlador.deleteUsuario);
usuario_router.get('/usuario/:id',usuario_controlador.getUsuarioById);
usuario_router.put('/usuario',usuario_controlador.updateUsuario);