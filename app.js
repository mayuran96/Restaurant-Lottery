var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const yelp = require('yelp-fusion');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

app.post('/yelp',function (req, res){
    const clientId = 'JT_RwwuUVgPxnnkKcR3D7w';
    const clientSecret = 'H8nWwtyDb3bGiAVcqHLGz0Ux0wGXgqi30vEmW99pi3MXohdQEqwtR5ATYSijS2ZTs';


    const token = yelp.accessToken(clientId, clientSecret).then(response => {
        console.log(response.jsonBody.access_token);
    }).catch(e => {
        console.log(e);
    });

    client.search({
        term:'',
        location: ''
    }).then(response => {
        console.log(response.jsonBody.businesses[0].name);
    }).catch(e => {
        console.log(e);
    });

});


module.exports = app;
