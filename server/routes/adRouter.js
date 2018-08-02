const express = require("express");
const _ = require("lodash");
const router = express.Router();
const Ad = require("../models/Ad");

const fields = Object.keys(_.omit(Ad.schema.paths, ["__v", "_id"]));

// Retrive ALL
router.get("/", (req, res, next) => {
  Ad.find()
    .populate('creator')
    .then(ads => res.json(ads))
    .catch(e => next(e));
});

// Create
router.post("/", (req, res, next) => {
  const newAd = _.pick(req.body, fields);
  Ad.create(newAd)
    .then(ad => res.json(ad))
    .catch(e => next(e));
});

// Retrive DETAIL
router.get("/:id", (req, res, next) => {
  Ad.findById(req.params.id)
    .populate('creator')
    .then(ad => {
        console.log(ad)
        res.json(ad)
    })
    .catch(e => next(e));
});

// Update
router.put("/edit/:id", (req, res, next) => {
  const updates = _.pick(req.body, fields);

  Ad.findByIdAndUpdate(req.params.id, updates, { new: true })
    .then(ad => res.json(ad))
    .catch(e => next(e));
});

// Delete
router.delete("/:id", (req, res, next) => {
  Ad.findByIdAndRemove(req.params.id)
    .then(() => res.json({ message: `SUCESSFUL DELETE ${req.params.id}` }))
    .catch(e => next(e));
});


module.exports = router;