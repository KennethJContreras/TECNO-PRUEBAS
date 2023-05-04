import { Request, Response } from "express";
import { MotoristaSchema } from "../models/motorista.schema";

export const obtenerMotorista = (req:Request, res:Response) => {
    MotoristaSchema.findOne({email: req.query.email, contraseña: req.query.contraseña})
    .then(resultado => {
        res.send(resultado);
        res.end();
    })
    .catch(resultado => {
        res.send(resultado);
    })
}

export const obtenerMotoristas = (req:Request, res:Response) => {
    MotoristaSchema.find()
    .then(resultado => {
        res.send(resultado);
        res.end();
    })
    .catch(resultado => {
        res.send(resultado);
    })
}

export const crearMotorista = (req: Request, res: Response) => {
    const { primerNombre, PrimerAppelido, contraseña, email, añosDeExperiencia} = req.body;

    const nuevoMotorista = new MotoristaSchema({
        primerNombre,
        PrimerAppelido,
        email,
        contraseña,
        añosDeExperiencia
    });

    nuevoMotorista.save()
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(resultado => {
            res.send(resultado);
        })
}