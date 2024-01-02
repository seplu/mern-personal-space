import Car from "../models/car.js";
import { BadRequestError } from "../errors/index.js";
import { StatusCodes } from "http-status-codes";

const createCar = async (req, res) => {
  let {
    brand,
    color,
    fuelType,
    inspectionDate,
    insuranceDate,
    licensePlate,
    mileage,
    model,
    name,
    power,
    year,
    vin,
  } = req.body;
  if (!brand || !model || !name) {
    throw new BadRequestError("Missing required fields");
  }
  const car = await Car.create({
    brand,
    color,
    fuelType,
    inspectionDate,
    insuranceDate,
    licensePlate,
    mileage,
    model,
    name,
    power,
    year,
    vin,
  });
  res.status(StatusCodes.CREATED).json({ car });
};

export { createCar };
