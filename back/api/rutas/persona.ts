import { Router} from 'express';
import { getPersona, getPersonaById, postPersona, putPersona, deletePersona } from '../controladores/persona';


export let persona_router = Router();

persona_router.get('/persona', getPersona);
persona_router.get('/persona/:id', getPersonaById);
persona_router.post('/persona', postPersona);
persona_router.put('/persona', putPersona);
// falta delete
persona_router.delete('/persona/:id', deletePersona); 


