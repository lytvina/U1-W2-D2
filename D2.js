/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let num1=13;
let num2=7;
if(num1 > num2){
  console.log(num1 + " " + "è maggiore di" + " " + num2);
}
else{
  console.log(num1 + "è minore di" + num2);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let num3=6;
let num4=5;
if(num1 != num4){
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let num5=15;
if(num5%num4==0){
  console.log("divisibile per 5");
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let num6=8;
let num7=0;
if(num6==8 ||num7==8 || num6+num7==8){
  console.log("num6" + " è uguale all'8")
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart=55;
if(totalShoppingCart<50){
  totalShoppingCart+=10;
}
console.log(totalShoppingCart);
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
totalShoppingCart=55;
if(totalShoppingCart<50){
  totalShoppingCart+=10;
}
totalShoppingCart=totalShoppingCart/100*80;
console.log(totalShoppingCart);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let var1=3;
let var2=7;
let var3=13;
if(var1>var2 && var1>var3){
  console.log(var1);
  if(var2>var3){
    console.log(var2);
    console.log(var3);
  }
  else{
    console.log(var3);
    console.log(var2);
  }
}
if(var2>var1 && var2>var3){
  console.log(var2);
  if(var1>var3){
    console.log(var1);
    console.log(var3);
  }
  else{
    console.log(var3);
    console.log(var1);
  }
}
if(var3>var2 && var3>var1){
  console.log(var3);
  if(var2>var1){
    console.log(var2);
    console.log(var1);
  }
  else{
    console.log(var1);
    console.log(var2);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let numero = 42;

if(typeof numero == "number"){
  console.log("E' un numero");
}else{
  console.log("Non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numeroPari = 40;
if(numeroPari%2 == 0){
  console.log(numeroPari + " è pari");
}else{
  console.log(numeroPari + " è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
let val = 7
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css']
}

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let arr = [];

for(i = 1; i <= 10; i++){
  arr.push(i);
}
console.log(arr);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

arr[arr.length - 1] = 100;

console.log(arr);