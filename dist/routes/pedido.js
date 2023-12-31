"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pedido_1 = require("../controllers/pedido");
const router = (0, express_1.Router)();
router.get("/", pedido_1.getPedidos);
router.get('/:id', pedido_1.getPedido);
router.delete('/:id', pedido_1.deletePedido);
router.post('/', pedido_1.postPedido);
router.put('/:id', pedido_1.updatePedido);
exports.default = router;
