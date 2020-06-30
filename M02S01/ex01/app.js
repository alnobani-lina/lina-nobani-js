class car {
    constructor (
        make,
        color,
        wheels,
        speed
    ) {
        this.make = make;
        this.color = color;
        this.wheels = wheels;
        this.speed = speed;

        this.topSpeed = 160;
        this.reverseTopSpeed = -50;
    }

    isTrunkOpen = false;
    areLightsOn = false;

    accelerate() {
        this.speed++;
    }

    decelerate() {
        this.speed--;
    }

    stop () {
        this.speed = 0;
        console.log(this.speed);
    }

    setSpeed (speed) {
        if (speed > this.topSpeed) {
            this.speed = this.topSpeed;
        }

        if (speed < this.reverseTopSpeed) {
            this.speed = this.reverseTopSpeed;
            return;
        }

        this.speed = speed;
    }

    toggleTrunk () {
        this.isTrunkOpen = !this.isTrunkOpen;

        return this.isTrunkOpen;
    }

    turnedLightsOn () {
        this.turnedLightsOn = true;
    }

    turnedLightsOff () {
        this.areLightsOn = false;
    }

    flashLights () {
        this.turnLightsOn();

        setTimeout(() => {
            this.turnLightsOff();
        },3000)
    }
}

var audi = new car('Audi', 'black', 4, 50);

console.warn('Instant another car (Opel, red, with 4 wheels and speed 3). You can save it in a variable called opel.');
let opel = new car('opel', 'red', 4, 3);

console.warn('Add a method called stop () to make the speed 0 property, then display the speed.');
opel.stop();

let cars = [audi, opel];

cars.forEach((car) => {
 console.log(`the car is ${car.make} and it goes ${car.speed}km/h.`)
 car.setSpeed(car.speed - 5);
 console.log(`the new spped is ${car.spped}`);
} );