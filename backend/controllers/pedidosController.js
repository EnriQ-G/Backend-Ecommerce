const asyncHandler = require('express-async-handler');
const Pedido = require('../models/pedidoModel');

const getPedidos = asyncHandler(async(req,res)=>{
    const pedidos = await Pedido.find({});
    res.json(pedidos);
})

const getPedidoById = asyncHandler(async(req,res)=>{
    const pedido = await Pedido.findById(req.params.id);
    if(pedido){
        res.json(pedido);
    }else{
        res.status(404);
        throw new Error('Pedido no encontrado');
    }
})

const setPedido = asyncHandler(async(req,res)=>{
    if(!req.body.user|| !req.body.pedidoItems){
        res.status(400);
        throw new Error('Es necesario ingresar todos los datos');
    }
    const pedido = Pedido.create({
        user: req.body.user,
        pedidoItems: req.body.pedidoItems
    })
    res.status(201).json(pedido);
})

const deletePedido = asyncHandler(async(req,res)=>{
    const pedido = await Pedido.findById(req.params.id);
    if(pedido){
        await pedido.remove();
        res.json({message: 'Pedido eliminado'});
    }else{
        res.status(404);
        throw new Error('Pedido no encontrado');
    }
})

const updatePedido = asyncHandler(async(req,res)=>{
    const pedido = await Pedido.findById(req.params.id);
    if(!pedido){
        res.status(404);
        throw new Error('Pedido no encontrado');
    }else{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.json(updatedProduct);
    }
})

module.exports = {
    getPedidos,
    getPedidoById,
    setPedido,
    deletePedido,
    updatePedido
}
