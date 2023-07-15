import express,{Application} from "express";
import routesArticulo from "../routes/articulo";
import cors from 'cors';
import routesUser from "../routes/user";
import routesPedido from "../routes/pedido";
import { Articulo } from "./articulo";
import { User } from "./user";
import { Pedido } from "./pedido";

class Server{

    private app:Application;
    private port:string;
    
    constructor(){
        this.app=express();
        this.port=process.env.PORT || "3001";
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log("Aplicacion corriendo en el puerto "+this.port);
        })
    }
    routes(){
        this.app.use("/api/articulos",routesArticulo);
        this.app.use("/api/users",routesUser);
        this.app.use("/api/pedidos", routesPedido);
    }
    midlewares(){
        this.app.use(express.json());
        // Cors
        this.app.use(cors());
    }
    async dbConnect(){
        try {
            await Articulo.sync();
            await User.sync();
            await Pedido.sync();
        } catch (error) {
            
        }
    }
}

export default Server;
