/****************************
 ** SNACK 25 FEBBRAIO 2022 **
 ****************************/ 

// Snack 1
let stampa_numero = document.querySelector('.snack1');
let number1 = document.querySelector('#number1Snack1');
let number2 = document.querySelector('#number2Snack1');
let btnNum = document.querySelector('.minmax');

btnNum.addEventListener('click', function(){
    number1Value = number1.value;
    number2Value = number2.value;
    if (number1Value > number2Value) {
        stampa_numero.innerHTML = 'il numero maggiore è ' + number1Value
    } else if (number1Value < number2Value) {
        stampa_numero.innerHTML = 'il numero maggiore è ' + number2Value
    } else {
        stampa_numero.innerHTML = 'hai inserito due numeri dello stesso valore!'
    }
    number1.value = '';
    number2.value = '';
})

// SNACK 1.2
let stampaNomi = document.querySelector('.nomiUniti');
let btnNomi = document.querySelector('.namebtn');

btnNomi.addEventListener('click', function(){
    let nome1 = document.querySelector('#nome1').value;
    let nome2 = document.querySelector('#nome2').value;
    if (nome1.length < nome2.length) {
        stampaNomi.innerHTML = nome1 + ' ' + nome2
    } else {
        stampaNomi.innerHTML = nome2 + ' ' + nome1
    }
    document.querySelector('#nome1').value = '';
    document.querySelector('#nome2').value = '';
})

// Snack 1.3
let btnSnack3 = document.querySelector('.snack1-3');
let stamp_snack1_3 = document.querySelector('.stamp-snack1-3');
let sommaSnack1_3 = 0

btnSnack3.addEventListener('click', function(){
    for (let contatoreSnack1_3 = 0; contatoreSnack1_3 < 10; contatoreSnack1_3++) {
        let gimmeNumb = parseInt(prompt('dammi un numero'));
        sommaSnack1_3 += gimmeNumb
    }
    stamp_snack1_3.innerHTML = 'La somma dei 10 numeri che mi hai dato è ' + sommaSnack1_3
})


// Snack 1.4
let stamp_snack1_4 = document.querySelector('.stamp-snack-4');
let btnInvito = document.querySelector('.checkInvito');
let nomeInvito = document.querySelector('#nomeInvitato');
const arrInvitati = [
    'Fabio',
    'Marco',
    'Paolo',
    'Letizia',
    'Lucilla',
    'Herbert',
    'Pippo',
    'Wender',
    'Jonny',
];

btnInvito.addEventListener('click', function(){
    let nomeInvitoValue = nomeInvito.value;
    let nomeToCapital = nomeInvitoValue.charAt(0).toUpperCase() + nomeInvitoValue.slice(1);
    if (arrInvitati.includes(nomeToCapital)) {
        stamp_snack1_4.innerHTML = 'WOW! Sei invitato!'
    } else {
        stamp_snack1_4.innerHTML = 'Non sei invitato! Sfigato!'
    }
    nomeInvito.value = '';
})


// Snack 1.5
let arrNumbSnack5 = [];
let btnSnack5 = document.querySelector('.snack-1-5');

btnSnack5.addEventListener('click', function(){
    for (let contatoreSnack1_5 = 0; contatoreSnack1_5 < 6; contatoreSnack1_5++) {
        let numbSnack5 = parseInt(prompt('dammi un numero'));
        if (numbSnack5 % 2 == 1) {
            arrNumbSnack5.push(numbSnack5);
        }
    }
    console.log('array numeri dispari ' + arrNumbSnack5);
})

// Snack 1.6

/*calcolo somma 4 numeri */

let stamp_snack1_6 = document.querySelector('.stamp-snack-1-6');
let btnQuattroCifre = document.querySelector('.quattrocifre');
let numberChecked
let sommaSnack1_6 
btnQuattroCifre.addEventListener('click', function(){
    let numbFor = prompt('dammi un numero di 4 cifre');
    if (numbFor.length < 4) {
        let numbFor = prompt('non fare il furbo ho detto 4 cifre');
        numberChecked = numbFor;
    } else if (numbFor.length > 4) {
        let numbFor = prompt('non fare il furbo ho detto 4 cifre');
        numberChecked = numbFor;
    } else {
        numberChecked = numbFor;
    }
    sommaSnack1_6 = parseInt(numberChecked[0]) + parseInt(numberChecked[1]) + parseInt(numberChecked[2]) + parseInt(numberChecked[3]);
    stamp_snack1_6.innerHTML = 'la somma delle 4 cifre è... ' + sommaSnack1_6
})




/****************************
 ** SNACK 28 FEBBRAIO 2022 **
 ****************************/ 

// SNACK 1.9
let stamp_snack1 = document.querySelector('.snack1-9');
let n = 0;
let somma1 = 0;
while (n <= 10) {
    somma1 += n;
    n++
}
let media1 = somma1 / 10;

stamp_snack1.innerHTML += `<br>` + 'fatto col ciclo while la somma è ' + somma1
stamp_snack1.innerHTML += `<br>` + 'fatto col ciclo while la media è ' + media1



let somma = 0;

for (i = 0; i <= 10; i++) {
    somma += i;
}
let media = somma / 10;

stamp_snack1.innerHTML += `<br>` + 'fatto col ciclo for la somma è ' + somma1
stamp_snack1.innerHTML += `<br>` + 'fatto col ciclo for la media è ' + media1



// SNACK 2.1
let stamp = document.querySelector('.snack2-1');
let snack2Somma = 0;
let contatore = 0;
let btnSnack2_1 = document.querySelector('.btnsnack2-1');

btnSnack2_1.addEventListener('click', function(){
    for (i = 0; i < 5; i++) {
        let numb = parseInt(prompt('dammi un numero'));
        snack2Somma += numb;
    } 
    stamp.innerHTML += snack2Somma
})


// ciclo while
/* while (contatore < 5) {
    let numb = parseInt(prompt('dammi un numero'));
    snack2Somma += numb;
    contatore++
}
 */



// SNACK 2.2
let stamp_snack2_2 = document.querySelector('.snack2-2');
let numberSnack2_2 = document.querySelector('#numero');
let btnCheck = document.getElementById('check');

btnCheck.addEventListener('click', function(){
    let numberSnack2_2Value = numberSnack2_2.value;
    if (numberSnack2_2Value % 2 == 0) {
        stamp_snack2_2.innerHTML = 'bravo! hai inserito un numero pari e cioè il numero ' + numberSnack2_2Value
        numberSnack2_2.value = ''
    } else {
        numberSnack2_2Value++
        stamp_snack2_2.innerHTML = 'Hai inserito un numero dispari quindi lo aumento di 1 e diventa pari! Guarda: ' + numberSnack2_2Value
        numberSnack2_2.value = ''

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

invitati.innerHTML += arrNomi[Math.floor(Math.random()*arrNomi.length)] + ' ' + arrCognomi[Math.floor(Math.random()*arrCognomi.length)] + `<br>` + arrNomi[Math.floor(Math.random()*arrNomi.length)] + ' ' + arrCognomi[Math.floor(Math.random()*arrCognomi.length)] + `<br>` + arrNomi[Math.floor(Math.random()*arrNomi.length)] + ' ' + arrCognomi[Math.floor(Math.random()*arrCognomi.length)] 




