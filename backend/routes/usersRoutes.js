const express = require ('express');
const router = express.Router();
const {protect} = require('../middleware/authMiddleware');
const{registerUser, loginUser, getUserData} = require('../controllers/usersController');

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/getMe', protect, getUserData);

module.exports = router;