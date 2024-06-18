const express=require('express')
const router=express.Router()
const itemController=require('../controllers/itemController')


router.post('/items',itemController.createItem)
router.get('/getitems',itemController.getItem)
router.get('/getoneitem/:id',itemController.getItemById)
router.put('/updateitem/:id',itemController.updateItem)
router.delete('/deleteitem/:id',itemController.deleteItem)
module.exports=router;