const express = require('express')
const router = express.Router()

 const controller = require('../controllers/apartment')
 const { checkAuth,upload } = require('../middlewares')

 router.put('/:id',checkAuth,controller.update)
 router.post('/',checkAuth,  upload.single('image'),controller.create)
 router.delete('/:id/:apartment',checkAuth, controller.delete) 
 router.get('/cityIp/:userIp', controller.getByIp)
 router.get('/:id', checkAuth,controller.getById)
 router.get('/categoryId/:id', checkAuth,controller.getByCategoryId)
 router.get('/cityId/:id', checkAuth,controller.getByCityId)
 router.get('/advertiserId/:id', checkAuth,controller.getByAdvertiserId)
 router.get('/',controller.getAllApartment)
 router.get('/LittleThenPrice/:price', checkAuth,controller.getByLittleThenPrice)
 router.get('/BiggerThenPrice/:price', checkAuth,controller.getByBiggerThenPrice)
 module.exports = router
