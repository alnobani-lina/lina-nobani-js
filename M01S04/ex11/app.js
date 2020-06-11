var person = {
    name: 'Dragos',
    surname: 'Iordache',
    age: 32,
    petOwner: false,
    skills: {
      html: true,
      css: true,
      javaScript: false
    },
    friends: {
      larry: {
        name: 'Larry',
        surname: 'Larryson',
        age: 30
      },
      steven: {
        name: 'Steven',
        surname: 'Stevenson',
        age: 31
      },
      carol: {
        name: 'Carol',
        surname: 'Carolson',
        age: 29
      }
    }
  };
  
  console.warn('Folosind Object.keys() pe proprietatea skills, afiseaza abilitatile persoanei daca acestea sunt true.');
  var message = '';
  
  Object.keys(person.skills).forEach(function (skillName) {
    if (person.skills[skillName] === true) {
      message += `${skillName} `;
    }
  });
  
  console.log(message.trim());
  
  console.warn('Prin aceeasi metoda, afiseaza o lista inversata cu numele complet al prietenilor.');
  message = '';
  var friendsKeysNames = Object.keys(person.friends);
  friendsKeysNames.reverse();
  
  friendsKeysNames.forEach(function (friendKey, i, friends) {
    var friend = person.friends[friendKey];
    var punctuation = ', ';
  
    message += `${friend.name} ${friend.surname}`;
  
    if (i === friends.length - 1) {
      punctuation = '.';
    }
  
    message += punctuation;
  });
  
  console.log(message);
  
  console.warn('Afiseaza propozitia: “Prietenii mei sunt Larry Steven si Carol.” folosind Object.keys()');
  friendsKeysNames = Object.keys(person.friends);
  message = 'my friends are:'

  friendsKeysNames.forEach(function(friendKey, i, friends) {
      var friendsLenght = friends.length;
      var friend = person.friends[friendKey];
      var separator = ', ';

      message += friends.name;

      if (i === friendsLenght - 1) {
          separator = '.'
      }

      if (i === friendsLenght - 2) {
          separator = ' and ';
      }

      message += separator
  });

  console.log(message);

  console.warn('Folosind bucla, afiseaza mai multe propozitii (cate una per console.log()) care sa afiseze: “Larry este mai mare|mic decat Dragos.” etc…');
  friendsKeysNames = Object.keys(person.friends);

  friendsKeysNames.forEach(function(friendKey) {
      var friend = person.friends[friendKey];
      var message = '';

      if (person.age  - friend.age > 0) {
          message = `${friend.name} is younger than ${person.name}`;
      } else if (person.age - friend.age < 0) {
          message = `${friend.name} is older than ${person.name}`;
      } else {
          message = `${friend.name} and ${person.name} au...`
      }

      console.log(message);
  });

  console.warn('Folosind Object.keys() pe proprietatea skills, afiseaza abilitatile persoanei.');
  Object.keys(person.skills).forEach(function(skillName, i, skills) {
      console.log(skillName);
  })

  console.warn('Prin aceeasi metoda, afiseaza o lista cu numele complet al prietenilor.');
  Object.keys(person.friends).forEach(function(friendKey) {
      var friend = person.friends[friendKey];
      console.log(`${friend.name} ${friend.surname}`);
  });

  console.warn()