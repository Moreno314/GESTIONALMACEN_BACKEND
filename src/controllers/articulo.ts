
import {Request,Response} from "express";
import { Articulo } from "../models/articulo";

export const getArticulos=async (req:Request,res:Response)=>{

    const listArticulos= await Articulo.findAll();
    
    res.json(listArticulos);

}

export const getArticulo = async (req: Request, res: Response) => {
    const { codigo} = req.params;
    const product = await Articulo.findByPk(codigo);

    if (product) {
        res.json(product)
    } else {
        res.status(404).json({
            msg: `No existe un articulo con el id ${codigo}`
        })
    }
}

export const deleteArticulo = async (req: Request, res: Response) => {
    const { codigo } = req.params;
    const product = await Articulo.findByPk(codigo);

    if (!product) {
        res.status(404).json({
            msg: `No existe un articulo  con el id ${codigo}`
        })
    } else {
        await product.destroy();
        res.json({
            msg: 'El articulo fue eliminado con exito!'
        })
    }

}

export const postArticulo = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Articulo.create(body);

        res.json({
            msg: `El articulo fue agregado con exito!`
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }
}

export const updateArticulo = async (req: Request, res: Response) => {
    const { body } = req;
    const { codigo } = req.params;

    try {

        const product = await Articulo.findByPk(codigo);

    if(product) {
        await product.update(body);
        res.json({
            msg: 'El articulo  fue actualziado con exito'
        })

    } else {
        res.status(404).json({
            msg: `No existe un articulo con el codigo ${codigo}`
        })
    }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }

    
}