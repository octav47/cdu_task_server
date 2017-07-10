let expring = require('expring')

class CityService extends expring.Service {
    constructor() {
        super('CityService')
    }
}

let cityService = new CityService()

let cities = [
    { "id": 10000, "name": "Давыдовка", geoData: [52.748859, 48.410184] },
    { "id": 10001, "name": "Екатериновка", geoData: [53.087583, 49.451987] },
    { "id": 10002, "name": "Софьино", geoData: [52.772047, 48.487574] },
    { "id": 10003, "name": "Сперанка", geoData: [52.760147, 48.471691] },
    { "id": 10004, "name": "Заволжье", geoData: [52.948933, 48.604444] },
    { "id": 10005, "name": "Ильмень", geoData: [52.902360, 48.748112] },
    { "id": 10006, "name": "Нижнеозерецкий", geoData: [52.867387, 48.818450] },
    { "id": 10007, "name": "Озерецкое", geoData: [52.790692, 48.750681] },
    { "id": 10008, "name": "Бестужевка", geoData: [53.094900, 48.600186] },
    { "id": 10009, "name": "Кашпир", geoData: [53.003049, 48.567928] },
    { "id": 10010, "name": "Новоспасский", geoData: [52.998952, 48.772780] },
    { "id": 10011, "name": "Степняки", geoData: [52.958492, 48.831008] },
    { "id": 10012, "name": "Якобьевка", geoData: [53.130304, 48.638230] },
    { "id": 10013, "name": "Нижнепечерское", geoData: [53.178946, 48.944493] },
    { "id": 10014, "name": "Обшаровка", geoData: [53.119065, 48.864650] },
    { "id": 10015, "name": "Тростянка", geoData: [53.117686, 48.731134] },
    { "id": 10016, "name": "Гаркино", geoData: [53.154719, 48.868109] },
    { "id": 10017, "name": "Золотая Гора", geoData: [53.121005, 48.915576] },
    { "id": 10019, "name": "Приволжье", geoData: [52.858150, 48.592012] },
    { "id": 10020, "name": "Фёдоровка", geoData: [52.808588, 48.543458] },
    { "id": 10021, "name": "Спасское", geoData: [52.883845, 48.610903] },
    { "id": 10022, "name": "Садовый", geoData: [52.907465, 48.607238] },
    { "id": 10023, "name": "Томанский", geoData: [52.867018, 48.678600] }
]

cityService.addMethods([{
    name: 'getCitiesByDistrictID',
    fn: (id, name) => {
        if (id != 119) {
            return []
        }
        let result = []
        cities.map((e) => {
            if (e.name.toLowerCase().indexOf(name.toLowerCase()) > -1) {
                let city = {
                    id: e.id,
                    name: e.name
                }
                result.push(city)
            }
        })
        return result
    }
}, {
    name: 'getCityByID',
    fn: (id) => {
        for (let city of cities) {
            if (city.id == id) {
                return city
            }
        }
        return null
    }
}])

module.exports = cityService