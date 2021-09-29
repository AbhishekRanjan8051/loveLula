const mongoose = require("mongoose");

const skincareSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    button: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Skincare = mongoose.model("skincares", skincareSchema);

module.exports = Skincare
