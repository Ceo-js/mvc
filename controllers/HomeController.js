

const { fetchAllProducts, getProductById } = require("../models/Products");

exports.getHomePage = ( req, res ) => {
    fetchAllProducts( ( products ) => {
        const viewsData = {
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
            product,
            pageTitle: product.title,
        };
        res.render( "productDetails", viewsData );
    } );
}