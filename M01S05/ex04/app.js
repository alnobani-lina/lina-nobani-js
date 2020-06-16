let calculateRectangularArea = (L, l) => {
    return L * l;
};

console.warn ('Calculeaza suprafata de tapet necesara pentru o camera de 6 pe 4 m cu tavan inalt de 2.5m, stiind ca exista o usa de 2.2 pe 1.5 si o suprafata de ferestre de 2 pe 1.5.');

let totalWallSurface = 0;
let lomgWallSurface = calculateRectangularArea(6, 2.5);
let shortWallSurface = calculateRectangularArea(4, 2.5);
let doorSurface = calculateRectangularArea(2.2, 1.5);
let windowSurface = calculateRectangularArea(2, 1.5);

totalWallSirface = 2 * (lomgWallSurface + shortWallSurface);

console.log(`este: ${totalWallSirface - doorSurface - windowSurface}`);


console.warn('Creaza o functie wrapper numita calculateSquareArea() pentru calculateRectangleArea() care sa primeasca ca parametru latura unui patrat si sa calculeze suprafata ');

let calculateSquareArea = (l) => {
    let squareSurface = calculateRectangularArea(1, 1);

    return squareSurface;
};

console.log(calculateSquareArea(2));