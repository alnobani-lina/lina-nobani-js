$('<p>', {
    class: 'msg',
    text: 'Acesta este un mesaj de eroare!',
  })
    .appendTo($('body'))
    .addClass('error')
    .prepend();
  
  let errorNumber = 1;
  let supElement = $(`<sup>${errorNumber}</sup>`).prependTo('.error');
  
  // $('<p class="err">Documentatia jQuery se afla <span>aici</span>.</p>').appendTo(
  //   $('body'),
  // );
  
  // $('p span')
  //   .empty()
  //   .replaceWith(
  //     $('<a>', {
  //       href: '//google.com',
  //       text: 'aici',
  //     }),
  //   );

  $('<p>', {
    class: 'msg',
    text: 'Acesta este un mesaj de eroare!',
  })
    .appendTo($('body'))
    .addClass('error')
    .prepend($(`<sup>1</sup>`));