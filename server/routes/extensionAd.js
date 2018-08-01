const express = require('express');
const _ = require('lodash');
const simpleCrud = require('./genericCRUD');
const User = require('../models/User');

const extendedAd = (Model) => {
    return simpleCrud(Model, router => {
        router.get('/',(req,res,next) => {
          Model.find()
            .populate('creator')
            .then( objList => res.status(200).json(objList))
            .catch(e => next(e))
        });
    });
}


module.exports = extendedAd;