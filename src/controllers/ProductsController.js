

const ProductModel = require( "../models/Products" );


exports.ProductsController = [
    getAddProductPage = ( req, res ) => {
        const viewsData = {
            edit: false,
            pageTitle: "Cadastro de Produtos"
        };
        res.render( "addProduct", viewsData );
    },
    postAddProductPage = ( req, res ) => {
        console.log( req.body );
        let x = Math.floor( ( Math.random() * 900 ) + 100 );
        const product = {
            id: Date.now(),
            ref: `PK-${x}-2023`,
            title: req.body.title,
            cover: req.body.cover,
            image: req.body.image,
            image01: req.body.image01,
            image02: req.body.image02,
            image03: req.body.image03,
            group: req.body.group,
            price: req.body.price,
            cents: req.body.cents,
            oldPrice: req.body.oldPrice,
            description: req.body.description
        };
        saveProduct( product );
        // res.redirect( "/products" );
        res.redirect( "/admin" );
    },
    getAdminProductsPage = ( req, res ) => {
        fetchAllProducts( products => {
            const viewsData = {
                admin: true,
                pageTitle: "Admin Products",
                products
            };
            // res.render( "product-list", viewsData );
            res.render( "admin", viewsData );
        } );
    },
    getEditProductPage = ( req, res ) => {
        const productId = req.params.productId;
        getProductById( productId, product => {
            const viewsData = {
                edit: true,
                product,
                pageTitle: "Edit Product"
            };
            res.render( "addProduct", viewsData );
        } );
    },
    postEditProductPage = ( req, res ) => {
        console.log( req.body );
        const product = {
            id: req.body.productId,
            title: req.body.title,
            price: req.body.price,
            image: req.body.image,
            description: req.body.description


            // id: Date.now(),
            // ref: `PK-${x}-2023`,
            // title: req.body.title,
            // cover: req.body.cover,
            // image: req.body.image,
            // image01: req.body.image01,
            // image02: req.body.image02,
            // image03: req.body.image03,
            // group: req.body.group,
            // price: req.body.price,
            // cents: req.body.cents,
            // oldPrice: req.body.oldPrice,
            // description: req.body.description
        };
        updateProductIdById( product, req.body.productId );
        // res.redirect( "/products" );
        res.redirect( "/admin" );
    },
    postDeleteProductPage = ( req, res ) => {
        // console.log( req.body );
        const productId = req.body.productId;
        // deleteProductById( productId, () => res.redirect( "/products" ) );
        deleteProductById( productId, () => res.redirect( "/admin" ) );
    },
];


// const { saveProduct,
//     fetchAllProducts, 
//     getProductById, 
//     updateProductIdById, 
//     deleteProductById } = require("../models/Products");


// exports.getAddProductPage = ( req, res ) => {
//     const viewsData = {
//         edit: false,
//         pageTitle: "Add Product"
//     };
//     res.render( "addProduct", viewsData );
// };

// exports.postAddProductPage = ( req, res ) => {
//     console.log( req.body );

//     const product = {
//         id: Date.now(),
//         title: req.body.title,
//         image: req.body.image,
//         price: req.body.price,
//         description: req.body.description,
//     };
//     saveProduct( product );
//     res.redirect( "/" );
// };

// exports.getAdminProductsPage = ( req, res ) => {
//     fetchAllProducts( products => {
//         const viewsData = {
//             admin: true,
//             pageTitle: "Admin Products",
//             products
//         };
//         res.render( "product-list", viewsData );
//     } );
// };

// exports.getEditProductPage = ( req, res ) => {
//     const productId = req.params.productId;
//     getProductById( productId, product => {
//         const viewsData = {
//             edit: true,
//             product,
//             pageTitle: "Edit Product"
//         };
//         res.render( "addProduct", viewsData );
//     } );
// };

// exports.postEditProductPage = ( req, res ) => {
//     // console.log( req.body );
//     const product = {
//         id: req.body.productId,
//         title: req.body.title,
//         price: req.body.price,
//         image: req.body.image,
//         description: req.body.description
//     };
//     updateProductIdById( product, req.body.productId );
//     res.redirect( "/products" );
// };

// exports.postDeleteProductPage = ( req, res ) => {
//     // console.log( req.body );
//     const productId = req.body.productId;
//     deleteProductById( productId, () => res.redirect( "/products" ) );
// };
