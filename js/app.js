"use strict";


// Nodos
const btn = document.querySelector(".btn");
const resultado = document.querySelector(".resultado");
const btn2 = document.querySelector(".btn2");
const fraseImprimir = document.querySelector(".frase");
const resultadoImprimir = document.querySelector(".frase-resultado");
// Ejercicio 8
const images = document.querySelectorAll("img");
// const salidaImagenes = document.querySelector(".imagenes")
const mensajeImg = document.querySelector(".mensaje-img");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const resultadoImg = document.querySelector(".resultado-img");
const btn3 = document.querySelector(".btn3")
// uso el atributo alt porque el src es un enlace sin la extensión final del archivo
const alt = img1.getAttribute("alt");


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
    console.log(guardarFrase);
    let fraseArray = guardarFrase.split(' ');
    console.log(fraseArray);
    // resultadoImprimir.innerHTML = fraseArray.forEach()
    fraseArray.forEach(element => console.log(element));
    fraseImprimir.innerHTML = `<div>${fraseArray.join("<br>")}</div>`;
}

//  Ejercicio 8
const nombreImagen = () => {
    // console.log(images)
    
    
    // const src = img2.src;
    // console.log(src)
    // console.log(alt)
    // console.log(img1)
    // const pregunta = prompt("Extensión de imagen: (predeterminado: jpg)");
    const pattern = /\.?jpe?g$/;
    if (pattern.test(alt)) {
        const partesSrc = alt.split("/")
        const ultimo = partesSrc.length-1
        alert(partesSrc[ultimo])
    }
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

mensajeImg.addEventListener(
    "click",
    nombreImagen
);

btn3.addEventListener(
    "click",
    () => {
        let jpges = [];
        console.log(images)
        resultadoImg.innerHTML = `<h2>Tengo ${images.lenght} imagenes</h2>`;
        console.log(images.length)
        for (let i = 0; i<images.length;i++){
            if (/\.jpe?g$/.test(images[i].alt)){
                let textoTroceado = images[i].alt.split("/");
                let ultimo = textoTroceado.length-1;
                let nombreFichero = textoTroceado[ultimo];
                jpges.push(nombreFichero);
            }
        }
        if (jpges.length>0) {
            resultadoImg.innerHTML += `${jpges.length} imágenes jpg que son:<br> ${jpges.join("<br>")}`;
        }
    }
);