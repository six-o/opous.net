const express = require('express');
const usersRoute = require('./users');
const productsRoute = require('./products');

const router = express.Router();

// 註冊用戶路由
router.use('/users', usersRoute);

// 註冊產品路由
router.use('/products', productsRoute);

module.exports = router;