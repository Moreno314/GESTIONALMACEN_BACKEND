
import {Request,Response} from "express";
import { Pedido } from "../models/pedido";

export const getPedidos=async (req:Request,res:Response)=>{

    const listPedidos= await Pedido.findAll();
    
    res.json(listPedidos);

}

export const getPedido = async (req: Request, res: Response) => {
    const { id} = req.params;
    const product = await Pedido.findByPk(id);

    if (product) {
        res.json(product)
    } else {
        res.status(404).json({
            msg: `No existe un pedido con el id ${id}`
        })
    }
}

export const deletePedido = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Pedido.findByPk(id);

    if (!product) {
        res.status(404).json({
            msg: `No existe un Pedido con el id ${id}`
        })
    } else {
        await product.destroy();
        res.json({
            msg: 'El Pedido fue eliminado con exito!'
        })
    }

}

export const postPedido = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Pedido.create(body);

        res.json({
            msg: `El Pedido fue agregado con exito!`
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }
}

export const updatePedido = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {

        const product = await Pedido.findByPk(id);

    if(product) {
        await product.update(body);
        res.json({
            msg: 'El Pedido fue actualziado con exito'
        })

    } else {
        res.status(404).json({
            msg: `No existe un Pedido con el id ${id}`
        })
    }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }

    
}