

const express = require('express'),
    router = express.Router(),
    // rootDir = require( "../utils/path" ),
    // productsData = require( "../utils/products" ),
    { getAddProductPage,
        postAddProductPage,
        getAdminProductsPage } = require( "../controllers/ProductsController" );

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render( 'home', viewsData );
// });

router.get( "/", getAdminProductsPage );
router.get( "/add", getAddProductPage );
router.post( "/add", postAddProductPage );

module.exports = router;
