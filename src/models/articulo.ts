import { DataTypes } from "sequelize"
import sequelize from "../db/connection"

export const Articulo=sequelize.define("articulo",{

    codigo:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },

    nombre:{
        type:DataTypes.STRING
    },

    categoria:{
        type:DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
});

