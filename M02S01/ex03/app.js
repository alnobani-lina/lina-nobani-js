let Car = {
    make: '',
    color: '',
    wheels: 0,
    speed: 0,
    topSpeed: 140,
    topReverseSpeed: -70,
    displaySpeed: function () {
      console.log(`Viteza curenta este: ${this.speed}`);
    },
    accelerate: function () {
      this.setspeed(++this.speed);
    },
    decelerate: function () {
      this.speed--;
      this.displaySpeed();
    },

    setspeed: function (speed) {
        if (speed > this.topSpeed) {
            this.speed = this.topSpeed;
            this.displaySpeed();
            return;
        }

        if (speed > this.topReverseSpeed) {
            this.speed = this.topReverseSpeed;
            this.displaySpeed();
            return;
        }

        this.speed = speed;
        this.displaySpeed();
    }
  };
  
  let audi = Object.create(Car);
  audi.make = 'Audi';
  audi.color = 'black';
  audi.wheels = 4;
  audi.speed = 0;
  audi.topSpeed = 220;

  console.log(audi);


  audi.setspeed

