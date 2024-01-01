import mongoose from "mongoose";

const CarSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    color: {
      type: String,
    },
    fuelAVG: {
      type: Number,
      maxLength: 4,
      default: 0,
    },
    fuelType: {
      type: String,
      enum: ["Gasoline", "Diesel", "Hybrid", "Electric"],
    },
    inspectionDate: {
      type: Date,
    },
    insuranceDate: {
      type: Date,
    },
    licensePlate: {
      type: String,
    },
    mileage: {
      type: Number,
      maxLength: 7,
      default: 0,
    },
    model: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      unique: true,
      required: true,
    },
    power: {
      type: Number,
      maxLength: 4,
      default: 0,
    },
    year: {
      type: Number,
      maxLength: 4,
      default: 0,
    },
    vin: {
      type: String,
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
