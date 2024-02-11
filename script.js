/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

// number: sono i datatype che hanno valore numerico. Una cosa da specificare è che in Javascript i decimali non si scrivono con la virgola perchè non viene letto, si scrivono con il punto.
// string: vengono inserite all'interno delle virgolette doppie o singole e praticamente vengono utilizzate come testo e comandi.
// boolean: verifica la condizione ovvero se è vero o falso.
// null: quando un campo di datatype non contiene nessun valore.
// undefined: ti dice quando un valore non è stato assegnato, perche se una variabile viene dichiarata e non viene dato nessun valore allora ti da undefined.
// object:sono piu complessi perche non sono primitivi cioè non contengono un valore solo ma che sono una colezione di dati.

let datatype= ["Number", "String", "Boolean", "null", "undefined", "object"];
console.log[datatype];


/* ESERCIZIO 2
 Descrivi cos'Ã¨ un oggetto in JavaScript, con parole tue.
*/
 // Un oggetto in JavaScript è un contenitore dove vengono fornite lettere e molti valori insieme alle proprietà (i dati) che vanno a modificare l'oggetto.
 // non sono come gli altri datatype perche gli oggetti non sono primitivi quindi possono memorizzare una gran quuantità di dati complessi.



/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let n1= 12;
let n2= 20;

console.log(n1+n2);



/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x= 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let nome= "Eli"

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let a= 12;
let b= 4;
let risultato= a-b;

console.log (risultato);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: Ã¨ la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john"
let name2 = "John"

console.log(name1 === name2);
console.log(name1.toLowerCase() === name2.toLowerCase());
