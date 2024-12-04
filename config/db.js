import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.database, process.env.userDB, process.env.passwordDB, {
  host: process.env.hostDB,
  dialect: "mssql",
  port: process.env.portDB,
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
