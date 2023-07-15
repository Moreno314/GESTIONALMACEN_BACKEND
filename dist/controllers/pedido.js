"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePedido = exports.postPedido = exports.deletePedido = exports.getPedido = exports.getPedidos = void 0;
const pedido_1 = require("../models/pedido");
const getPedidos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listPedidos = yield pedido_1.Pedido.findAll();
    res.json(listPedidos);
});
exports.getPedidos = getPedidos;
const getPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield pedido_1.Pedido.findByPk(id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({
            msg: `No existe un pedido con el id ${id}`
        });
    }
});
exports.getPedido = getPedido;
const deletePedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield pedido_1.Pedido.findByPk(id);
    if (!product) {
        res.status(404).json({
            msg: `No existe un Pedido con el id ${id}`
        });
    }
    else {
        yield product.destroy();
        res.json({
            msg: 'El Pedido fue eliminado con exito!'
        });
    }
});
exports.deletePedido = deletePedido;
const postPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield pedido_1.Pedido.create(body);
        res.json({
            msg: `El Pedido fue agregado con exito!`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        });
    }
});
exports.postPedido = postPedido;
const updatePedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const product = yield pedido_1.Pedido.findByPk(id);
        if (product) {
            yield product.update(body);
            res.json({
                msg: 'El Pedido fue actualziado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un Pedido con el id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        });
    }
});
exports.updatePedido = updatePedido;
