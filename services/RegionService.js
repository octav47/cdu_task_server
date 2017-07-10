let expring = require('expring')

class RegionService extends expring.Service {
    constructor() {
        super('RegionService')
    }
}

let regionService = new RegionService()

regionService.addMethods([{
    name: 'getRegionsList',
    fn: () => ([
        {
            "id": 1,
            "name": "Республика Адыгея"
        },
        {
            "id": 2,
            "name": "Республика Башкортостан"
        },
        {
            "id": 3,
            "name": "Республика Бурятия"
        },
        {
            "id": 4,
            "name": "Республика Алтай"
        },
        {
            "id": 5,
            "name": "Республика Дагестан"
        },
        {
            "id": 6,
            "name": "Республика Ингушетия"
        },
        {
            "id": 7,
            "name": "Кабардино-Балкарская Республика"
        },
        {
            "id": 8,
            "name": "Республика Калмыкия"
        },
        {
            "id": 9,
            "name": "Республика Карачаево-Черкесия"
        },
        {
            "id": 10,
            "name": "Республика Карелия"
        },
        {
            "id": 11,
            "name": "Республика Коми"
        },
        {
            "id": 12,
            "name": "Республика Марий Эл"
        },
        {
            "id": 13,
            "name": "Республика Мордовия"
        },
        {
            "id": 14,
            "name": "Республика Саха (Якутия)"
        },
        {
            "id": 15,
            "name": "Республика Северная Осетия-Алания"
        },
        {
            "id": 16,
            "name": "Республика Татарстан"
        },
        {
            "id": 17,
            "name": "Республика Тыва"
        },
        {
            "id": 18,
            "name": "Удмуртская Республика"
        },
        {
            "id": 19,
            "name": "Республика Хакасия"
        },
        {
            "id": 20,
            "name": "Чеченская республика"
        },
        {
            "id": 21,
            "name": "Чувашская Республика"
        },
        {
            "id": 22,
            "name": "Алтайский край"
        },
        {
            "id": 23,
            "name": "Краснодарский край"
        },
        {
            "id": 24,
            "name": "Красноярский край"
        },
        {
            "id": 25,
            "name": "Приморский край"
        },
        {
            "id": 26,
            "name": "Ставропольский край"
        },
        {
            "id": 27,
            "name": "Хабаровский край"
        },
        {
            "id": 28,
            "name": "Амурская область"
        },
        {
            "id": 29,
            "name": "Архангельская область"
        },
        {
            "id": 30,
            "name": "Астраханская область"
        },
        {
            "id": 31,
            "name": "Белгородская область"
        },
        {
            "id": 32,
            "name": "Брянская область"
        },
        {
            "id": 33,
            "name": "Владимирская область"
        },
        {
            "id": 34,
            "name": "Волгоградская область"
        },
        {
            "id": 35,
            "name": "Вологодская область"
        },
        {
            "id": 36,
            "name": "Воронежская область"
        },
        {
            "id": 37,
            "name": "Ивановская область"
        },
        {
            "id": 38,
            "name": "Иркутская область"
        },
        {
            "id": 39,
            "name": "Калининградская область"
        },
        {
            "id": 40,
            "name": "Калужская область"
        },
        {
            "id": 41,
            "name": "Камчатский край"
        },
        {
            "id": 41,
            "name": "Камчатская область"
        },
        {
            "id": 42,
            "name": "Кемеровская область"
        },
        {
            "id": 43,
            "name": "Кировская область"
        },
        {
            "id": 44,
            "name": "Костромская область"
        },
        {
            "id": 45,
            "name": "Курганская область"
        },
        {
            "id": 46,
            "name": "Курская область"
        },
        {
            "id": 47,
            "name": "Ленинградская область"
        },
        {
            "id": 48,
            "name": "Липецкая область"
        },
        {
            "id": 49,
            "name": "Магаданская область"
        },
        {
            "id": 50,
            "name": "Московская область"
        },
        {
            "id": 51,
            "name": "Мурманская область"
        },
        {
            "id": 52,
            "name": "Нижегородская область"
        },
        {
            "id": 53,
            "name": "Новгородская область"
        },
        {
            "id": 54,
            "name": "Новосибирская область"
        },
        {
            "id": 55,
            "name": "Омская область"
        },
        {
            "id": 56,
            "name": "Оренбургская область"
        },
        {
            "id": 57,
            "name": "Орловская область"
        },
        {
            "id": 58,
            "name": "Пензенская область"
        },
        {
            "id": 59,
            "name": "Пермский край"
        },
        {
            "id": 59,
            "name": "Пермская область"
        },
        {
            "id": 60,
            "name": "Псковская область"
        },
        {
            "id": 61,
            "name": "Ростовская область"
        },
        {
            "id": 62,
            "name": "Рязанская область"
        },
        {
            "id": 63,
            "name": "Самарская область"
        },
        {
            "id": 64,
            "name": "Саратовская область"
        },
        {
            "id": 65,
            "name": "Сахалинская область"
        },
        {
            "id": 66,
            "name": "Свердловская область"
        },
        {
            "id": 67,
            "name": "Смоленская область"
        },
        {
            "id": 68,
            "name": "Тамбовская область"
        },
        {
            "id": 69,
            "name": "Тверская область"
        },
        {
            "id": 70,
            "name": "Томская область"
        },
        {
            "id": 71,
            "name": "Тульская область"
        },
        {
            "id": 72,
            "name": "Тюменская область"
        },
        {
            "id": 73,
            "name": "Ульяновская область"
        },
        {
            "id": 74,
            "name": "Челябинская область"
        },
        {
            "id": 75,
            "name": "Читинская область"
        },
        {
            "id": 76,
            "name": "Ярославская область"
        },
        {
            "id": 77,
            "name": "г. Москва"
        },
        {
            "id": 78,
            "name": "г. Санкт-Петербург"
        },
        {
            "id": 79,
            "name": "Еврейская автономная область"
        },
        {
            "id": 80,
            "name": "Агинский Бурятский автономный округ"
        },
        {
            "id": 81,
            "name": "Коми-Пермяцкий автономный округ"
        },
        {
            "id": 82,
            "name": "Корякский автономный округ"
        },
        {
            "id": 83,
            "name": "Ненецкий автономный округ"
        },
        {
            "id": 84,
            "name": "Таймырский (Долгано-Ненецкий) автономный округ"
        },
        {
            "id": 85,
            "name": "Усть-Ордынский Бурятский автономный округ"
        },
        {
            "id": 86,
            "name": "Ханты-Мансийский автономный округ - Югра"
        },
        {
            "id": 87,
            "name": "Чукотский автономный округ"
        },
        {
            "id": 88,
            "name": "Эвенкийский автономный округ"
        },
        {
            "id": 89,
            "name": "Ямало-Ненецкий автономный округ"
        },
        {
            "id": 91,
            "name": "Республика Крым"
        },
        {
            "id": 92,
            "name": "г.Севастополь"
        },
        {
            "id": 95,
            "name": "Чеченская Республика"
        }
    ])
}])

module.exports = regionService