

const fs = require( "fs" ),
    path = require( "path" ),
    rootDir = require( "../utils/path" );

const getCartDetailsFromFile = ( handler ) => {
    const cartPath = path.join( rootDir, "../data", "cart.json" );
    fs.readFile( cartPath, ( error, cartContent ) => {
        let cart = { products: [] };
        if( !error ) {
            cart = JSON.parse( cartContent );
        }
        return handler( cart );
    } );
};

exports.addProduct2Cart = ( productId, productPrice ) => {
//     console.log( `\x1b[33moi
// ================================
// productPrice:
// ${productPrice}` );

    const cartPath = path.join( rootDir, "../data", "cart.json" );
    getCartDetailsFromFile( cart => {
        // console.log( `\x1b[33moi
        //     ================================
        //     cart:
        //     ${cart}` );
        let existingProductIndex = cart.products.findIndex( p => p.id.toString() === productId );

        let updatedProduct;

        if( existingProductIndex !== -1 ) {
            updatedProduct = { ...cart.products[ existingProductIndex ] };
            updatedProduct.quantity += 1;
            cart.products = [ ...cart.products ];
            cart.products[ existingProductIndex ] = updatedProduct;
        } else {
            updatedProduct = { id: productId, quantity: 1 };
            cart.products = [ ...cart.products, updatedProduct ];
        }

        // cart.totalPrice += +productPrice;
        fs.writeFile( cartPath, JSON.stringify( cart ), error => {
            console.log( error );
        } ); 
    } );
};

exports.deleteProductFromCart = ( productId ) => {
    const cartPath = path.join( rootDir, "../data", "cart.json" );
    getCartDetailsFromFile( cart => {
        let cartProducts = cart.products,
            updatedCartProducts = cartProducts.filter( p => p.id.toString() !== productId.toString() );
            
        fs.writeFile( cartPath, JSON.stringify( updatedCartProducts ), error => {
            console.log( error );
        } ); 
    } );
};