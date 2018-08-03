const express = require("express");
const _ = require("lodash");
const router = express.Router();
const User = require("../models/User");

const fields = Object.keys(_.omit(User.schema.paths, ["__v", "_id"]));

// Retrive ALL
router.get("/", (req, res, next) => {
  User.find()
    .populate('creator')
    .then(users => res.json(users))
    .catch(e => next(e));
});

// Create
router.post("/", (req, res, next) => {
  const newUser = _.pick(req.body, fields);
  User.create(newUser)
    .then(user => res.json(user))
    .catch(e => next(e));
});

// Retrive DETAIL
router.get("/:id", (req, res, next) => {
  Ad.findById(req.params.id)
    .populate('creator')
    .then(user => {
        console.log(user)
        res.json(user)
    })
    .catch(e => next(e));
});

// Update
router.put("/edit/:id", (req, res, next) => {
  const updates = _.pick(req.body, fields);

  User.findByIdAndUpdate(req.params.id, updates, { new: true })
    .then(user => res.json(user))
    .catch(e => next(e));
});

// Delete
router.delete("/:id", (req, res, next) => {
  User.findByIdAndRemove(req.params.id)
    .then(() => res.json({ message: `SUCESSFUL DELETE ${req.params.id}` }))
    .catch(e => next(e));
});


module.exports = router;