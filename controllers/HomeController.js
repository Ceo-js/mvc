

const { fetchAllProducts, getProductById } = require("../models/Products");

exports.getHomePage = ( req, res ) => {
    fetchAllProducts( ( products ) => {
        const viewsData = {
            admin: false,
            products,
            pageTitle: "Home page - Products List"
        };
        res.render( 'index', viewsData );
    } );
};

exports.getProductDetailPage = ( req, res ) => {
    const productId = req.params.productId;
    getProductById( productId, product => {
        const viewsData = {
            admin: false,
            product,
            pageTitle: product.title,
        };
        res.render( "productDetails", viewsData );
    } );
}