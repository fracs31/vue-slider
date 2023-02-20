//Array di immagini
const images = [
    {
        image: "./img/01.webp", //immagine
        title: "Marvel's Spiderman Miles Morales", //titolo
        text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.", //testo
    }, {
        image: "./img/02.webp", //immagine
        title: "Ratchet & Clank: Rift Apart", //titolo
        text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.", //testo
    }, {
        image: "./img/03.webp", //immagine
        title: "Fortnite", //titolo
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", //testo
    }, {
        image: "./img/04.webp", //immagine
        title: "Stray", //titolo
        text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city", //testo
    }, {
        image: "./img/05.webp", //immagine
        title: "Marvel's Avengers", //titolo
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.", //testo
    }
];
const imgElement = document.getElementById("img"); //immagine del carosello nel DOM
const titleElement = document.getElementById("title"); //titolo dell'immagine nel DOM
const textElement = document.getElementById("text"); //testo dell'immagine nel DOM
const btnLeft = document.getElementById("btn-left"); //bottone per andare indietro con le immagini del carosello
const btnRight = document.getElementById("btn-right"); //bottone per andare avanti con le immagini del carosello
let index = 0; //indice
let time = 3000; //tempo di scorrimento delle immagini

console.log(images); //stampo l'array con le immagini del carosello
console.log("Indice di partenza: " + index); //stampa dell'indice di partenza

//Quando viene premuto il tasto per andare avanti con le immagini del carosello
btnRight.addEventListener("click", function() {
    //Se l'indice è minore della lunghezza dell'array di immagini
    if (index < (images.length - 1)) {
        console.log("Indice prima dell'incremento: " + index); //stampa dell'indice prima dell'incremento
        index++; //incremento l'indice
        console.log("Indice dopo l'incremento: " + index); //stampa dell'indice dopo l'incremento
        imgElement.src = images[index].image; //cambio l'immagine
        titleElement.innerHTML = images[index].title; //cambio il titolo
        textElement.innerHTML = images[index].text; //cambio il testo
    } else if (index == (images.length - 1)) { //altrimenti se l'indice è uguale alla lunghezza dell'array di immagini
        console.log("Indice prima dell'azzeramento: " + index); //stampa dell'indice prima dell'azzeramento
        index = 0; //azzero l'indice
        console.log("Indice dopo l'azzeramento: " + index); //stampa dell'indice dopo dell'azzeramento
        imgElement.src = images[index].image; //cambio l'immagine
        titleElement.innerHTML = images[index].title; //cambio il titolo
        textElement.innerHTML = images[index].text; //cambio il testo
    }
});

//Quando viene premuto il tasto per andare indietro con le immagini del carosello
btnLeft.addEventListener("click", function() {
    //Se l'indice è maggiore di 0
    if (index > 0) {
        console.log("Indice prima del decremento: " + index); //stampa dell'indice prima del decremento
        index--; //decremento l'indice
        console.log("Indice dopo il decremento: " + index); //stampa dell'indice dopo il decremento
        imgElement.src = images[index].image; //cambio l'immagine
        titleElement.innerHTML = images[index].title; //cambio il titolo
        textElement.innerHTML = images[index].text; //cambio il testo
    } else if (index == 0) { //altrimenti se l'indice è uguale a 0
        console.log("Indice prima di andare nell'ultima posizione: " + index); //stampa dell'indice prima di andare nell'ultima posizione dell'array di immagini
        index = images.length - 1; //assegno all'indice il valore della lunghezza dell'array di immagini meno 1
        console.log("Indice dopo essere andato nell'ultima posizione: " + index); //stampa dell'indice dopo essere andato nell'ultima posizione dell'array di immagini
        imgElement.src = images[index].image; //cambio l'immagine
        titleElement.innerHTML = images[index].title; //cambio il titolo
        textElement.innerHTML = images[index].text; //cambio il testo
    }
});

//Intervallo di tempo
setInterval(function() {
    //Se l'indice è minore della lunghezza dell'array di immagini
    if (index < (images.length - 1)) {
        console.log("Indice prima dell'incremento: " + index); //stampa dell'indice prima dell'incremento
        index++; //incremento l'indice
        console.log("Indice dopo l'incremento: " + index); //stampa dell'indice dopo l'incremento
        imgElement.src = images[index].image; //cambio l'immagine
        titleElement.innerHTML = images[index].title; //cambio il titolo
        textElement.innerHTML = images[index].text; //cambio il testo
    } else if (index == (images.length - 1)) { //altrimenti se l'indice è uguale alla lunghezza dell'array di immagini
        console.log("Indice prima dell'azzeramento: " + index); //stampa dell'indice prima dell'azzeramento
        index = 0; //azzero l'indice
        console.log("Indice dopo l'azzeramento: " + index); //stampa dell'indice dopo dell'azzeramento
        imgElement.src = images[index].image; //cambio l'immagine
        titleElement.innerHTML = images[index].title; //cambio il titolo
        textElement.innerHTML = images[index].text; //cambio il testo
    }
}, time);