let paragraphElement = document.createElement('p'),
userAgentSring = navigator.userAgent;
message = 'nu stim';
let browserName = 'browser';
let userName = 'uu'

if (Array.isArray(userAgentSring.match(/chrome/ig))) {
    message = 'use chrome';
    browserName = 'chrome';
}

if (Array.isArray(userAgentSring.match(/firefox/ig))) {
    message = 'use firefox';
    browserName = 'firefox';
}


paragraphElement.innerText = message;

document.body.appendChild(paragraphElement);

setTimeout(() => {
   userName = prompt(`${browserName} ...`)
   let h1 = document.createElement('h1');
   h1.innerText = userName;

   document.body.appendChild(h1);
},3000);