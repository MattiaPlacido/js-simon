// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Potete usare liste, input e bottoni non stilizzati, mettendo stampe di debug in console e risultato finale in un alert.
// Solo una volta finito, a piacere e facoltativamente, potete aggiungete lo stile.
// NOTA:  non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
// BONUS
// Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
// Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

//funzioni
const randomNumberGen = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

//genero 5 numeri casuali e verifico non siano uguali
const nOfElements = 5;
const randomStart = 1;
const randomEnd = 99;
const elements = [];

for (let i = 0; i < nOfElements; i++) {
  //ciclo per verificarte i numeri non siano uguali
  let leaningN = randomNumberGen(randomStart, randomEnd);
  !elements.includes(leaningN) ? elements.push(leaningN) : i--;
}
console.log(elements); //debugging

//mostro i numeri in pagina
const generatedNumbersContainer = document.getElementById("generated-nums");

elements.forEach((element) => {
  const p = document.createElement("p");
  p.textContent = element;
  generatedNumbersContainer.append(p);
});

//prova
setTimeout(() => {
  generatedNumbersContainer.classList.add("d-none");
}, 3000);

//timer di 30 secondi da quando è stata ricaricata la pagina
//faccio scomparire i numeri generati con generatedNumbersContainer.classList.add("d-none");
//faccio comparire i form che prendono le informazioni togliendogli d-none dalle classi
//gestisco le informazioni quando l'utente clicca conferma all'invio dei dati

//il computer comunica all'utente quanti numeri ha indovinato
