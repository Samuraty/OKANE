const mongoose = require("mongoose");
const User = require("../models/User");
const Ad = require("../models/Ad");
const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(10);
const hashPass = bcrypt.hashSync('1234', salt);

mongoose.connect("mongodb://localhost/project3");

const users = [{
  _id:"5b60345e783f1c2ad2d738b7",
  username: "alex",
  email: "pepe04444@gmail.com",
  city: "madrid",
  password: hashPass
  
},
{
  _id:"5b603617783f1c2ad2d738b8",
  username: "alex1",
  email: "pepe04444@gmail.com",
  city: "madrid",
  password: hashPass
},
{
  _id:"5b60646ade0bb0402ccc094e",
  username: "lolo",
  email: "pepe04444@gmail.com",
  city: "madrid",
  password: hashPass
}
]

const ads = [{
  creator: {type: Schema.Types.ObjectId, ref:"User"},
  city: String,
  have: "EUR",
  want: "GBP",
  quantity: 20,
},
{
  creator: {type: Schema.Types.ObjectId, ref:"User"},
  city: String,
  have: "USD",
  want: "EUR",
  quantity: 300,
},
{
  creator: {type: Schema.Types.ObjectId, ref:"User"},
  city: String,
  have: "USD",
  want: "JPY",
  quantity: 500,
},
{
  creator: {type: Schema.Types.ObjectId, ref:"User"},
  city: String,
  have: "JPY",
  want: "GBP",
  quantity: 25,
},
{
  creator: {type: Schema.Types.ObjectId, ref:"User"},
  city: String,
  have: "CNY",
  want: "EUR",
  quantity: 70,
},
{
  creator: {type: Schema.Types.ObjectId, ref:"User"},
  city: String,
  have: "GBP",
  want: "CAD",
  quantity: 92,
}
]


Promise.all([User.create(users), Ad.create(ads)])
User.create(user)
  .then(() => {
    console.log("Seed success!");
    mongoose.connection.close();
  })
  .catch(() =>{
    console.log("Seed fail!")
  }) 

