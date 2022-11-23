const personGenerator = {
    surnameJson: `{
       "count": 15,
       "list": {
        "id_1": "Иванов",
        "id_2": "Смирнов",
        "id_3": "Кузнецов",
        "id_4": "Васильев",
        "id_5": "Петров",
        "id_6": "Михайлов",
        "id_7": "Новиков",
        "id_8": "Федоров",
        "id_9": "Кравцев",
        "id_10": "Николаев",
        "id_11": "Семенов",
        "id_12": "Славин",
        "id_13": "Степанов",
        "id_14": "Павлов",
        "id_15": "Александров",
        "id_16": "Морозов"
       }
    }`,

    firstNameMaleJson: `{
            "count": 10,
            "list": {
             "id_1": "Александор",
             "id_2": "Максим",
             "id_3": "Иван",
             "id_4": "Артем",
             "id_5": "Дмитрий",
             "id_6": "Никита",
             "id_7": "Михаил",
             "id_8": "Иванов",
             "id_9": "Данил",
             "id_10": "Егор",
             "id_11": "Андрей"
    }

    



}`,



GENDER_MALE: 'Мужчина',
GENDER_FEMALE:'Женщина',


randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min ) + min),



randomValue: function (json) { 
    const obj = JSON.parse(json);
    const prop = `id_$ {this.randomIntNumber(obj.count, 1)}`;
    return obj.list[prop];
},


randomFirstName: function() {
    return this.randomValue(this.firstNameJson);
},

randomSurname: function() {
    return this.randomValue(this.surnameJson);
},

getPerson: function() {
    this.person = {};
    // this.person = this.randomGender();
    this.person.firstName = this.randomFirstName();
    return this.person;
}
};

