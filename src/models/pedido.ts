import { DataTypes } from "sequelize"
import sequelize from "../db/connection"

export const Pedido=sequelize.define("pedido",{

    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },

    fecha:{
        type:DataTypes.DATEONLY
    },

    solicitante:{
        type:DataTypes.STRING
    },
    estado:{
        type:DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
});

