import mongoose from "mongoose";

const CarSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    color: {
      type: String,
    },
    cost: {
      type: Number,
    },
    year: {
      type: Number,
    },
    power: {
      type: Number,
    },
    fuelType: {
      type: String,
    },
    fuelAVG: {
      type: Number,
    },
    mileage: {
      type: Number,
    },
    inspectionDate: {
      type: Date,
    },
    insuranceDate: {
      type: Date,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  },
);

export default mongoose.model("Car", CarSchema);
