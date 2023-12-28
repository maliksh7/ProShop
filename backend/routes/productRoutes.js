import express from 'express';
import { getProductById, getProducts } from '../controllers/productControllers.js';
const router = express.Router();


// @desc    Fetch  all products
router.route('/').get(getProducts);

// @desc    Fetch a single product
router.route('/:id').get(getProductById);

export default router;