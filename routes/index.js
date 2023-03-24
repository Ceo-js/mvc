

const express = require('express'),
    router = express.Router(),
    { getHomePage, getProductDetailPage } = require("../controllers/HomeController"),
    { postCartPage, getCartPage } = require("../controllers/CartController");

/* GET home page. */
router.get('/', getHomePage );
router.get('/product/details/:productId', getProductDetailPage );
router.post( "/cart", postCartPage );
router.get( "/cart", getCartPage );

module.exports = router;
 