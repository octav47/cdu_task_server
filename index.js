let expring = require('expring')

let app = expring()

app.set('view engine', 'jade')
app.set('views', __dirname + '/views')
app.use(expring.static('assets'))
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

let WelcomeController = require('./controllers/WelcomeController.js')
WelcomeController.init(app)

let TaskController = require('./controllers/TaskController.js')
TaskController.init(app)

let port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Listening on " + port);
});