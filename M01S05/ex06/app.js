let person = {
    getName: () => {
      return 'lina nobani';
    },
    getAge: () => {
      return 21;
    }
  };
  
  let accessor = (methodSuffix) => {
    let methodName = `get${methodSuffix}`;
  
    return person[methodName]();
  };
  
  console.log(accessor('Name'));
  
  //console.warn('Folosind accesorul salveaza numele mic al persoanei intr-o variabila si foloseste-l in propoztia: “Eu sunt xxx.”');
  //let personName = accessor('Name').split(' ')[0];
  //console.log(`Eu sunt ${personName}`);
  
  //console.warn('Afiseaza diferenta de varsta dintre tine si persoana.');
 //console.log(Math.abs(33 - accessor('Age')));
  
  //console.warn('Afiseaza anul de nastere al persoanei folosind anul curent.');
  //let currentYear = new Date().getFullYear();
  //console.log(currentYear - accessor('Age'));
  
  //console.warn('Afiseaza propozitia “Ma numesc xxx si am yy ani si m-am nascut acum aa ani.”');
  //let personAge = accessor('Age');
  //console.log(`Ma numesc ${accessor('Name')} si am ${personAge} ani si m-am nascut acum ${personAge} ani.`);

  console.warn('Using the accessory displays the persons name.');
  console.log(accessor('Name'));

  console.warn('Displays the persons age.');
  console.log(accessor('Age'));

  console.warn('Displays the persons year of birth using the current year.');
  currentYear = new Date().getFullYear();
  console.log(`${currentYear - accessor('Age')}`);

  console.warn('Display the sentence "My name is xxx yyy and Im aa years old!"');
  console.log(`my name is ${accessor('Name')} and i am ${accessor('Age')} years old.`);