let expring = require('expring')

let app = expring()

let TaskController = require('./controllers/TaskController.js')
TaskController.init(app)

let port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Listening on " + port);
});