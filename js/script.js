// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


//variabili
var multipliDiTre = document.getElementById('multipliTRE');

// Stampo i numeri da 1 a 100

for ( var i = 1 ; i <= 100; i++) {
  var numeri = i;

  // CONDIZIONE:
  // Se il numero diviso 3 da resto 0,  &
  // Se il numero divo 5 da resto diverso da zero
  // Scrivo Fizz.

  if  ((numeri % 3 === 0 ) && !( numeri % 5 == 0 )) {

    console.log( " Fizz. ");
  }

  // CONDIZIONE:
  // Se il numero diviso 5 da resto 0,  &
  // Se il numero diviso 3 da resto diverso da zero
  // Scrivo Buzz.


  if (( numeri % 5 == 0 ) && !(numeri % 3 === 0 ) ) {
    console.log( ' Buzz.');



  }

  // CONDIZIONE:
  // Se il numero diviso 3 da resto 0,  &
  // Se il numero divo 5 da resto  zero
  // Scrivo FizzBuzz.

  if  ((numeri % 3 == 0) && (numeri % 5 == 0)) {
    console.log(' FizzBuzz');

  }

  // CONDIZIONE:
  // Se entrambi i valori non rispondono alle condizioni precedenti allora stampa il numero
  else {
  if (!(numeri % 3 == 0) && !(numeri % 5 == 0))
    console.log(numeri);
  }

}

//Stampo
