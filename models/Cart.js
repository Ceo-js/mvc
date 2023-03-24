

const fs = require( "fs" ),
    path = require( "path" ),
    rootDir = require( "../utils/path" );

exports.addProduct2Cart = productId => {
    const cartPath = path.join( rootDir, "../data", "cart.json" );
    fs.readFile( cartPath, ( error, cartContent ) => {
        
    } );
};