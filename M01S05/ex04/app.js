let calculateRectangleArea = (L, l) => {
    return L * l;
  };
  
  //console.warn('Calculate the wallpaper area required for a 6 by 4 m room with a 2.5 m high ceiling, knowing that there is a 2.2 by 1.5 door and a 2 by 1.5 window area.');
  
  //let totalWallSurface = 0;
  //let longWallSurface = calculateRectangleArea(6, 2.5);
  //let shortWallSurface = calculateRectangleArea(4, 2.5);
  //let doorSurface = calculateRectangleArea(2.2, 1.5);
  //let windowSurface = calculateRectangleArea(2, 1.5);
  
  //totalWallSurface = 2 * (longWallSurface + shortWallSurface);
  
  //console.log(`Suprafata necesara este: ${totalWallSurface - doorSurface - windowSurface}`);
  
  //console.warn('Creaza o functie wrapper numita calculateSquareArea() pentru calculateRectangleArea() care sa primeasca ca parametru latura unui patrat si sa calculeze suprafata acestuia. O functie wrapper este o functie care “imbraca” o functie existenta pentru a-i aduce imbunatatiri, extra cod sau pentru a-i limita in mod intentionat capacitatile.');
  
  //let calculateSquareArea = (l) => {
   //let squareSurface = calculateRectangleArea(l, l);
  
    //return squareSurface;
  //};
  
  //console.log(calculateSquareArea(2));

  console.warn('Calculate the wallpaper area required for a 12 by 9 m room with a 2.5 m high ceiling, knowing that there is a 3 by 2 door and a 3 by 2 window area.');

  let doorSurface1 = calculateRectangleArea(3, 2);
  let windowSurface1 = calculateRectangleArea(3, 2);
  let lengthWallSurface1 = calculateRectangleArea(12, 2.5);
  let widthWallSurface1 = calculateRectangleArea(9, 2.5);
  let totalWallSurface1 = 2 * (lengthWallSurface1 + widthWallSurface1);
  let wallpaperSurface1 = totalWallSurface1 - doorSurface1 - windowSurface1;

  console.log(`Suprafata de tepet necesara este de ${wallpaperSurface1} m patrati.`);

  console.warn('Creates a wrapper function for calculateRectangleArea () that receives 4 parameters: the width and length of an initial rectangle, then the width and length of another rectangle. The function will be called aggregatesSurfaceArea ().');
  let aggregateSurfaceArea = (L, l, L2, l2) => {
  let firstRectangleArea = calculateRectangleArea(L, l);
  let secondRectangleArea = calculateRectangleArea(L2, l2);
  let totalSquareSurface = firstRectangleArea + secondRectangleArea;
  return totalSquareSurface;
  }

  console.warn('Using this new function calculate the total area of ​​two rectangles of 48 by 92 and 51 by 102');
  console.log(aggregateSurfaceArea(48, 92, 51, 102));
