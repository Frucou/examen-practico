"use strict";


// Nodos
const btn = document.querySelector(".btn");
const resultado = document.querySelector(".resultado");
const btn2 = document.querySelector(".btn2");
const fraseImprimir = document.querySelector(".frase");
const resultadoImprimir = document.querySelector(".frase-resultado");


// Variables
const numRandom = () =>{ 
    return Math.floor(Math.random() * (13 - 1) + 1);
}

const palos = () =>{ 
    return Math.floor(Math.random() * (5 - 1) + 1);
}

// Funciones
//ejercicio 2
const sacarCarta = () => {
    let numPalos = palos();
    // console.log(numPalos)
    switch(numPalos) {
        case 1: 
        resultado.innerHTML = "Número: "+ numRandom() + ` <p>Palos: Oros.</p>`;
        break;
        case 2: 
        resultado.innerHTML = "Número: "+ numRandom() + ` <p>Palos: Copas.</p>`;
        break;
        case 3: 
        resultado.innerHTML = "Número: "+ numRandom() + ` <p>Palos: Bastos.</p>`;
        break;
        case 4: 
        resultado.innerHTML = "Número: "+ numRandom() + ` <p>Palos: Espadas.</p>`;
        break;
    }
   
    
}

// Ejercicio4
const frase = () => {
    let guardarFrase = prompt("Introduce una frase");
    console.log(guardarFrase)
    let fraseArray = guardarFrase.split(' ')
    console.log(fraseArray)
    // resultadoImprimir.innerHTML = fraseArray.forEach()
    fraseArray.forEach(element => console.log(element))
    fraseImprimir.innerHTML = `<div>${fraseArray.join("<br>")}</div>`;
}



// Eventos
btn.addEventListener(
    "click",
    sacarCarta
);

btn2.addEventListener(
    "click",
    frase
);