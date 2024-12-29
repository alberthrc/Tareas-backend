import mongoose from "mongoose";

import colors from "colors";

import {exit} from 'node:process';



export const connectDB = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.DATABASE_URL)
        const url = `${connection.host}: ${connection.port}`;
        console.log(colors.green.bold(`Conectado a la base de datos en ${url}`));
    } catch (error) {
        console.log(colors.red.bold(`Error al conectar a la base de datos: ${error}`));
        exit(1);
    }       
};