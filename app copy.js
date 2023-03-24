

const http = require( "http" ),
    gate = 7879;

const server = http.createServer( ( req, res ) => {
    // console.log( req.url );
    // console.log( req.method );
    if( req.url === "/" ) {
        return setHomePage( req, res );
    }
    if( req.url == "/username" ) {
        return submitUsername( req, res );
    }
} );

function setHomePage( req, res ) {
    res.setHeader( "Content-Type", "text/html" );
    // res.write( "<>" );
    // res.write( "<h1>Lyh</h1>" );
    return res.end( `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="/submit" method="post">
        <label>
            <input type="text" name="submit">
        </label>
        <input type="submit" value="send">
    </form>
</body>
</html>` );
}

function submitUsername( req, res ) {
    res.setHeader( "Content-Type", "text/html" );
    res.statusCode = 302;
    res.setHeader( "Location", "/" );
    return res.end( `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    oi
</body>
</html>` );
}



server.listen( gate );