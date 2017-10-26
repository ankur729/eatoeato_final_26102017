// require('./routes/db.js');
// var https = require('https');
// var fs = require('fs');
// var compression = require('compression');
// var express = require('express');
// var path = require('path');
// var bodyParser = require('body-parser');

// var index = require('./routes/index');
// var tasks = require('./routes/tasks');
// var foods = require('./routes/foods');
// var user_route = require('./routes/user_route');
// var cook_route = require('./routes/cook_route');
// var admin_route = require('./routes/admin_route');

// var port = 443;

// var app = express();



// app.all(/.*/, function(req, res, next) {
//   var host = req.header("host");
//   if (host.match(/^www\..*/i)) {
//     next();
//   } else {
//     res.redirect(301, "https://www." + host);
//   }
// });



// app.use(compression());

// var options = {
//   key: fs.readFileSync('/home/eatoeato/ssl/keys/f3a5e_7296f_480f248ebfc4f888c26dcb8b47d37f88.key'),
//   cert: fs.readFileSync('/home/eatoeato/ssl/certs/eatoeato_com_f3a5e_7296f_1536883199_3e07a81a0605b738ddb22f27f0eb9b00.crt'),
// };

//  //server = https.createServer(certOpts, app);
// // Set Static Folder

// console.log('DIR NAME'+ __dirname);
// app.use(express.static(path.join(__dirname, 'client')));
// app.use(bodyParser.json({limit: "50mb"}));
// app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
// // app.use(bodyParser.json()); 





// app.use('/', index);
// app.use('/api', tasks);
// app.use('/foods', foods);
// app.use('/user', user_route);
// app.use('/cook', cook_route);

// app.use('/admin', admin_route);
// var server = https.createServer(options, app);
// server.listen(port, function(){
//     console.log('Express server listening to port '+port);
// });


require('./routes/db.js');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var compression = require('compression');
var index = require('./routes/index');
var tasks = require('./routes/tasks');
var foods = require('./routes/foods');
var user_route = require('./routes/user_route');
var cook_route = require('./routes/cook_route');
var admin_route = require('./routes/admin_route');

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('compress', function (cb) {
  pump([
    gulp.src('client/pudblic/js/*.js'),
    uglify(),
    gulp.dest('dist')
  ],
    cb
  );
});


var port = 3000;

var app = express();
app.use(compression());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
// app.use(bodyParser.json()); 


app.use('/', index);
app.use('/api', tasks);
app.use('/foods', foods);
app.use('/user', user_route);
app.use('/cook', cook_route);

app.use('/admin', admin_route);

app.listen(port, function () {
  console.log('Server started on port ' + port);
});