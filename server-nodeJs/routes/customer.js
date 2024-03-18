const express = require('express')
const router = express.Router()

 const controller = require('../controllers/customer')

 router.post('/customerByEmailPassword',controller.login)
 router.post('/', controller.register)

 module.exports = router