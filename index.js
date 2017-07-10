let expring = require('expring')

let app = expring()

let TaskController = require('./controllers/TaskController.js')
TaskController.init(app)

app.listen(80)