const Product=require('../models/product');

const getAllProductsStatic=async(req,res)=>{

    const product=await Product.find({})
    res.status(200).json({product})
}

const getAllProducts=async(req,res)=>{
    const products=await Product.find(req.query);
    console.log(req.query);
    res.status(200).json({products})
}

module.exports={
    getAllProducts,
    getAllProductsStatic,
}