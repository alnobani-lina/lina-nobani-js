function calculateRectangleSurface (L, l, H) {
    let paramNumber = arguments.length;
    switch (paramNumber) {
      case 1:
        return L * L;
      case 2:
        return L * l;
      case 3:
        return L * l * H;
    }
  };
  
  console.log(calculateRectangleSurface(2));
  console.log(calculateRectangleSurface(2, 3));
  console.log(calculateRectangleSurface(2, 2, 3));

  let calculateCircleArea = (r) => {
    return Math.PI * Math.pow(r, 2);
  }
  
  console.log(calculateCircleArea(2));
  console.log(calculateCircleArea(20));
  console.log(calculateCircleArea(16));

  let pet = {
    getName: function () {
      return 'killua';
    },
    getSpecies: function () {
      return 'cat';
    },
    getAge: function () {
      return '1';
    }
  };
  
  console.log(`${pet.getName()} is ${pet.getSpecies()} and it is  ${pet.getAge()} year old.`);
  
  let petAge = pet.getAge();
  console.log(`my pet is ${petAge} years old.`);