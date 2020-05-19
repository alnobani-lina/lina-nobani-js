var inputlength = document.getElementById('length')
inputwidth = document.getElementById('width')
elementresult = document.getElementById('result')
form = document.querySelector('form');

form.addEventListener('submit' , function(e) {
    var length = inputlength.value || 0,
    width = inputwidth.value || 0,
    result = 0;

    result = length * width;

    elementresult.innerText = result;

    e.preventDefault();
}, false); 