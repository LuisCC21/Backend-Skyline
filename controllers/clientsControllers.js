import { QueryTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const getClients = async (req, res) => {
  try {
    const clients = await sequelize.query("SELECT * FROM clientes", {
      type: QueryTypes.SELECT,
    });

    return res.json(clients);
  } catch (error) {
    res.status(404).json({msg:error.message});
  }
};

const getBestClients = async (req, res) => {
  try {
    const bestClients = await sequelize.query(
      `
      SELECT TOP 10
          c.ID_Cliente,
          c.Nombre_Completo,
          COUNT(v.ID_Pedido) AS Cantidad_Ventas,
          SUM(v.Importe_venta_Total) AS Total_Ventas
      FROM
          clientes c
      INNER JOIN
          ventas v ON c.ID_Cliente = v.ID_Cliente
      GROUP BY
          c.ID_Cliente,
          c.Nombre_Completo
      ORDER BY
          Cantidad_Ventas DESC,
          c.Nombre_Completo 
      
      `,
      { type: QueryTypes.SELECT }
    );

    return res.json(bestClients);
  } catch (error) {
    res.status(404).json({msg:error.message});
  }
};

const getLocations = async (req, res) => {
  try {
    const clients = await sequelize.query(
      `
      SELECT TOP 3 Localidad_Codigo_Postal AS Localidad, COUNT(*) AS Cantidad_Clientes
      FROM clientes
      GROUP BY Localidad_Codigo_Postal
      ORDER BY Cantidad_Clientes DESC
      `,
      {
        type: QueryTypes.SELECT,
      }
    );

    return res.json(clients);
  } catch (error) {
    res.status(404).json({msg:error.message});
  }
};

export { getClients, getBestClients, getLocations };
