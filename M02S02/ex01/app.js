// var p = document.createElement('p');
// p.innerText = 'Textul care trebuie sa apara in paragraf';
// p.id = 'myParagraph';
// p.classList.add('clase', 'de', 'css');

// document.body.appendChild(p);

let $p = $('<p>',{
    id: 'myParagraph',
    text: 'the text',
    class: 'class de css'
});

let $body = $('body');

$p.appendTo($body);

let $p2 = $('<p>', {
    id: 'message',
    text: 'The password must not be less than 5 characters.',

});

$body.append($p2);

setTimeout(() => {
    $p2.addClass('error');
}, 5000);

//next slide

$('#myParagraph').text('I have dynamically changed this paragraph.');

let $passwordSpan = jQuery('<span>',{
    id: 'example',
    text: 'myPassword'
}).appendTo($p2);

let wrappingDiv = jQuery('<div>', {
    class: 'container',
});

//$('.nimic').add($p).add($p2).wrap(wrappingDiv);

$body.append(wrappingDiv);
$p.appendTo(wrappingDiv);
$p2.appendTo(wrappingDiv);

$('<h2>message</h2>').prependTo(wrappingDiv);