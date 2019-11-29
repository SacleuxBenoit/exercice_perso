'use strict'

function entierAleatoire(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let entier = entierAleatoire(1, 2000);

let ask = "Entrez un nombre :";
let answer;
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

if ('${compteur} > 2 && <10') {
    alert(`nice one, vous avez gagné en ${compteur} coups ! `)
}
else if ('${compteur} > 11 && =< 20') {
    alert(`peut mieux faire, vous avez gagné en ${compteur} coups ! `)
}
else {
    alert(`Vous avez gagné en ${compteur} coups !  Félicitations !`);
}