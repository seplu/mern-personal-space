import mongoose from "mongoose";

const CarSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: [true, "Please enter a brand"],
    },
    color: {
      type: String,
      default: "",
    },
    fuelAVG: {
      type: Number,
      maxLength: 4,
      default: 0,
    },
    fuelType: {
      type: String,
      enum: ["Gasoline", "Diesel", "Hybrid", "Electric", "none"],
      default: "none",
    },
    inspectionDate: {
      type: Date,
      default: Date.now,
    },
    insuranceDate: {
      type: Date,
      default: Date.now,
    },
    licensePlate: {
      type: String,
      default: "",
    },
    mileage: {
      type: Number,
      maxLength: 7,
      default: 0,
    },
    model: {
      type: String,
      required: [true, "Please enter a model"],
    },
    name: {
      type: String,
      unique: true,
      required: [true, "Please enter a name"],
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
      default: "",
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
