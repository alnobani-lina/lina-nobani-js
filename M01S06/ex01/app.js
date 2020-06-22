let car = {
    make: 'Audi',
    color: 'black',
    wheels: 4,
    speed: 50,
    topSpeed: 160,
    topReverseSpeed: -50,
    isTrunkOpen: false,
    areLightsOn: false,
    accelerate: function () {
      this.speed++;
    },
    decelerate: function () {
      this.speed--;
    },
    stop: function () {
      this.speed = 0;
    },
    setSpeed: function (s) {
      this.speed = s;
      if (s >= this.topSpeed) {
        this.speed = this.topSpeed;
      }
      if (s <= this.topReverseSpeed) {
        this.speed = this.topReverseSpeed;
      }
    },
    openTrunk: function () {
      this.isTrunkOpen = true;
    },
    closeTrunk: function () {
      this.isTrunkOpen = false;
    },
    turnLightsOn: function () {
      this.areLightsOn = true;
    },
    turnLightsOff: function () {
      this.areLightsOn = false;
    },
    flashLights: function () {
      this.turnLightsOn();
  
      window.setTimeout(() => {
        this.turnLightsOff();
      }, 3000);
    }
  };
  
  console.log(`the car is ${car.make} and it was moving in ${car.speed} km/hour.`);
  
  console.warn('Decelereaza masina cu 5 unitati apoi afisaza propozitia: "Viteza noua este speed km/h".');
  for (let i = 0; i <= 4; i++) {
    car.decelerate();
  }
  
  console.log(`the new speed is ${car.speed} km/ohour.`);
  
  console.warn(`Add a method called stop () to make the speed 0 property, then display the speed.`);
  
  car.stop();
  console.log(`the speed is ${car.speed}`);
  
  car.setSpeed(180);
  console.log(car.speed);
  
  car.setSpeed(-85);
  console.log(car.speed);
  
  car.setSpeed(120);
  console.log(car.speed);