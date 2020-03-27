
// 1. Создать объект, описывающий автомобиль 
// (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
// Функция для вывода на экран информации об автомобиле;
// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.


let Car = {
    brand: "Zündapp",
    model: "Janus",
    year: 1957,
    speed: 50,
    getInfo: function () {
        return `brand: ${this.brand}, model: ${this.model}, year: ${this.year}, speed: ${this.speed}`;
    },
    calcTraveltime: function (distance) {
        let noRestDistance = this.speed * 4;
        let res = 0;

        while (distance > noRestDistance) {
            distance -= noRestDistance;
            res += (noRestDistance / this.speed) + 1;
        }

        return (distance / this.speed) + res;
    }
};


// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 
// 
// Функция сложения 2-х объектов-дробей;
// 
// Функция вычитания 2-х объектов-дробей;
// 
// Функция умножения 2-х объектов-дробей;
// 
// Функция деления 2-х объектов-дробей;
// 
// Функция сокращения объекта-дроби.


let Fraction = {
    numerator: 12,
    denominator: 16,
    Shorten: function () {
        let i = Math.abs(Math.min(this.numerator, this.denominator));
        while ((this.numerator % i) || (this.denominator % i)) {
            i--;
        }
        this.numerator /= i;
        this.denominator /= i;
    },
    Add: function (f2) {
        let res = Object.assign(this);
        res.numerator = this.numerator * f2.denominator + f2.numerator * this.denominator;
        res.denominator = this.denominator * f2.denominator;
        res.Shorten();
        return res;
    },
    Substruct: function (f2) {
        let res = Object.assign(this);
        res.numerator = this.numerator * f2.denominator - f2.numerator * this.denominator;
        res.denominator = this.denominator * f2.denominator;
        res.Shorten();
        return res;
    },
    Multiply: function (f2) {
        let res = Object.assign(this);
        res.numerator = this.numerator * f2.numerator;
        res.denominator = this.denominator * f2.denominator;
        res.Shorten();
        return res;
    },
    Divide: function (f2) {
        let res = Object.assign(this);
        res.numerator = this.numerator * f2.denominator;
        res.denominator = this.denominator * f2.numerator;
        res.Shorten();
        return res;
    }

}

// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 
// 
// Функция вывода времени на экран;
// 
// Функция изменения времени на переданное количество секунд;
// 
// Функция изменения времени на переданное количество минут;
// 
// Функция изменения времени на переданное количество часов. 
// 
// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. 
// Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

let Time = {
    hours: 1,
    minutes: 1,
    seconds: 1,
    getTime: function () {
        return `"${this.hours}:${this.minutes}:${this.seconds}"`
    },
    addHours: function (num) {
        this.hours += num;
    },
    addMinutes: function (num) {
        let hours = 0;
        while (num > 60) {
            hours++;
            num -= 60
        }
        this.minutes += num;
        if (this.minutes > 60) {
            this.minutes -= 60;
            hours++;
        }
        this.addHours(hours);
    },
    addSeconds: function (num) {
        let minutes = 0;
        while (num > 60) {
            minutes++;
            num -= 60
        }
        this.seconds += num;
        if (this.seconds > 60) {
            this.seconds -= 60;
            minutes++;
        }
        this.addMinutes(minutes);
    }

}