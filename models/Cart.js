

const fs = require( "fs" ),
    path = require( "path" ),
    rootDir = require( "../utils/path" );

exports.addProduct2Cart = ( productId, productPrice ) => {
    const cartPath = path.join( rootDir, "../data", "cart.json" );
    fs.readFile( cartPath, ( error, cartContent ) => {
        let cart = { products: [], totalPrice: 0 };
        if( !error ) {
            cart = JSON.parse( cartContent );
        }

        let existingProductIndex = cart.products.findIndex( p => p.id.toString() == productId );

        let updatedProduct;

        if( existingProductIndex != -1 ) {
            updatedProduct = [ ...cart.products[ existingProductIndex ] ];
            updatedProduct.quantity += 1;
            cart.products = [ ...cart.products ];
            cart.products = [ existingProductIndex ] = updatedProduct;
        } else {
            updatedProduct = { id: productId, quantity: 1 };
            cart.products = [ ...cart.products, updatedProduct ];
        }

        cart.totalPrice += +productPrice;
        fs.writeFile( cartPath, JSON.stringify( cart ), error => {
            console.log( error );
        } ); 
    } );
};