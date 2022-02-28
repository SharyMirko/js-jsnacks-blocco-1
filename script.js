// SNACK 1.9

/* let n = 0;
let somma1 = 0;
while (n <= 10) {
    somma1 += n;
    n++
}
let media1 = somma1 / 10;
console.log(somma1)
console.log(media1)


let somma = 0;

for (i = 0; i <= 10; i++) {
    somma += i;
}
let media = somma / 10;
console.log(somma)
console.log(media) */


// SNACK 2.1
/* let stamp = document.querySelector('.snack2');
let snack2Somma = 0;
let contatore = 0; */
// ciclo for
/* for (i = 0; i < 5; i++) {
    let numb = parseInt(prompt('dammi un numero'));
    snack2Somma += numb;
} */

// ciclo while
/* while (contatore < 5) {
    let numb = parseInt(prompt('dammi un numero'));
    snack2Somma += numb;
    contatore++
}


stamp.innerHTML = snack2Somma */


// SNACK 2.2
let stamp_snack2_2 = document.querySelector('.snack2-2');
let numberSnack2_2 = document.querySelector('#numero').value;
let btnCheck = document.getElementById('check');

btnCheck.addEventListener('click', function(){
    if (numberSnack2_2 % 2 == 0) {
        stamp_snack2_2.innerHTML = 'bravo! hai inserito un numero pari e cioè il numero' + numberSnack2_2
    } else {
        numberSnack2_2++
        stamp_snack2_2.innerHTML = 'Hai inserito un numero dispari quindi lo aumento di 1 e diventa pari! Guarda: ' + numberSnack2_2
    }
})




/* Snack 2.3 
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati. */

const arrNomi = [
    'Fabio',
    'Marco',
    'Paolo',
    'Letizia',
    'Lucilla',
    'Herbert',
    'Pippo',
    'Wender',
    'Jonny'
];
const arrCognomi = [
    'Alisei',
    'Palmieri',
    'Puccioni',
    'Mazzoli',
    'Nocito Nois',
    'Mele',
    'Voldemort',
    'Potter',
    'Watson'
];
let invitati = document.querySelector('.invitati');

invitati.innerHTML = arrNomi[Math.floor(Math.random()*arrNomi.length)] + ' ' + arrCognomi[Math.floor(Math.random()*arrCognomi.length)] + `<br>` + arrNomi[Math.floor(Math.random()*arrNomi.length)] + ' ' + arrCognomi[Math.floor(Math.random()*arrCognomi.length)] + `<br>` + arrNomi[Math.floor(Math.random()*arrNomi.length)] + ' ' + arrCognomi[Math.floor(Math.random()*arrCognomi.length)] 




