class Car {
    constructor(
      make,
      color,
      wheels,
      speed
    ) {
      this.make = make;
      this.color = color;
      this.wheels = wheels;
      this.speed = speed;
    }
  
    displaySpeed() {}

    accelerate(s) {
      if (s) {
        this.speed = this.speed + s;
      } else {
        this.speed++;
      }
  
      this.displaySpeed();
      
      return this;
    }
  
    decelerate(s) {
      if (s) {
        this.speed = this.speed - s;
      } else {
        this.speed--;
      }
  
      this.displaySpeed();
  
      return this;
    }
 
    setSpeed (newSpeed) {
      this.speed = newSpeed;
  
      this.displaySpeed();
  
      return this;
    }
    
  }
  
  
  let audi = new Car('Audi', 'black', 4, 50);
  
  audi.accelerate().accelerate().accelerate().accelerate().accelerate().decelerate().decelerate().decelerate();
  
  console.log(audi.speed);
  
  let p = document.createElement('p');
  
  p.innerText = `Masina se deplasa cu ${audi.speed} km/h.`;
  
  document.body.appendChild(p);
  
  
  audi.accelerate(12).decelerate(3).decelerate(4);
  
 
  
  let p2 = document.createElement('p');
  
  p2.innerText = `Noua viteza este ${audi.speed} km/h.`;
  
  document.body.appendChild(p2);
  
  
  audi.setSpeed(4).accelerate();
  
  
  let p3 = document.createElement('p');
  
  p3.innerText = `Ultima ultima viteza este ${audi.speed} km/h.`;
  
  document.body.appendChild(p3);