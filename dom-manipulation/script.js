const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteButton = document.getElementById("newQuote");
const addQuoteForm = document.getElementById("addQuoteForm");
const newQuoteText = document.getElementById("newQuoteText");
const newQuoteCategory = document.getElementById("newQuoteCategory");

let quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    category: "Motivation",
  },
  {
    text: "Life is what happens to you while you're busy making other plans.",
    category: "Inspirational",
  },
];

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  quoteDisplay.innerHTML = randomQuote.text;
}

function createAddQuoteForm() {
  addQuoteForm.style.display = "block";
}

function addQuote() {
  const newQuote = {
    text: newQuoteText.value,
    category: newQuoteCategory.value,
  };

  quotes.push(newQuote);

  const newQuoteElement = document.createElement("p");
  newQuoteElement.textContent = newQuote.text;

  quoteDisplay.appendChild(newQuoteElement);

  newQuoteText.value = "";
  newQuoteCategory.value = "";
  addQuoteForm.style.display = "none";
}

newQuoteButton.addEventListener("click", showRandomQuote);
addQuoteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addQuote();
});
