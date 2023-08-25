const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');

const getProducts = asyncHandler(async(req,res)=>{
    const products = await Product.find({});
    res.json(products);
})

const getProductById = asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id);
    if(product){
        res.json(product);
    }else{
        res.status(404);
        throw new Error('Product not found');
    }
})

const setProduct = asyncHandler(async(req,res)=>{
    if(!req.body.name || !req.body.price || !req.body.stock){
        res.status(400);
        throw new Error('Es necesario ingresar todos los datos');
    }
    const product = Product.create({
        name: 'Sample name',
        price: 0,
        stock: 0
    })
    res.status(201).json(product);
})

const deleteProduct = asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id);
    if(product){
        await product.remove();
        res.json({message: 'Product removed'});
    }else{
        res.status(404);
        throw new Error('Product not found');
    }
})

const updateProduct = asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id);
    if(!product){
        res.status(404);
        throw new Error('Producto no encontrado');
    }else{
        const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.json(updateProduct);
    }
})

module.exports = {
    getProducts,
    getProductById,
    setProduct,
    deleteProduct,
    updateProduct
}