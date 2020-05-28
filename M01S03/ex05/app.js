var person = {
    name: 'Dragos',
    surname: 'Iordache',
    age: 32,
    petOwner: false,
    skills: [
      'html',
      'css',
      'sass',
      'bootstrap',
      'npm',
      'git',
      'vscode',
      'JS'
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

  console.warn('mh');
  console.log('my name ' + person.name + ' ' + person.surname + ' si stiu ' + person['skills'][0] + ', ' + person['skills'][1] + ' si ' + person['skills'][3] + '.');

  console.warn('now i study JS');
  console.log('sunt ' + person['name'] + ' si acun invati JS.');

  console.warn('Am x prieteni: Larry, Steve si Carol.');
  console.log(
      'Am ' + person.friends.length + ' friends: ' + 
      person.friends[0].name + ', ' +
      person.friends[1].name + ' si ' +
      person.friends[2].name + '.'
      );

  console.warn('Ma numesc xxx yyy si vreau sa invat javascript.');
  console.log(`ma numesc ${person.name} ${person.surname} si vreau sa invati ${person.skills[7]}.`);
  console.log(`my name is ${person.name + ' ' + person.surname} and i want to study ${person.skills[person.skills.length - 1]}.`);

  console.warn('Sunt xxx si stiu HTML si CSS.');
  console.log(`sunt ${person.name} si stiu HTME si CSS.`);

  console.warn('Am x prieteni: Larryson, Stevenson si Carolson.');
  console.log(`Am ${person.friends.length} friends: ${person.friends[0].surname}, ${person.friends[1].surname} si  ${person.friends[2].surname}`);

  console.warn('Numele meu este xxx yyy, am zz ani si n prieteni.');
  console.log(`my name is ${person.name} ${person.surname}, am ${person.age} ani si ${person.friends.length} friends.`);