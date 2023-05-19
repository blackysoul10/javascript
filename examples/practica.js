let button = document.getElementById("clicker");
button.addEventListener("click", handleClick);


class Animal {
    constructor(name) {
        this.name = name;
    }
    printName(){
        console.log(this.name);
    }
}



function miFunction(){
    return 3;
}

miFunction();


var miFunction = function(a, b){
    return a + b;
}


function sumar(a,b){
    var result = a + b;
    return result
}

//another class

edad = 18;

if(edad === 18){
    console.log("Tienes 18");
} else if(edad > 18){
    console.log("Tienes mas de 18 ");
}else {
    console.log("tienes menos de 18");
}


//another class

 var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2012,
    verDetalles: function(){
        console.log(`Auto: ${this.marca}, y su modelo: ${this.modelo} `);
    }
 };

//another class filter method

var articulos = [
    {nombre: "Laptop", costo: 20000},
    {nombre: "teclado", costo: 2000},
    {nombre: "mouse", costo: 600},
    {nombre: "auriculares", costo: 200}
];

//filter method
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <=  2000;
});

articulosFiltrados


//map method
var articulosFiltrados = articulos.map(function(articulo){
    return articulo.nombre;
});


//cambiar valores de un objeto a un array

let obj = {
    nombre: 'Miguel',
    apellido: 'Carreño',
    comidasFavs: ['Pollo Frito', 'Pasta']
};

function imprimirObjecto(obje){
    let arr = Object.keys(obje);
    for(let i=0; i <arr.length; i++){
        console.log(arr[i]);
    }
}


//ejemplo ejercicio con un solo IF 


let tiposDeSuscrip = {
    free: 'Suscripcion FREE!!',
    basic: 'Suscripcion BASIC!!',
    expert: 'Suscripcion EXPERT!!',
    expertduo: 'Suscripcion EXPERTDUO!!'

}

function encontrarTiposDeSus(suscrip){
    if(tiposDeSuscrip[suscrip]){
        console.log(tiposDeSuscrip[suscrip]);
        return;
    }
    console.warn('  ESCOGISTE MUY MAL!');
}
