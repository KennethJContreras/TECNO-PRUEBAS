import { Request, Response } from "express";
import { Usuarioschema } from "../models/usuario.schema";

export const obtenerUsuario = (req: Request, res: Response) => {
    Usuarioschema.findOne({ email: req.body.email, contraseña: req.body.contraseña })
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(resultado => {
            res.send(resultado);
        })
}

export const obtenerUsuarios = (req: Request, res: Response) => {
    Usuarioschema.find()
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(resultado => {
            res.send(resultado);
        })
}

export const crearUsuario = (req: Request, res: Response) => {
    const { primerNombre, PrimerAppelido, contraseña, email, direccion, telefono, tarjetaDeCredito } = req.body;

    const nuevoUsuario = new Usuarioschema({
        primerNombre,
        PrimerAppelido,
        email,
        contraseña,
        direccion,
        telefono,
        tarjetaDeCredito
    });

    nuevoUsuario.save()
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(resultado => {
            res.send(resultado);
        })
}