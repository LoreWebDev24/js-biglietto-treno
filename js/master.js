// #js-prezzo-treno

// -Impostare la variabile con il prompt dei km da percorrere 

let kmToDoPrompt = prompt ('Quanti km devi percorrere?');
let kmToDo = parseInt(kmToDoPrompt);
console.log(kmToDo);
console.log(typeof kmtoDo)

// -Impostare la variabile con l'eta' del soggetto
let agePrompt =  prompt ('Quanti anni hai?');
let age = parseInt(agePrompt);
console.log(age);

// -Impostare la variabile con il multiplier del prezzo per km (0,21km all'euro)
let multiplier = parseFloat(0.21);
console.log(multiplier);

// -Imposto variabile prezzo pieno
let prezzoPieno = parseInt(kmToDo * multiplier);
console.log(prezzoPieno);

// -Imposto variabile sconto
let sconto20 = (parseFloat(0.20) * age);
console.log(sconto20);

let sconto65 = (parseFloat(0.65) * age);
console.log(sconto65);

//     -let sconto 12
let sconto

// -Imposto variabile prezzo scontato12
let prezzoScontato = parseInt(prezzoPieno - sconto);
console.log(prezzoScontato);

// -SE age < 18
//     -ALLORA sconto = sconto20
//     <!-- document.getElementById('prezzo-finale').innerHTML = `${prezzoScontato}`; -->
if (age < parseInt(18)) {
    sconto = sconto20;
    document.getElementById('prezzo-finale').innerHTML = `${prezzoScontato}`;
    // -ELSE IF age > 65 
//     -ALLORA sconto = sconto65
//       <!-- document.getElementById('prezzo-finale').innerHTML = `${prezzoScontato}`; -->
} else if (age < parseInt(65)) {
    sconto = sconto65;
    document.getElementById('prezzo-finale').innerHTML = `${prezzoScontato}`;
    // -ALTRIMENTI
//     -sconto = 0
//       <!-- document.getElementById('prezzo-finale').innerHTML = `${prezzoScontato}`; -->
} else {
    sconto = 0;
    document.getElementById('prezzo-finale').innerHTML = `${prezzoScontato}`;
}

