"use strict";


// Nodos
const btn = document.querySelector(".btn")
const resultado = document.querySelector(".resultado")


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
    console.log(numPalos)
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



// Eventos
btn.addEventListener(
    "click",
    sacarCarta
);