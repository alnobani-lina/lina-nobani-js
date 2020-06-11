let calaulateRectangleArea = function (L, l) {
    let surface = L * l;

    return surface;
};

console.warn('Knowing that a rectangular field of hops produces 25kg / m2. What is the difference in production between a plot of 100m by 250m and one of 350m by 200m?');
let firstSurface = calaulateRectangleArea(100, 250);
let secondesurface = calaulateRectangleArea(350, 200);
const barleyYield = 25;
let firstFieldYield = firstSurface * barleyYield;
let secondeFieldYield = secondesurface * barleyYield;

console.log(`the dif is: ${secondeFieldYield - firstFieldYield}`);

console.warn('Knowing that from 10kg of hops they produce 2.5l of beer, how many liters of beer will a 400m by 370m plot produce?');
const barleyQty = 10;
const beerYield = 2.5;
let thirdsurface = calaulateRectangleArea(400, 370);
let thirdfieldyield = thirdsurface * barleyYield;
let finalBeer = thirdfieldyield / barleyQty * beerYield;

console.log(`its: ${finalBeer}`);
  
