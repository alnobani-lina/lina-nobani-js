let Car = {
  make: '',
  color: '',
  wheels: 0,
  speed: 0,
  topSpeed: 140,
  topReverseSpeed: -70,

  // add areLightsOn.
  areLightsOn: false,

  displaySpeed: function () {
    console.log(`Viteza curenta este: ${this.speed}`);
  },
  accelerate: function () {
    this.setSpeed(++this.speed);
  },
  decelerate: function () {
    this.setSpeed(--this.speed);
  },
  setSpeed: function (speed) {
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
  },
  // add turnLightsOn() and turnLightsOff(). 

  turnLightsOn: function () {
   this.areLightsOn = true;
  },

  turnLightsOff: function () {
    this.areLightsOn = false;
  },

  // add flashLights.
  
  flashLights: function () {
    this.turnLightsOn();

    window.setTimeout(() => {
      this.turnLightsOff();
    }, 3000);
  }
};


let audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;
audi.topSpeed = 220;

console.log(audi);

// Adauga metoda setSpeed(), proprietatile topSpeed si topReverseSpeed si implementeaza protectiile deja cunoscute.
// Seteaza topSpeed la 140 apoi ruleaza metoda setSpeed() pentru a face viteza curenta 140.
// Ruleaza metoda accelerate().

audi.setSpeed(220);
audi.accelerate();