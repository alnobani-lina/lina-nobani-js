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

  console.warn('Using the person and forEach object, displays skills from odd positions in the array');
  var message = '';

  person.skills.forEach(function (skill, i) {
      if (i % 2 !== 0) {
        message += skill + ' ';
      }
  });

  console.log(message.trim());

  console.warn('Similarly, displays skills that contain the letter a');
  message = '';

  person.skills.forEach(function(skill) {
    if (skill.includes('a')) {
        message += `${skill}`;
    }
  });

  console.log(message.trim());

  console.warn('Using forEach displays the sentence: "My friends are called xxx yyy, xxx yyy and xxx yyy.');
  message = 'my friends names are';

  person.friends.forEach(function(friend, i, friends) {
    var punctuation = ', ';
    var friendsLenght = friends.lenght;

    message += `${friend.name} ${friend.surname}`;

    if (i === friends.lenght - 2) {
        punctuation = 'and ';
    }

    if(i === friends.lenght - 1) {
        punctuation = '.';
    }
    message += punctuation;
  });

  console.log(message);

  console.warn('Using forEach, displays the total number of years that people in the friends array have, only if they are older than 30 inclusive.');
  var totalAge = 0;

  person.friends.forEach(function (friend) {
    if (friend.age >= 30) {
        totalAge += friend.age;
    }
  });

  console.log(totalAge);

  console.warn('Using forEach, displays the sum of the birth years of odd-numbered people.');
  var totalYears = 0;

  person.friends.forEach(function(friend){
      var friendAge = friend.age;
      var birthYear = (new Date(Date.now()).getFullYear()) - friendAge;

      if (friendAge % 2 !== 0) {
        totalYears += birthYear;
      }
  });

  console.log(totalYears);

  console.warn('Displays the age difference between the person and friends in the friends array if it is greater than or equal to 2 years.');
  
  person.friends.forEach(function(friend) {
      var ageDiff = person.age - friend.age;

      if (ageDiff >= 2) {
          console.log(ageDiff);
      }
  });

  console.warn('Display the phrase: "There is a difference of xx years between Dragos and Larry. Between Dragos and Steven ..."');
  message = '';

  person.friends.forEach(function(friend) {
      var ageDiff = person.age - friend.age;

      message += `intre ${person.name} si ${friend.name} este o diferenta de ${ageDiff} ani`;
  });

  console.log(message.trim);
