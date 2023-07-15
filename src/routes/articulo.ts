
import {Router} from "express";
import {  deleteArticulo, getArticulo, getArticulos,  postArticulo, updateArticulo } from "../controllers/articulo";

const router =Router();

router.get("/",getArticulos)
router.get('/:codigo', getArticulo);
router.delete('/:codigo', deleteArticulo);
router.post('/', postArticulo);
router.put('/:codigo', updateArticulo);

export default router;