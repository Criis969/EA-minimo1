import {Response, Request} from 'express';
import {IPersona} from '../models/Persona';
import {getPersona, getAllPersonas, updatePersona} from "../services/personaService";


class PersonaController {

    async getOneHandler(req: Request, res: Response) {
        const id = req.params.id;
        await getPersona(id)
            .then((persona) => {
                if (persona) return res.json(persona).status(200);
                return res.status(404).send({message: "User not found"});
            })
            .catch((error) => {
                return res.status(500).send("Server error")
            });
    }
    async getAllHandler(req: Request, res: Response) {
        const results = await getAllPersonas();
        return res.send(results).status(200);
    }

    async updateOneHandler(req: Request, res: Response) {
        const id = req.params.id;
        const persona = req.body as IPersona;
        await updatePersona(persona, id)
            .then((result: any) => {
                if (result) return res.status(200);
                return res.status(404).send({ mensaje: "Persona no encontrada " });
            })
            .catch((error) => {
                return res.status(500).send(error)
            });
    }
}

export const personaController = new PersonaController();