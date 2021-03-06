let expring = require('expring')

class DistrictService extends expring.Service {
    constructor() {
        super('DistrictService')
    }
}

let districtService = new DistrictService()

let districts = [
    { "id": 100, "name": "Алексеевский район " },
    { "id": 101, "name": "Безенчукский район‎" },
    { "id": 102, "name": "Богатовский район‎" },
    { "id": 103, "name": "Большеглушицкий район‎" },
    { "id": 104, "name": "Большечерниговский район‎" },
    { "id": 105, "name": "Борский район" },
    { "id": 106, "name": "Волжский район" },
    { "id": 107, "name": "Елховский район‎" },
    { "id": 108, "name": "Исаклинский район‎" },
    { "id": 109, "name": "Камышлинский район‎" },
    { "id": 110, "name": "Кинель-Черкасский район‎" },
    { "id": 111, "name": "Кинельский район‎" },
    { "id": 112, "name": "Клявлинский район‎" },
    { "id": 113, "name": "Кошкинский район‎" },
    { "id": 114, "name": "Красноармейский район" },
    { "id": 115, "name": "Красноярский район " },
    { "id": 116, "name": "Нефтегорский район‎" },
    { "id": 117, "name": "Пестравский район‎" },
    { "id": 118, "name": "Похвистневский район‎" },
    { "id": 119, "name": "Приволжский район" },
    { "id": 120, "name": "Сергиевский район‎" },
    { "id": 121, "name": "Ставропольский район‎" },
    { "id": 122, "name": "Сызранский район‎" },
    { "id": 123, "name": "Хворостянский район‎" },
    { "id": 124, "name": "Челно-Вершинский район‎" },
    { "id": 125, "name": "Шенталинский район‎" },
    { "id": 126, "name": "Шигонский район" }
]

districtService.addMethods([{
    name: 'getDistrictsByRegionID',
    fn: (id, name) => {
        if (id != 63) {
            return []
        }
        let result = []
        districts.map((e) => {
            if (e.name.toLowerCase().indexOf(name.toLowerCase()) > -1) {
                result.push(e)
            }
        })
        return result
    }
}])

module.exports = districtService