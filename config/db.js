import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  }
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
