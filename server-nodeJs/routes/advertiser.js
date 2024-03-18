const express = require('express')
const router = express.Router()

 const controller = require('../controllers/advertiser')

 router.post('/advertiserByEmailPassword',controller.login)
 router.post('/', controller.register)

 module.exports = router