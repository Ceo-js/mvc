

const express = require('express'),
    router = express.Router(),
    // rootDir = require( "../utils/path" ),
    // productsData = require( "../utils/products" ),
    ProductsController = require( "../controllers/ProductsController" );

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render( 'home', viewsData );
// });

router.get( "/", getAdminProductsPage );
// router.get( "/add", getAddProductPage );
// router.post( "/add", postAddProductPage );
router.get( "/add-product", getAddProductPage );
router.post( "/add-product", postAddProductPage );
// router.get( "/edit/:productId", getEditProductPage );
router.get( "/edit-product/:productId", getEditProductPage );
// router.post( "/edit", postEditProductPage );
router.post( "/edit-product", postEditProductPage );
router.post( "/delete", postDeleteProductPage );

module.exports = router;


// const express = require('express'),
//     router = express.Router(),
//     // rootDir = require( "../utils/path" ),
//     // productsData = require( "../utils/products" ),
//     { getAddProductPage,
//         postAddProductPage,
//         getAdminProductsPage, 
//         getEditProductPage, 
//         postEditProductPage, 
//         postDeleteProductPage } = require( "../controllers/ProductsController" );

// /* GET home page. */
// // router.get('/', function(req, res, next) {
// //   res.render( 'home', viewsData );
// // });

// router.get( "/", getAdminProductsPage );
// router.get( "/add", getAddProductPage );
// router.post( "/add", postAddProductPage );
// router.get( "/edit/:productId", getEditProductPage );
// router.post( "/edit", postEditProductPage );
// router.post( "/delete", postDeleteProductPage );

// module.exports = router;
