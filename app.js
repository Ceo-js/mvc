const createError = require('http-errors'),
    express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    rootDir = require( "./src/utils/path" );

const indexRoutes = require('./src/routes/index'),
    // usersRoutes = require('./routes/users'),
    adminRoutes = require( "./src/routes/admin" );

/* const indexRouter = require( "./src/routes/indexRouter" );
const usersRouter = require( "./src/routes/usersRouter" );
const loginRouter = require( "./src/routes/loginRouter" );
const checkoutRouter = require( "./src/routes/checkoutRouter" );
const authRouter = require( "./src/routes/authRouter" ); */

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src/public')));
// app.use( '/src', express.static( path.join( __dirname, 'public' ) ) );
app.use( "/home", express.static( "src/public" ) );
app.use( "/products", express.static( "src/public" ) );
app.use( "/products/edit", express.static( "src/public" ) );
app.use( "/produto", express.static( "src/public" ) );
app.use( "/admin", express.static( "src/public" ) );
app.use( "/admin/edit-product", express.static( "src/public" ) );
app.use( "/admin/product-details", express.static( "src/public" ) );

app.use('/', indexRoutes);
// app.use( "/products", adminRoutes );
app.use( "/admin", adminRoutes );
// app.use('/users', usersRoutes);

/* app.use( homeRouter );
app.use( adminRouter );
// app.use( indexRouter );
app.use( usersRouter );
app.use( loginRouter );
app.use( checkoutRouter );
app.use( authRouter ); */

// catch 404 and forward to error handler
/* app.use(function(req, res, next) {
  next(createError(404));
}); */

app.use( ( req, res, next ) => {
    const viewsData = {
        pageTitle: "Page Not Found",
        message: "oi",
    };
    res.status( 404 ).render( "404", viewsData );
} );


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
