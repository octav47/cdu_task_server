let expring = require('expring')

class TaskController extends expring.Controller {
    constructor() {
        super('TaskController')
    }
}

let taskController = new TaskController()

taskController.setRequests([
    {
        url: '/regions/',
        fn: (req, res) => {
            res.send({
                test: 'test'
            })
        }
    }
])

module.exports = taskController