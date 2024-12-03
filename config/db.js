import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("skyline", "root", "admin", {
  host: "localhost",
  dialect: "mssql",
  //port:'1433'
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
