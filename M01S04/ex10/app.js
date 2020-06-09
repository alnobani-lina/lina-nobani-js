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
