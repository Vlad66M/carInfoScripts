
var car = {
    manufacturer: 'M1',
    model: 'M1-001',
    prodYear: 2020,
    averSpeed: 80,

    // 1
    displayInfo: function() {
        let info = `Manufacturer: ${this.manufacturer}\n`+
        `Model: ${this.model}\n` +
        `Production year: ${this.prodYear}\n`+
        `Average speed: ${this.averSpeed}\n`
        alert(info);
    },

    // 2
    calcTime: function (distance){
        let rawTime = distance/this.averSpeed;
        let time = 0;
        let stopsCount = rawTime / 4;
        if(stopsCount == Math.floor(stopsCount)){
            time = rawTime + Math.floor(stopsCount) - 1;
        }
        else{
            time = rawTime + Math.floor(stopsCount);
        }
        time = Math.ceil(time); // округление до целых часов в большую сторону
        if(time<0){
            time=0;
        }
        return time;
    },

    // 3
    calcYears: function (){
        let currentYear = new Date().getFullYear();
        return currentYear - this.prodYear;
    }
};

car.displayInfo();

let distance = 800;
alert(`Количество часов для преодоления ${distance} км: ${car.calcTime(distance)}`);
alert(`Количество лет с момента выпуска: ${car.calcYears()}`);