'use strict'

function entierAleatoire(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let entier = entierAleatoire(1, 2000);
let ask = "Entrez un nombre :";
let compteur = 0;



do {
    answer = prompt(ask);
    compteur++;
    if (answer < entier) {
        alert("Votre nombres est inférieur");
    }

    else {
        alert("Votre nombre est supérieur");
    }

} while (answer != entier)