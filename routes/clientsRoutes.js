import express from "express";
import {
  getClients,
  getBestClients,
  getLocations,
} from "../controllers/clientsControllers.js";

const router = express.Router();

router.get("/", getClients);

router.get("/best-clients", getBestClients);
router.get("/clients-locations", getLocations);

export default router;
