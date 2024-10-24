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

//dichiarazione variabili
const nOfElements = 5;
const randomStart = 1;
const randomEnd = 99;
const elements = [];

const generatedNumbersContainer = document.getElementById("container-before");
const resultsContainer = document.getElementById("container-after");

const guessedNumbersList = [];

const submit = document.getElementById("submit");

//genero 5 numeri casuali e verifico non siano uguali
for (let i = 0; i < nOfElements; i++) {
  //ciclo per verificarte i numeri non siano uguali
  let leaningN = randomNumberGen(randomStart, randomEnd);
  !elements.includes(leaningN) ? elements.push(leaningN) : i--;
}
console.log(elements); //debugging

//metto i numeri generati in pagina
elements.forEach((element) => {
  const p = document.createElement("p");
  p.textContent = element;
  generatedNumbersContainer.append(p);
});

//timer di 30 secondi
setTimeout(() => {
  generatedNumbersContainer.classList.add("d-none");
  resultsContainer.classList.remove("d-none");
}, 1000);

//quando l'utente clicca
submit.addEventListener("click", () => {
  //da fare controlli sugl'input
  for (let i = 0; i < nOfElements; i++) {
    const element = document.getElementById(`input-${i + 1}`);

    if (elements.includes(parseInt(element.value)) && !isNaN(element.value))
      guessedNumbersList.push(element.value);
  }

  console.log(
    `Hai indovinato i seguenti numeri : ${guessedNumbersList.join(" ")}`
  );
});
