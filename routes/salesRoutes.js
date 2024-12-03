import express from "express";
import {
  getBestProducts,
  getRecentSales,
} from "../controllers/salesControllers.js";

const router = express.Router();

router.get("/", getRecentSales);
router.get("/best-products", getBestProducts);

export default router;
