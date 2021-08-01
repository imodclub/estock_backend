const express = require('express');
const AdminAPI = require('../models/AdminAPI')

const router = express.Router();


router.get('/adminapi.json', (req, res, next) => {
    AdminAPI.find({}).then(function (email) {
        res.send(email)
    }).catch(next);
});

module.exports =  router;