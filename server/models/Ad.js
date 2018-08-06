const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const User = require('./User');

const currencies = ["EUR","USD","AUD","CNY","KRW","CAD","JPY","GBP","PKR","INR"];

const adSchema = new Schema({
  creator: {type:Schema.Types.ObjectId, ref:'User'},
  city: String,
  quantity: Number,
  have: {type: String, enum: currencies},
  want: {type: String, enum: currencies},
  comment: String,
  ratio: Number,
  total: Number
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Ad = mongoose.model('Ad', adSchema);
module.exports = Ad;