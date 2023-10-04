// #js-prezzo-treno

// -Impostare la variabile con il prompt dei km da percorrere 

let kmToDoPrompt = prompt ('Quanti km devi percorrere?');
let kmToDo = parseInt(kmToDoPrompt);


console.log(kmToDo);
console.log(typeof kmToDo);

// -Impostare la variabile con l'eta' del soggetto
let agePrompt =  prompt ('Quanti anni hai?');
let age = parseInt(agePrompt);
console.log(age);

// -Impostare la variabile con il multiplier del prezzo per km (0,21km all'euro)
let multiplier = 0.21;

console.log(multiplier);

// -Imposto variabile prezzo pieno
let prezzoPieno = kmToDo * multiplier;
console.log(prezzoPieno);

// -Imposto variabili di sconto 
let sconto20 = 20;
console.log(sconto20);

let sconto65 = 65;
console.log(sconto65);

let scontoMinorenni
let scontoSenior

// -SE age < 18
//     -ALLORA sconto = sconto20%
//     <!-- document.getElementById('prezzo-finale').innerHTML = `${prezzoScontato}`; -->
if (age < parseInt(18)) {
    scontoMinorenni = prezzoPieno * (sconto20 / 100)
    // -Imposto variabile prezzo scontato
    let prezzoScontato = prezzoPieno - scontoMinorenni;
    console.log(prezzoScontato);
    document.getElementById('prezzo-finale').innerHTML = `${prezzoScontato}`;
    // -ELSE IF age > 65 
//     -ALLORA sconto = sconto65%
//       <!-- document.getElementById('prezzo-finale').innerHTML = `${prezzoScontato}`; -->
} else if (age > parseInt(65)) {
    scontoSenior = prezzoPieno * (sconto65 / 100);
    let prezzoScontato = prezzoPieno - scontoSenior;
    document.getElementById('prezzo-finale').innerHTML = `${prezzoScontato}`;
    // -ALTRIMENTI
//     -sconto = 0%
//       <!-- document.getElementById('prezzo-finale').innerHTML = `${prezzoScontato}`; -->
} else {
    let prezzoScontato = prezzoPieno;
    document.getElementById('prezzo-finale').innerHTML = `${prezzoScontato}`;
}

