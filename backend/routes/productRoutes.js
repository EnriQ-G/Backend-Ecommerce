const express = require ('express');
const router = express.Router();
const{getProducts, getProductById, setProduct, deleteProduct, updateProduct} = require('../controllers/productsController');

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', setProduct);
router.delete('/:id', deleteProduct);
router.put('/:id', updateProduct);

module.exports = router;
