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

// -Impostare la variabile con il multiplier del prezzo per km (0.21km all'euro)
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

// -Dichiaro senza impostare:
let scontoMinorenni;
let scontoSenior;
let prezzoScontato;

// -SE age < 18
    // -calcolo lo sconto Minorenni
    // -calcolo il prezzo scontato
if (age < 18) {
    scontoMinorenni = prezzoPieno * (sconto20 / 100);
    prezzoScontato = prezzoPieno - scontoMinorenni;
    // -ELSE IF age > 65 
    // -calcolo lo sconto senior
    // -calcolo il prezzo scontato
} else if (age > 65) {
    scontoSenior = prezzoPieno * (sconto65 / 100);
    prezzoScontato = prezzoPieno - scontoSenior;
    // -ALTRIMENTI
    // -il prezzo scontato e' equivalente al prezzo pieno
} else {
    prezzoScontato = prezzoPieno;
}

const prezzoScontatoFixed = prezzoScontato.toFixed(2);
document.getElementById('prezzo-finale').innerHTML = `${prezzoScontatoFixed}`;