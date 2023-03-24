

const { addProduct2Cart } = require("../models/Cart"),
    { getProductById } = require( "../models/Products" );

exports.postCartPage = ( req, res ) => {
    // console.log( req.body );
    const productId = req.body.productId;
    getProductById( productId, product => {
        addProduct2Cart( productId, product.price );
        res.redirect( "/" );
    } );
};

exports.getCartPage = ( req, res ) => {
    // console.log( req.body );
};