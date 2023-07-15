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
exports.updateArticulo = exports.postArticulo = exports.deleteArticulo = exports.getArticulo = exports.getArticulos = void 0;
const articulo_1 = require("../models/articulo");
const getArticulos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listArticulos = yield articulo_1.Articulo.findAll();
    res.json(listArticulos);
});
exports.getArticulos = getArticulos;
const getArticulo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { codigo } = req.params;
    const product = yield articulo_1.Articulo.findByPk(codigo);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({
            msg: `No existe un articulo con el id ${codigo}`
        });
    }
});
exports.getArticulo = getArticulo;
const deleteArticulo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { codigo } = req.params;
    const product = yield articulo_1.Articulo.findByPk(codigo);
    if (!product) {
        res.status(404).json({
            msg: `No existe un articulo  con el id ${codigo}`
        });
    }
    else {
        yield product.destroy();
        res.json({
            msg: 'El articulo fue eliminado con exito!'
        });
    }
});
exports.deleteArticulo = deleteArticulo;
const postArticulo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield articulo_1.Articulo.create(body);
        res.json({
            msg: `El articulo fue agregado con exito!`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        });
    }
});
exports.postArticulo = postArticulo;
const updateArticulo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { codigo } = req.params;
    try {
        const product = yield articulo_1.Articulo.findByPk(codigo);
        if (product) {
            yield product.update(body);
            res.json({
                msg: 'El articulo  fue actualziado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un articulo con el codigo ${codigo}`
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
exports.updateArticulo = updateArticulo;
