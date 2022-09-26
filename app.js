var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser')
const session = require('express-session')

const SECRET = require('./config/secret')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require ('./routes/product')
var checkoutRouter = require ('./routes/checkout')
var manipularRouter = require ('./routes/manipularListaProdutos')

var app = express();

const methodOverride = require('method-override');
app.use(methodOverride('_method'));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())
app.use(session({secret:SECRET, resave: true, saveUninitialized:true}))



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/produto', productRouter)
app.use('/checkout', checkoutRouter)
app.use('/manipular', manipularRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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
