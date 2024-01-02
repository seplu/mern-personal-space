import express from "express";

const router = express.Router();

import { createCar } from "../controllers/carController.js";

router.route("/create").post(createCar);

export default router;
