let expring = require('expring')

class CityService extends expring.Service {
    constructor() {
        super('CityService')
    }
}

let cityService = new CityService()

cityService.addMethods([{
    name: 'getCitiesByDistrictID',
    fn: (id) => {
        if (id == 119) {
            return [
                { "id": 10000, "name": "Давыдовка" },
                { "id": 10001, "name": "Екатериновка" },
                { "id": 10002, "name": "Софьино" },
                { "id": 10003, "name": "Сперанка" },
                { "id": 10004, "name": "Заволжье" },
                { "id": 10005, "name": "Ильмень" },
                { "id": 10006, "name": "Нижнеозерецкий" },
                { "id": 10007, "name": "Озерецкое" },
                { "id": 10008, "name": "Бестужевка" },
                { "id": 10009, "name": "Кашпир" },
                { "id": 10010, "name": "Новоспасский" },
                { "id": 10011, "name": "Степняки" },
                { "id": 10012, "name": "Якобьевка" },
                { "id": 10013, "name": "Нижнепечерское" },
                { "id": 10014, "name": "Обшаровка" },
                { "id": 10015, "name": "Тростянка" },
                { "id": 10016, "name": "Гаркино" },
                { "id": 10017, "name": "Золотая Гора" },
                { "id": 10018, "name": "Аннино" },
                { "id": 10019, "name": "Приволжье" },
                { "id": 10020, "name": "Фёдоровка" },
                { "id": 10021, "name": "Спасское" },
                { "id": 10022, "name": "Садовый" },
                { "id": 10023, "name": "Томанский" }
            ]
        } else {
            return []
        }
    }
}])

module.exports = cityService