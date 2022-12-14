// # Track BEGINNER SNACK 1:

/*
    Write a Js Program to check 2 numbers and return true if one of the number is 100 or the sum of the 2 numbers is 100.
*/

// Assegno la variabile d'appoggio sum 
let sum = 0

// Assegno la variabile d'appoggio per la validazione 
let isValid = true;

// Creo un ciclo for per chiedere 2 volte all'utente di inserire un numero 
for (let i = 0; i < 2 & isValid; i++) {
// Assegno la costante per chiedere il numero all'utente 
    const userNumber = parseInt(prompt('Inserisci un numero'));

    // ! Validation 
    if (isNaN(userNumber)) {
        isValid = false;
        alert('Non hai inserito valori validi.');
    } else {
        // Sommo i 2 valori 
        sum += userNumber;
    }
    // Verifico che uno dei 2 valori sia uguale a 100 
    if (userNumber === 100) {
        console.log('uno dei 2 numeri inseriti equivale a 100');
     }  // Verifico che la somma dei 2 valori sia uguale a 100 
    else if (sum === 100) {
        console.log('la somma dei 2 valori è 100')
    };
};
