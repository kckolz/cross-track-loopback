
/**
 * Module dependencies
 */

var express = require('express'),
  routes = require('./routes'),
  api = require('./routes/api'),
  http = require('http'),
  path = require('path'),
  mongoose = require('mongoose');


var app = module.exports = express();


/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// development only
if (app.get('env') === 'development') {
  app.use(express.errorHandler());
}

// production only
if (app.get('env') === 'production') {
  // TODO
}


/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON API
app.get('/api/name', api.name);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

// Database Init
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("DB Connection Open");
  db.collection('exercises', {strict:true}, function(err, collection) {
    if (err) {
        console.log("The 'exercises' collection doesn't exist. Creating it with sample data...");
        populateDB();
    }
  });
  Exercise.findOne({title: 'Back Squat'}, function(err,obj) { console.log(obj); });

});

/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});


/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
var Exercise = require('./models/Exercise');
var populateDB = function() {
 
  var backSquat = new Exercise(
    { 
      title: 'Back Squat',
      classification: 'weightlifting'
    }
  );

  backSquat.save(function (err, fluffy) {
    if (err) return console.error(err);
  }); 
};
