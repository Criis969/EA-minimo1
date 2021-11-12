import {Response, Request} from 'express';
import {ISeguimiento} from '../models/Seguimiento';
import {getSeguimiento, createSeguimiento} from "../services/seguimientoService";



class SeguimientoController {
    async createOneHandler(req: Request, res: Response) {
        const seguimiento = req.body as ISeguimiento;
        console.log(req.body);
        await createSeguimiento(seguimiento)
            .then((result) => {
                if (result) return res.json(result).status(201);
                return res.status(403).send({message: "Invalid body"});

            })
            .catch((error: any) => {
                return res.status(500).send({Error: error});
            });
    }

    async getOneHandler(req: Request, res: Response) {
        const id = req.params.id;
        await getSeguimiento(id)
            .then((seguimiento) => {
                if (seguimiento) return res.json(seguimiento).status(200);
                return res.status(404).send({message: "User not found"});
            })
            .catch((error) => {
                return res.status(500).send("Server error")
            });
    }


}

export const seguimientoController = new SeguimientoController();