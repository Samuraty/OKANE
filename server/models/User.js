const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: String,
  city: String,
  password: String,
  image: {type: String, default: "../assets/images/profilepic.png"} //aunque lo llame desde back tengo que meter la imagen en el front para que no de error
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;