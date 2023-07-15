"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const articulo_1 = require("../controllers/articulo");
const router = (0, express_1.Router)();
router.get("/", articulo_1.getArticulos);
router.get('/:codigo', articulo_1.getArticulo);
router.delete('/:codigo', articulo_1.deleteArticulo);
router.post('/', articulo_1.postArticulo);
router.put('/:codigo', articulo_1.updateArticulo);
exports.default = router;
