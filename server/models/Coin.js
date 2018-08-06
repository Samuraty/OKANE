const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const currencies = ["EUR","USD","AUD","CNY","KRW","CAD","JPY","GBP","PKR","INR"];

const coinSchema = new Schema(
  {
    haveConvert: {type: String, enum: currencies},
    wantConvert: {type: String, enum: currencies},
    quantityConvert: Number,
    resultConvert: Number,
    convertion: String,
    today: Date,
    date: any,
    dateArray: [String],
    ratioArray: [Number]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Coin = mongoose.model("Coin", coinSchema);
module.exports = Coin;