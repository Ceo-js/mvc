

const { saveProduct } = require("../models/Products");


exports.getAddProductPage = ( req, res ) => {
    const viewsData = {
        pageTitle: "Add Product"
    };
    res.render( "addProduct", viewsData );
};

exports.postAddProductPage = ( req, res ) => {
    console.log( req.body );

    const product = {
        id: Date.now(),
        title: req.body.title,
        image: req.body.image,
        price: req.body.price,
        description: req.body.description,
    };
    saveProduct( product );
    res.redirect( "/" );
};