const express = require('express');
const router = express.Router();
const {getPedidos, getPedidoById, setPedido, deletePedido, updatePedido} = require('../controllers/pedidosController');
const {protect} = require('../middleware/authMiddleware');

router.get('/', protect, getPedidos);
router.get('/:id', protect, getPedidoById);
router.post('/', protect, setPedido);
router.delete('/:id', protect, deletePedido);
router.put('/:id', protect, updatePedido);

module.exports = router;