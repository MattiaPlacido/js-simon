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
const nOfGeneratedNumbers = 5;
const randomStart = 1;
const randomEnd = 99;
const generatedNumbers = [];

const generatedNumbersContainer = document.getElementById("container-before");
const formContainer = document.getElementById("container-after");
const resultsContainer = document.getElementById("container-results");

const submit = document.getElementById("submit");

//genero 5 numeri casuali e verifico non siano uguali
for (let i = 0; i < nOfGeneratedNumbers; i++) {
  //ciclo per verificarte i numeri non siano uguali
  let leaningN = randomNumberGen(randomStart, randomEnd);
  !generatedNumbers.includes(leaningN) ? generatedNumbers.push(leaningN) : i--;
}

//metto i numeri generati in pagina
generatedNumbers.forEach((element) => {
  const p = document.createElement("p");
  p.textContent = element;
  generatedNumbersContainer.append(p);
});

//timer di 30 secondi
setTimeout(() => {
  generatedNumbersContainer.classList.add("d-none");
  formContainer.classList.remove("d-none");
}, 3000);

//quando l'utente clicca
submit.addEventListener(
  "click",
  () => {
    const guessedNumbersList = []; //array di appoggio per i valori inseriti
    const correctNumberList = []; //array contenente i valori corretti inseriti dall'utente, è dichiarato qua perchè altrimenti il contenuto si moltiplica ogni volta che si clicca conferma

    //ottengo tutti i valori dai form
    for (let i = 0; i < nOfGeneratedNumbers; i++) {
      const element = document.getElementById(`input-${i + 1}`);

      //controllo il valore sia valido
      if (
        isNaN(parseInt(element.value)) ||
        element.value === "" ||
        guessedNumbersList.includes(parseInt(element.value))
      ) {
        alert("Stai inserendo valori non validi!");
        return;
      }

      guessedNumbersList.push(parseInt(element.value));

      //se il numero corrisponde lo aggiungo
      if (generatedNumbers.includes(guessedNumbersList[i])) {
        correctNumberList.push(guessedNumbersList[i]);
      }
    }
    resultsContainer.classList.remove("d-none");
    const numbersGroup = document.createElement("div");
    numbersGroup.classList.add(
      "text-center",
      "d-flex",
      "justify-content-center",
      "gap-4",
      "fs-2"
    );

    resultsContainer.append(numbersGroup);

    correctNumberList.forEach((element) => {
      const p = document.createElement("p");
      p.textContent = element;
      numbersGroup.append(p);
    });
  },
  { once: true }
);
