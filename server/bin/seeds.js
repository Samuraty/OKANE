const mongoose = require("mongoose");
const User = require("../models/User");
const Ad = require("../models/Ad");
const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(10);
const hashPass = bcrypt.hashSync('1234', salt);

mongoose.connect("mongodb://localhost/project3")
.then(()=> console.log('conectado'));

const users = [{
  username: "alex",
  email: "pepe04444@gmail.com",
  image: "../assets/images/profilepic.png",
  password: hashPass,
  rating: 5
  
},
{
  username: "alex1",
  email: "pepe04444@gmail.com",
  image: "../assets/images/profilepic.png",
  password: hashPass,
  rating: 3
},
{
  username: "lolo",
  email: "pepe04444@gmail.com",
  image: "../assets/images/profilepic.png",
  password: hashPass,
  rating: 1
}
]

// const ads = [{
//   creator: '5b60345e783f1c2ad2d738b7',
//   city: "Madrid",
//   have: "EUR",
//   want: "GBP",
//   quantity: 20,
// },
// {
//   creator:'5b60646ade0bb0402ccc094e',
//   city: "Madrid",
//   have: "USD",
//   want: "EUR",
//   quantity: 300,
// },
// {
//   creator: '5b60646ade0bb0402ccc094e',
//   city: "Madrid",
//   have: "USD",
//   want: "JPY",
//   quantity: 500,
// },
// {
//   creator: '5b60646ade0bb0402ccc094e',
//   city: "Madrid",
//   have: "JPY",
//   want: "GBP",
//   quantity: 25,
// },
// {
//   creator: '5b60646ade0bb0402ccc094e',
//   city: "Madrid",
//   have: "CNY",
//   want: "EUR",
//   quantity: 70,
// },
// {
//   creator: '5b60646ade0bb0402ccc094e',
//   city: "Madrid",
//   have: "GBP",
//   want: "CAD",
//   quantity: 92,
// }
// ]

User.collection.drop();
Ad.collection.drop();


Promise.all([User.create(users)])
  .then(() => {
    console.log("Seed success!");
    mongoose.connection.close();
  })
  .catch(() =>{
    console.log("Seed fail!")
  }) 

