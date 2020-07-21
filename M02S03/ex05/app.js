let p = document.querySelector('.message');
let p2 = document.getElementById('2p');
let oldWidth = window.innerWidth;


//Using the resize event of the window object and the innerWidth and innerHeight properties, each time the window is resized, it displays in a paragraph the message: "The window now has an area of ​​xxx pixels.".
//Using the DOMContentLoaded event and a reusable function displays the window area at the time of loading the site.

let p3 = document.getElementById('totalSurface');
let p4 = document.getElementById('loadedSurface')
let height = window.innerHeight;
let width = window.innerWidth;



let calculateSurface = (L, x) => {
 return `The window now has an area of ${L * x} pixeli `;
}

window.addEventListener('resize', (event) => {
   let newWidth = window.innerWidth;
   let newHeIght = window.innerHeight
   p.innerText = newWidth;
 
   if (newWidth !== oldWidth) {
     p2.innerText = 'Fereastra si-a schimbat latimea.';
   } else {
     p2.innerText = '';
   }

   p3.innerText = calculateSurface(newHeIght, newWidth);
 
   oldWidth = newWidth;
   
 
 
 });