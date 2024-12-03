import { QueryTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const getRecentSales = async (req, res) => {
  try {
    const recentSales = await sequelize.query(
      `
        SELECT TOP 10  v.ID_Pedido, c.Nombre_Completo  AS Nombre_Cliente,  v.Tipo_Producto, v.Unidades, v.Canal_Venta,v.Pais, v.Precio_Unitario,
        v.Coste_Unitario, V.Fecha_Envio, v.Fecha_Pedido, v.Importe_venta_Total, V.Importe_Coste_Total
        FROM ventas v INNER JOIN Clientes c ON c.ID_Cliente = v.ID_Cliente
        ORDER BY Fecha_Pedido DESC;
        `,
      { type: QueryTypes.SELECT }
    );

    return res.json(recentSales);
  } catch (error) {
    res.status(404).json({msg:error.message});
  }
};

const getBestProducts = async (req, res) => {
  try {
    const recentSales = await sequelize.query(
      `
        SELECT TOP 6 Tipo_Producto, COUNT(*) AS Cantidad_Ventas FROM Ventas
        GROUP BY Tipo_Producto ORDER BY Cantidad_Ventas DESC;

        `,
      { type: QueryTypes.SELECT }
    );

    return res.json(recentSales);
  } catch (error) {
    res.status(404).json({msg:error.message});
  }
};

export { getRecentSales, getBestProducts };
