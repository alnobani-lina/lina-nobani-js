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

console.warn('Folosind arrayul dateBuilder. Afiseaza luna curenta.');
console.log(dataBuilder[1]);

console.warn('Afiseaza propozitia: “Suntem in anul an.”.');
console.log(`we are in year ${dataBuilder[0]}`);

console.warn('Afiseaza propozitia: “Suntem in luna ll in anul aa.”.');
console.log(`we are in luna ${dataBuilder[1]()} in year ${dataBuilder[0]()}`);