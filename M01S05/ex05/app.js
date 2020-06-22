let person = {
    getName: function () {
        return 'lina nobani';
    },
    getAge: () => {
        return 21;
    }
};

//console.warn('Afiseaza primul nume al persoanei folosind metoda getName()');
//console.log(person.getName().split(' '));

//console.warn('Afiseaza diferenta de varsta dintre  persoana si varsta ta folosind metoda getAge().');
//console.log(`the difference is ${Math.abs(33 - person.getAge())}`);

//console.warn('Afiseaza ultimele doua cifre al anului de nastere al persoanei, folosind anul curent si metoda getAge(). (Exemplu: ‘87).');
//let currentYear = new Date().getFullYear();
//let birthYear = currentYear - person.getAge();
//birthYear = birthYear + '';
//console.log(birthYear.substring(2, 4));
//console.log(birthYear.slice(-2));

//console.warn('j');
//console.log(`my name is ${person.getName()} and im ${person.getAge()} year`);

console.warn('Display the full name of the person using the getName () method');
console.log(person.getName());

console.warn('Displays a persons age using the getAge () method');
console.log(person.getAge());

console.warn('Displays the persons year of birth, using the current year and the getName () method');

let currentYear = new Date().getFullYear();
let personAge = person.getAge();
console.log(currentYear - personAge);

console.warn('Display the sentence: "My name is xxx yyy I was born aa years ago in the year zzzz!"');
console.log(`my name is ${person.getName()}, i was born ${person.getAge()} years ago, in the year ${currentYear - personAge}.`);

