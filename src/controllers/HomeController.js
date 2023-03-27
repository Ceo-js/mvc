

// const { fetchAllProducts, getProductById } = require("../models/Products");
const productModel = require("../models/Products");

// exports.getHomePage = ( req, res ) => {
//     fetchAllProducts( products => {
//         const viewsData = {
//             admin: false,
//             products,
//             pageTitle: "Home page - Products List"
//         };
//         res.render( 'index', viewsData );
//     } );
// };

// exports.getProductDetailPage = ( req, res ) => {
//     const productId = req.params.productId;
//     getProductById( productId, product => {
//         const viewsData = {
//             admin: false,
//             product,
//             pageTitle: product.title,
//         };
//         res.render( "productDetails", viewsData );
//     } );
// };

// exports.getGuidePage = ( req, res, next ) => {
//     const viewsData = {
//         pageTitle: "Pikituchos Guide Page"
//     };
//     res.render( "guide", viewsData );
// };
exports.HomeController = [
    getHomePage = ( req, res ) => {
        fetchAllProducts( products => {
            const viewsData = {
                admin: false,
                products,
                pageTitle: "Home page - Products List"
            };
            res.render( 'index', viewsData );
        } );
    },
    getProductDetailPage = ( req, res ) => {
        const productId = req.params.productId;
        getProductById( productId, product => {
            const viewsData = {
                admin: false,
                product,
                pageTitle: req.body.title,
            };
            res.render( "productDetails", viewsData );
        } );
    },
    getGuidePage = ( req, res, next ) => {
        const viewsData = {
            pageTitle: "Pikituchos Guide Page"
        };
        res.render( "guide", viewsData );
    },
    getProdutoPageModel = ( req, res, next ) => {
        const viewsData = {
            pageTitle: "Product Page Model"
        };
        res.render( "produto", viewsData );
    },
    getPKHomePage = ( req, res ,next ) => {
        const viewsData = {
            pageTitle: "Pikituchos Homepage"
        };
        res.render( "home", viewsData );
    },
];