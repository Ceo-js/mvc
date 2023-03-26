

const express = require('express'),
    router = express.Router(),
    { getHomePage, getProductDetailPage } = require("../controllers/HomeController"),
    { postCartPage, getCartPage, deleteCartItem } = require("../controllers/CartController");

/* GET home page. */
router.get('/', getHomePage );
router.get('/product/details/:productId', getProductDetailPage );
router.post( "/cart", postCartPage );
router.get( "/cart", getCartPage );
router.post( "/cart/delete-item", deleteCartItem );

module.exports = router;
 