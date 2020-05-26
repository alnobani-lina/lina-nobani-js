var lina ={
    name: 'lina',
    surname: 'nob',
    friends: {}
};

var carol ={
    name: 'carol',
    surname: 'car',
    friends: {}
};

var andra ={
    name: 'andra',
    surname: 'andd',
    friends: {}
};

var larry ={
    name: 'larry',
    surname: 'larrr',
    friends: {}
};

var steve ={
    name: 'steve',
    surname: 'stee',
    friends: {}
};

lina.friends.larry = larry;
lina.friends.steve = steve;
lina.friends.andra = andra;

larry.friends.lina = lina;
steve.friends.lina = lina;
andra.friends.lina = lina;

larry.friends.steve = steve;
steve.friends.larry = larry;

larry.friends.andra = andra;
andra.friends.larry = larry;

carol.friends.andra = andra;
andra.friends.carol = carol;

delete lina.friends.larry;
delete larry.friends.lina;

console.warn('s');
console.log(larry.friends.steve.friends.lina + 
' ' +
larry.friends.steve.friends.lina.surname);

console.warn('ss');
console.log(lina.friends.andra.friends.larry.name + ' ' + lina.friends.andra.friends.larry.surname);

console.warn('f');
console.log(carol.friends.andra.friends.lina.name + ' ' + carol.friends.andra.friends.lina.surname);


console.warn('d');
console.log(andra.friends.lina.name.lenght + andra.friends.lina.surname.lenght);
console.log((andra.friends.lina.name + andra.friends.lina.surname).length);

