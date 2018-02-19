var express = require('express'), app = express(), bodyParser = require("body-parser");
var exphbs  = require('express-handlebars');
const PORT = process.env.PORT || 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/static'));


app.engine('handlebars', exphbs({defaultLayout: 'main', partialsDir: __dirname + '/views/partials/'}));
app.set('view engine', 'handlebars');

app.get('/', function(req,res){
    res.render('main', {layout: false});
});


 app.listen(PORT , function(){
    console.log("APP IS RUNNING ON PORT "+ PORT);
});