let calculateRectangleArea = function (L, l) {
    let surface = L * l;

    return surface;
};

//console.warn('Knowing that a rectangular field of hops produces 25kg / m2. What is the difference in production between a plot of 100m by 250m and one of 350m by 200m?');
//let firstSurface = calculateRectangleArea(100, 250);
//let secondesurface = calculateRectangleArea(350, 200);
//const barleyYield = 25;
//let firstFieldYield = firstSurface * barleyYield;
//let secondeFieldYield = secondesurface * barleyYield;

//console.log(`the dif is: ${secondeFieldYield - firstFieldYield}`);

//console.warn('Knowing that from 10kg of hops they produce 2.5l of beer, how many liters of beer will a 400m by 370m plot produce?');
//const barleyQty = 10;
//const beerYield = 2.5;
//let thirdsurface = calculateRectangleArea(400, 370);
//let thirdfieldyield = thirdsurface * barleyYield;
//let finalBeer = thirdfieldyield / barleyQty * beerYield;

//console.log(`its: ${finalBeer}`);

console.warn('Knowing that a rectangular field of wheat produces 32kg / m2 of flour. Find out and display how many kilograms of bread a field of 300 by 200 meters produces, knowing that 2.5 kg of bread come out of a kilogram of flour.');

const breadYield = 2.5;
const flourYield = 32;
let fieldSurface = calculateRectangleArea(300, 200);

let allTheBread= breadYield * flourYield * fieldSurface;

console.log(`${allTheBread} of bread.`);


console.warn('But two fields of 150 on 200 and 500 on 300 in total?');

let firstFieldSurface = calculateRectangleArea(150, 200)
let secondFieldSurface = calculateRectangleArea(500, 300);

totalBread = (firstFieldSurface + secondFieldSurface) * flourYield * breadYield;

console.log(`${totalBread} kg of bread`);
  
