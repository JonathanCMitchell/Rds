var router = require('express').Router()
var controller = require('../controller/search.controller.js')


router.get('/r',controller.search.get)

module.exports = router;