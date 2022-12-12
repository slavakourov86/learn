var car1 = {
    isTurnOn: false,
    name: 'Creta',
    speed: 0,
    engimne: {
        v: 2.0,
        power: 150
    },
    start: function() {
        this.isTurnOn =  true;
        this.speed = 20;
    }
}

console.log(car1.name)