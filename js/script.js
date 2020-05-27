// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.



// versione FOR
// //variabili html
// var outputTre = document.getElementById('outputMult3');
// var outputCinque = document.getElementById('outputMult5');
// var outputMult = document.getElementById('outputMult')
//
// // Stampo i numeri da 1 a 100
//
// for ( var i = 1 ; i <= 100; i++) {
  // var numeri = i;
  //
  // // CONDIZIONE:
  // // Se il numero diviso 3 da resto 0,  &
  // // Se il numero diviso 5 da resto diverso da zero
  // // Scrivo Fizz.
  //
  // if  ((numeri % 3 === 0 ) && !( numeri % 5 == 0 )) {
  //   outputTre.innerHTML += numeri + " <li> " + " Fizz. " + " </li> " + " ---  ";
  //
  //   console.log( " Fizz. ");
  // }
  //
  // // CONDIZIONE:
  // // Se il numero diviso 5 da resto 0,  &
  // // Se il numero diviso 3 da resto diverso da zero
  // // Scrivo Buzz.
  //
  //
  // else if  (( numeri % 5 == 0 ) && !(numeri % 3 === 0 ) ) {
  //   console.log( ' Buzz.');
  //   outputCinque.innerHTML += numeri + " <li> " + " Buzz. " + " </li> " + " --- ";
  //
  // }
  //
  // // CONDIZIONE:
  // // Se il numero diviso 3 da resto 0,  &
  // // Se il numero diviso 5 da resto  zero
  // // Scrivo FizzBuzz.
  //
  // else if  ((numeri % 3 == 0) && (numeri % 5 == 0)) {
  //   outputMult.innerHTML += numeri + " <li> " + " FizzBuzz. " + " </li> " + " --- ";
  //   console.log(' FizzBuzz');
  //
  //
  // }
  //
  // // CONDIZIONE:
  // // Se entrambi i valori non rispondono alle condizioni precedenti, allora stampa il numero
  //
  // else {
  //   console.log(numeri);
  // }
//
// }

// Versione While

//variabili html
var outputTre = document.getElementById('outputMult3');
var outputCinque = document.getElementById('outputMult5');
var outputMult = document.getElementById('outputMult')

// stampo i numeri da 1 a 100

var i = 1;
while ( i <= 100) {

  var numeri = i;

  if  ((numeri % 3 === 0 ) && !( numeri % 5 == 0 )) {
    outputTre.innerHTML += numeri + " <li> " + " Fizz. " + " </li> " + " ---  ";

    console.log( " Fizz. ");
  }


  else if  (( numeri % 5 == 0 ) && !(numeri % 3 === 0 ) ) {
    console.log( ' Buzz.');
    outputCinque.innerHTML += numeri + " <li> " + " Buzz. " + " </li> " + " --- ";

  }

  else if  (numeri % 15 == 0) {
    outputMult.innerHTML += numeri + " <li> " + " FizzBuzz. " + " </li> " + " --- ";
    console.log(' FizzBuzz');


  }

  else {
    console.log(numeri);
  }
  //interrompo il ciclo
  i++;
}
