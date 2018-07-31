const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const currencies = ["EUR","USD","AUD","CNY","KRW","CAD","JPY","GBP","PKR","INR"];

const adSchema = new Schema({
  creator: {type: Schema.Types.ObjectId, ref:"User"},
  city: String,
  have: {type: String, enum: currencies},
  want: {type: String, enum: currencies},
  quantity: Number
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Ad = mongoose.model('Ad', adSchema);
module.exports = Ad;