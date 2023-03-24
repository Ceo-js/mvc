

const express = require('express'),
    router = express.Router(),
    // rootDir = require( "../utils/path" ),
    // productsData = require( "../utils/products" ),
    { getAddProductPage, postAddProductPage } = require( "../controllers/ProductsController" );

/* GET home page. */
router.get('/', function(req, res, next) {
    // const viewsData = {
    //     products: productsData.products,
    //     pageTitle: "Home page - Products List"
    // }
  res.render( 'home', viewsData );
});

router.get( "/add", getAddProductPage );

router.post( "/add", postAddProductPage );

module.exports = router;
