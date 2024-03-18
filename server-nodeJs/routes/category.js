const express = require('express')
const router = express.Router()

 const controller = require('../controllers/category')
 const { checkAuth } = require('../middlewares')

 router.get('/',checkAuth,controller.getAllCategory)
 router.post('/:id', checkAuth,controller.create)

 module.exports = router