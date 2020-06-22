let dataBuilder = [
    () => {
        return '2020';
    },
    () => {
        return 'iunie'
    },
    () => {
        return '16'
    }
];

dataBuilder[3] = () => {
    return 'marti'
};

//console.warn('Folosind arrayul dateBuilder. Afiseaza luna curenta.');
//console.log(dataBuilder[1]);

//console.warn('Afiseaza propozitia: “Suntem in anul an.”.');
//console.log(`we are in year ${dataBuilder[0]}`);

//console.warn('Afiseaza propozitia: “Suntem in luna ll in anul aa.”.');
//console.log(`we are in luna ${dataBuilder[1]()} in year ${dataBuilder[0]()}`);

console.warn('Using the dataBuilder array. Displays the current year.');
console.log(dataBuilder[0]());

console.warn('Displays the sentence: "We are in the month of the year"');
console.log(`we are in ${dataBuilder[1]()} ${dataBuilder[0]()}`);

console.warn('Display the sentence: "Today is day, date"');
console.log(`today is ${dataBuilder[2]()} ${dataBuilder[1]()}`);

console.warn('Displays the sentence: "The current date is day month year".');
console.log(`the current date is: ${dataBuilder[2]()} ${dataBuilder[1]()} ${dataBuilder[0]()}`);