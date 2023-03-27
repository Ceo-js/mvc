

const express = require('express'),
    router = express.Router(),
    // { getHomePage, getProductDetailPage, getGuidePage } = require("../controllers/HomeController"),
    HomeController = require("../controllers/HomeController"),
    CartController = require("../controllers/CartController");

/* GET home page. */
router.get('/', getHomePage );
router.get('/guide', getGuidePage );
router.get('/product/details/:productId', getProductDetailPage );
router.post( "/cart", postCartPage );
router.get( "/cart", getCartPage );
router.post( "/cart/delete-item", deleteCartItem );

module.exports = router;
 

// const express = require('express'),
//     router = express.Router(),
//     // { getHomePage, getProductDetailPage, getGuidePage } = require("../controllers/HomeController"),
//     HomeController = require("../controllers/HomeController"),
//     { postCartPage, getCartPage, deleteCartItem } = require("../controllers/CartController");

// /* GET home page. */
// router.get('/', getHomePage );
// router.get('/guide', getGuidePage );
// router.get('/product/details/:productId', getProductDetailPage );
// router.post( "/cart", postCartPage );
// router.get( "/cart", getCartPage );
// router.post( "/cart/delete-item", deleteCartItem );

// module.exports = router;
 