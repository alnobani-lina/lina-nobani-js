function calculateSurface(L, l) {
    if (arguments.length === 2) {
      return L * l;
    } else {
      return L ** 2;
    }
  }
  
  console.log(`Patrat de 2 pe 2: ${calculateSurface(2)}`);
  console.log(`dreptunghi de 6 pe 7: ${calculateSurface(6, 7)}`);

  function calculateSquareSurface (L) {
    return calculateSurface(L);
  }

  console.log(`p de 4 pe 4:${calculateSquareSurface}.`);

  function calculateRectangleSurface (L, l) {
    return calculateSurface(L, l);
  }

  console.log(`: ${calculateRectangleSurface(8, 9)}`);