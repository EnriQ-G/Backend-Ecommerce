const express = require ('express');
const router = express.Router();
const{getProducts, getProductById, setProduct, deleteProduct, updateProduct} = require('../controllers/productsController');
const {isAdmin} = require('../middleware/authMiddleware');

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', isAdmin, setProduct);
router.delete('/:id', isAdmin, deleteProduct);
router.put('/:id', isAdmin, updateProduct);

module.exports = router;
