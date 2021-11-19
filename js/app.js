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
const sacarCarta = () => {
    let numPalos = palos();
    // console.log(numPalos)
    switch(numPalos) {
        case 1: 
        return resultado.innerHTML = "Número: "+ numRandom() + ` <p>Palos: Oros.</p>`;
        
        case 2: 
        return resultado.innerHTML = "Número: "+ numRandom() + ` <p>Palos: Copas.</p>`;
        
        case 3: 
        return resultado.innerHTML = "Número: "+ numRandom() + ` <p>Palos: Bastos.</p>`;
        
        case 4: 
        return resultado.innerHTML = "Número: "+ numRandom() + ` <p>Palos: Espadas.</p>`;
       

    }
   
    
}

const frase = () => {
    let guardarFrase = prompt("");
    let fraseArray = guardarFrase.split()
    console.log(fraseArray)
    // resultadoImprimir.innerHTML = fraseArray.forEach()
    fraseArray.forEach(element => console.log(element))
    fraseImprimir.innerHTML = guardarFrase;
    fraseImprimir.textContent
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