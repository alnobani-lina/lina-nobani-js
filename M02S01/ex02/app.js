class vehicle {
    constructor(
        make,
        color,
        wheels,
        speed,
        topSpeed = 160,
        topReverseSpeed = -50,
    ) {
        this.make = make;
        this.color = color;
        this.wheels = wheels;
        this.speed = speed;
        this.topSpeed = topSpeed;
        this.topReverseSpeed = topReverseSpeed;
    }
    displaySpeed () {
        console.log(`the current speed is`, this.speed);
    }

    accelerate() {
        this.setSpeed(++this.speed);
    }

    decelerate() {
       this.setSpeed(--this.speed)
    }

    setSpeed (speed) {
        if (speed > this.topSpeed) {
            this.speed = this.topSpeed;
            this.displaySpeed();
            return;
        }

        if (speed < this.topReverseSpeed) {
            this.speed = this.topReverseSpeed;
            this.displaySpeed();
            return;
        }

        this.speed = speed;
        this.displaySpeed();
    }
}

class car extends vehicle {
    constructor (
        make,
        color,
        speed,
        topSpeed,
        topReverseSpeed
    ) {
        super(
            make,
            color,
            4,
            speed,
            topSpeed,
            topReverseSpeed
        );
    }
        

    
}

class Bicycle extends vehicle {
    constructor(
        make,
        color,
        speed,
        topSpeed = 70
    ){
        super (make, color, 2, speed, topSpeed, 0);
    }

    decelerate () {
        if (--this.speed < 0) {
            this.speed = 0;
        }
        this.displaySpeed();
    }
}

class tricycle extends vehicle {
    constructor(
        make,
        color,
        speed,
        topSpeed = 70,
        topReverseSpeed = -10,
    ) {
        super(make, color, 3, speed, topSpeed, topReverseSpeed);
    }
}


let bike = new Bicycle ('pegas', 'red', 8, 20);
bike.setSpeed(-10);

let trike = new tricycle('tryke', 'red', 2, 9, -2);


let audi = new car (
    'audi',
    'blue',
    3,
    140,
    -50
);

audi.setSpeed(140);