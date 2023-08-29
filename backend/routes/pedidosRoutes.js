const express = require('express');
const router = express.Router();
const {getPedidos, getPedidoById, setPedido, deletePedido, updatePedido} = require('../controllers/pedidosController');

router.get('/', getPedidos);
router.get('/:id', getPedidoById);
router.post('/', setPedido);
router.delete('/:id', deletePedido);
router.put('/:id', updatePedido);

module.exports = router;