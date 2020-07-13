// var p = document.createElement('p');
// p.innerText = 'Textul care trebuie sa apara in paragraf';
// p.id = 'myParagraph';
// p.classList.add('clase', 'de', 'css');

// document.body.appendChild(p);

let $p = $('<p>', {
    id: 'myParagraph',
    text: 'Textul paragrafului',
    class: 'clase de css',
  });
  let $body = $('body');
  
  $p.appendTo($body);
  
  // Salveaza obiectul jQuery $('body') intr-o variabila numita $body si foloseste-o in metoda appendTo().
  // https://api.jquery.com/appendTo/
  // Creaza inca un paragraf cu idul message care sa contina textul: “Parola nu trebuie sa fie mai mica de 5 caractere.”.
  // Folosind metoda append a obiectului $body, adauga noul obiect in DOM.
  // https://api.jquery.com/append/
  // Dupa ce l-ai adaugat, foloseste dupa 5 secunde metoda addClass a noului obiect pentru a ii adauga clasa error.
  // https://api.jquery.com/addClass/
  
  let $p2 = $('<p>', {
    id: 'message',
    text: 'Parola nu trebuie sa fie mai mica de 5 caractere',
  });
  
  $body.append($p2);
  
  setTimeout(() => {
    $p2.addClass('error');
  }, 5000);
  
  // Selecteaza paragraful anterior (#myParagraph) si schimba textul sau in textul:
  // “Am schimbat dinamic acest paragraf.” Folosind metoda .text()
  // https://api.jquery.com/text/
  // Creeaza un element de tip span cu idul example si cu textul “ParolaMea”
  // si adauga-l la cel de-al doilea paragraf folosind metoda .appendTo()
  // Creeaza un element de tip div cu clasa container apoi imbraca cele doua paragrafe cu el folosind metoda .wrap()
  // https://api.jquery.com/wrap/
  // Creeaza un element de tip h2 cu textul “Mesaje” si adauga-l la
  // inceputul div-ului cu clasa container folosind metoda .prependTo()
  // https://api.jquery.com/prependTo/
  
  $('#myParagraph').text('Am schimbat dinamic acest paragraf.');
  
  let $passwordSpan = jQuery('<span>', {
    id: 'example',
    text: 'ParolaMea',
  }).appendTo($p2);
  
  let wrappingDiv = jQuery('<div>', {
    class: 'container',
  });
  
  // $('.nimic').add($p).add($p2).wrap(wrappingDiv);
  $body.append(wrappingDiv);
  $p.appendTo(wrappingDiv);
  $p2.appendTo(wrappingDiv);
  
  let msg = 'Mesaje';
  
  $(`<h2>${msg}</h2>`).prependTo(wrappingDiv);

  //Create a navigation class div and add it to the previous div using the .after () method.
  //Create an anchor element with the text First Link and the nav-link class and add it to the navigation class div.
  //Create an h2 element with the text "Navigation" and using the .before () method add it to the navigation class div. The before selector will need to be the anchor selector to function properly. Example: .navigation .nav-link.
  //Create a sup element with the text 1 and using the .prepend () method add it to the .nav-link anchor.

  let nav = jQuery('<div>', {
    class: 'navigation',
  });
  $('.container').after(nav);
  
  $('<a class="nav-link">first Link</a>').appendTo(nav);
  
  $('.navigation .nav-link').before('<h2>Navigatie</h2>');
  
  $('<sup>1</sup>').prependTo('.nav-link');

  //Create an h1 element with the text: "I'm learning jQuery" and using the .before () method add it above the .container div.

  $('.container').before('<h1>I am learning jQuery</h1>');

  //Add by any method a paragraph with the text "jQuery documentation can be found here." 
  //The word here will be an anchor that will open the jQuery documentation on a new page. The target and href attributes
  // can be set in the same way as the text or class attributes.

  let $p3 = $('<p>', {
    id: 'doc',
    text: 'jQuery documentation can be found ',
  });

  $body.append($p3);

  $(document).ready(function(){
      $p3.append('<a href="#">here.</a>')
  })