#js-prezzo-treno

-Impostare la variabile con il prompt dei km da percorrere 

    -let kmToDo prompt ('Quanti km devi percorrere?')

-Impostare la variabile con l'eta' del soggetto
    -let age prompt ('Quanti anni hai?')

-Impostare la variabile con il multiplier del prezzo per km (0,21km all'euro)
    -const multiplier = 0,21

-Imposto variabile prezzo pieno
    -let prezzoPieno = kmToDo * 0,21

-Imposto variabile sconto
    -const sconto20 = 0,2 * age
    -const sconto65 = 0,65 * age
    -let sconto 

-Imposto variabile prezzo scontato
    -let prezzoScontato = prezzoPieno - sconto

-SE age < 18
    -ALLORA sconto = sconto20
    <!-- document.getElementById('prezzo-finale').innerHTML = `${prezzoScontato}`; -->
-ELSE IF age > 65 
    -ALLORA sconto = sconto65
      <!-- document.getElementById('prezzo-finale').innerHTML = `${prezzoScontato}`; -->
-ALTRIMENTI
    -sconto = 0
      <!-- document.getElementById('prezzo-finale').innerHTML = `${prezzoScontato}`; -->



        