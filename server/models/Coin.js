const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const currencies = ["EUR","USD","AUD","CNY","KRW","CAD","JPY","GBP","PKR","INR"];

const coinSchema = new Schema(
  {
    currency1: {type: String, enum: currencies},
    currency2: {type: String, enum: currencies},
    // dates:  
    // evolution: 
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