const myHeading = document.querySelector("h1");
myHeading.textContent = "PRACTICA JS PLATZI!!";

const h2Heading = document.querySelector('h2');
h2Heading.textContent = 'HOLAAA SOY H2';

// h1 { color: red}
// .parrafo {///}
// #pid {..}

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

console.log(h1);
//convierte a HTML el textto de la variable
h1.innerHTML = 'SUPER PRACTICA JS PLATZI'

//agarra un atributo de una variable
console.log('Este es el atributte: '+h1.getAttribute('marca'));