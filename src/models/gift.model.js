const mongoose = require("mongoose");

const giftSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Gift = mongoose.model("gifts", giftSchema);

module.exports = Gift;
