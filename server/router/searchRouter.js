var router = require('express').Router()
var controller = require('../controller/search.controller.js')


router.get('/search',controller.search.get)

module.exports = router;