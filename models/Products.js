

/* //  [ without products file ]
// =======================================
const products = [];

exports.saveProduct = product => {
    products.push( product );
};

exports.getAllProducts = () => {
    return products;
};
// =======================================
 */














/* // [ with products file ]
// =======================================
const fs = require( "fs" ),
    path = require( "path" ),
    rootDir = require( "../utils/path" );


exports.saveProduct = product => {
    const productsPath = path.join( rootDir, "../data", "products.json" );
    fs.readFile( productsPath, ( error, productsData ) => {
        let products = [];
        if( !error ) {
            products = JSON.parse( productsData );
        }
        products.push( product );
        fs.writeFile( productsPath, JSON.stringify( products ), ( error ) => {
            console.log( error );
        })
    } );
};

exports.fetchAllProducts = ( handler ) => {
    const productsPath = path.join( rootDir, "../data", "products.json" );
    fs.readFile( productsPath, ( error, productsData ) => {
        let products = [];
        products = JSON.parse( productsData );
        handler( products );
    } );
};
// ============================================ */











// [ with products file ]
// =======================================
const fs = require( "fs" ),
    path = require( "path" ),
    rootDir = require( "../utils/path" );


const getProductsFromFile = handler => {
    const productsPath = path.join( rootDir, "../data", "products.json" );
    fs.readFile( productsPath, ( error, productsData ) => {
        if( error ) {
            return handler( [] );
        }
        return handler( JSON.parse( productsData ) );
    } );
}

exports.saveProduct = product => {
    const productsPath = path.join( rootDir, "../data", "products.json" );
    getProductsFromFile( productsData => {
        productsData.push( product );
        fs.writeFile( productsPath, JSON.stringify( productsData ), ( error ) => {
            console.log( error );
        } );
    } );
};

exports.fetchAllProducts = ( handler ) => {
    getProductsFromFile( handler );

    const productsPath = path.join( rootDir, "../data", "products.json" );
    fs.readFile( productsPath, ( error, productsData ) => {
        let products = [];
        products = JSON.parse( productsData );
        handler( products );
    } );
};

exports.getProductById = ( productId, handler ) => {
    getProductsFromFile( products => {
        const product = products.find( p => p.id.toString() == productId );
        handler( product );
    } );
}
// ============================================