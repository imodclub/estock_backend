const express = require('express');
const AdminAPI = require('../models/AdminAPI')

const router = express.Router();


router.get('/adminapi.json', (req, res, next) => {
    AdminAPI.find({}).then(function (email) {
        res.send(email)
    }).catch(next);
});

router.post('/adminapi', (req, res, next) => {
    AdminAPI.create(req.body).then(function (email) {
        res.send(email);
    }).catch(next);
});

router.put('/adminapi/:id', (req, res, next) => {
    AdminAPI.findOneAndUpdate({ _id: req.params.id }).then(function (email) {
        res.send(email)
    });
});

router.delete("/adminapi/:id", (req, res, next) => {
  AdminAPI.findOneAndDelete({ _id: req.params.id }).then(function (email) {
    res.send(email);
  });
});

module.exports =  router;