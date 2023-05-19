const myHeading = document.querySelector("h1");
myHeading.textContent = "PRACTICA JS PLATZI!!";

//const h2Heading = document.querySelector('h2');
//h2Heading.textContent = 'HOLAAA SOY H2';

// h1 { color: red}
// .parrafo {///}
// #pid {..}

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

//console.log({
//    h1,
//    p,
//    parrafito,
//    pid,
//    input
//});
//
//console.log(h1);
//convierte a HTML el textto de la variable
h1.innerHTML = 'SUPER PRACTICA JS PLATZI'

//agarra un atributo de una variable
//console.log('Este es el atributte: '+h1.getAttribute('marca')); 
// cambia el valor de un atributo
//h1.setAttribute('marca', 'Pepsi Cola');
//console.log(h1.getAttribute('marca'));

//agregar una clase
//h1.classList.add('Hola');

//classList.contains
//classList.toggle

//agregar imagenes 

//const img = document.createElement('img');
//img.setAttribute('src', 'https://static.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png/revision/latest/scale-to-width-down/1200?cb=20170716092103');
//
//
//console.log(img);
//
//// agregar el elemento despues 
//pid.append(img);


const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const resultF = document.querySelector('#result');
const form = document.querySelector('#submit');



function sumarInputsValues(event){
    const iResults = (parseInt(input1.value) + parseInt(input2.value));
    resultF.innerText = 'Resultado: ' + iResults;
    event.preventDefault();
}

form.addEventListener('submit', sumarInputsValues);

