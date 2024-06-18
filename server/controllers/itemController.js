const item=require('../models/item')

exports.createItem=async(req,res)=>{
    try {
        const newItem=new item(req.body);
        const savedItem=await newItem.save();
        res.status(200).json(savedItem)
    } catch (error) {
        res.status(500).send(error.message)
    }
}


exports.getItem=async(req,res)=>{
    try {
        const items=await item.find();
        res.status(200).json(items)
    } catch (error) {
      res.status(500).send(error.message)
    }
}


exports.getItemById=async(req,res)=>{
    try {
       const itemone=await item.findById(req.params.id) 
       res.status(200).json(itemone)
    } catch (error) {
        res.status(500).send(error.message )
    }
}


exports.updateItem=async(req,res)=>{
    try {
        updateditem=await item.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json(updateditem)

    } catch (error) {
        res.status(500).json(error.message)
    }
}

exports.deleteItem=async(req,res)=>{
    try {
       await item.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"item deleted successfully"})
    } catch (error) {
        res.status(500).send(error.message)
    }
}


