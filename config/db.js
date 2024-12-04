import { Sequelize } from "sequelize";

import dotenv from "dotenv";
dotenv.config()
export const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
 
});

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conectado exitosamente a la DB");
  } catch (error) {
    console.error("Error al conectar la DB: ", error);
  }
};

export default connectDb;
