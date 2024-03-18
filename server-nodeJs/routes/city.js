const express = require('express')
const router = express.Router()

 const controller = require('../controllers/city')
 const { checkAuth } = require('../middlewares')

 router.post('/:id',controller.create)
 router.get('/',checkAuth, controller.getAllCities)

 module.exports = router