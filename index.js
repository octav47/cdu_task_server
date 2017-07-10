let expring = require('expring')

let app = expring()

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
})

let TaskController = require('./controllers/TaskController.js')
TaskController.init(app)

let port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Listening on " + port);
});