const expring = require('expring')

class WelcomeController extends expring.Controller {
    constructor() {
        super('WelcomeController')
    }
}

let welcomeController = new WelcomeController()

welcomeController.setRequests([
    {
        url: '/',
        fn: function (req, res) {
            res.render('index', {
                title: 'CDU Task',
                message: 'test'
            });
        }
    }
])

module.exports = welcomeController