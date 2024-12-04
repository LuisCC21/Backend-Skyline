import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize("postgresql://postgres:TNIKMGGTIndAMbGQIfcRgDGJMwqWmiml@postgres.railway.internal:5432/railway", {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
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
