let expring = require('expring')

class TaskController extends expring.Controller {
    constructor() {
        super('TaskController')
    }
}

let RegionService = require('../services/RegionService.js')
let DistrictService = require('../services/DistrictService.js')
let CityService = require('../services/CityService.js')

let taskController = new TaskController()

taskController.setRequests([
    {
        url: '/getRegionsList',
        fn: (req, res) => {
            res.send(RegionService.getRegionsList())
        }
    },
    {
        url: '/getDistrictsByRegionID',
        fn: (req, res) => {
            res.send(DistrictService.getDistrictsByRegionID(+req.query.id))
        }
    },
    {
        url: '/getCitiesByDistrictID',
        fn: (req, res) => {
            res.send(CityService.getCitiesByDistrictID(+req.query.id))
        }
    }
])

module.exports = taskController