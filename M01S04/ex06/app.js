var person = {
    name: 'Dragos',
    surname: 'Iordache',
    age: 32,
    petOwner: false,
    skills: [
      'html',
      'javascript',
      'css',
      'c++',
      'node.js',
      'jquery'
    ],
    friends: [
      {
        name: 'Larry',
        surname: 'Larryson',
        age: 30
      },
      {
        name: 'Steven',
        surname: 'Stevenson',
        age: 31
      },
      {
        name: 'Carol',
        surname: 'Carolson',
        age: 29
      }
    ]
  };

  console.warn('Using the person object and a forum, display in the console the skills on the even positions of the array.');
  var message = '';
  var i = 0;

  for (i = 0; i < person.skills.length; i++) {
    if (i % 2 === 0) {
      message = message + person.skills[i] + ' ';
    }
  }

  console.log(message.trim());

  console.warn('Similarly, displays skills that do NOT begin with j.');
  message = '';

  for (i = 0; i < person.skills.length; i++) {
    if (person.skills[i].includes('j') === false) {
      message = message + `${person.skills[i]} `;
    }
  }
  
  console.log(message.trim());

  console.warn('Using a forum displays the sentence: "My friends are called xxx yyy, xxx yyy, xxx yyy."');
  message = 'my friends names are: ';

for (i = 0; i < person.friends.length; i++) {
  var friendName = person.friends[i].name;
  var friendSurname = person.friends[i].surname;
  message = message + `${friendName} ${friendSurname}`;

  if (i === person.friends.length - 1) {
    message += '.';
  } else {
    message += ', ';
  }
}

console.log(message);

console.warn('Using a forum, displays the total number of years that people in the friends array have, only if the age is greater than or equal to 30 years.');
var ageTotal = 0;

for (i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  if (friend.age >= 30) {
    ageTotal += friend.age;
  }
}

console.log(ageTotal);

console.warn('Folosind un for, afiseaza suma anilor de nastere a persoanelor.');
var yearsTotal = 0;
var currentYear = new Date(Date.now()).getFullYear();

for (i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var friendBirthYear = currentYear - friend.age;

  yearsTotal += friendBirthYear;
}

console.log(yearsTotal);


  

