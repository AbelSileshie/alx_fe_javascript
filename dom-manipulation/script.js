const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteButton = document.getElementById("newQuote");
const addQuoteForm = document.getElementById("addQuoteForm");
const newQuoteText = document.getElementById("newQuoteText");
const newQuoteCategory = document.getElementById("newQuoteCategory");
const categoryFilter = document.getElementById("categoryFilter");

let quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    category: "Motivation",
  },
  {
    text: "Life is what happens to you while you're busy making other plans.",
    category: "Inspirational",
  },
  // Add more quotes here
];

let lastSelectedCategory =
  localStorage.getItem("lastSelectedCategory") || "all";

function showRandomQuote(category) {
  let filteredQuotes = quotes;
  if (category !== "all") {
    filteredQuotes = quotes.filter((quote) => quote.category === category);
  }

  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  const randomQuote = filteredQuotes[randomIndex];

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

  if (!categories.includes(newQuote.category)) {
    const newOption = document.createElement("option");
    newOption.value = newQuote.category;
    newOption.textContent = newQuote.category;
    categoryFilter.appendChild(newOption);
  }

  newQuoteText.value = "";
  newQuoteCategory.value = "";
  addQuoteForm.style.display = "none";
  showRandomQuote(lastSelectedCategory);
}

function filterQuotes() {
  const selectedCategory = categoryFilter.value;
  lastSelectedCategory = selectedCategory;
  localStorage.setItem("lastSelectedCategory", selectedCategory);
  showRandomQuote(selectedCategory);
}

function populateCategories() {
  const categories = quotes
    .map((quote) => quote.category)
    .filter((category, index, arr) => arr.indexOf(category) === index);

  categories.forEach((category) => {
    const newOption = document.createElement("option");
    newOption.value = category;
    newOption.textContent = category;
    categoryFilter.appendChild(newOption);
  });

  categoryFilter.value = lastSelectedCategory;
}

newQuoteButton.addEventListener("click", () =>
  showRandomQuote(lastSelectedCategory)
);
addQuoteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addQuote();
});
categoryFilter.addEventListener("change", filterQuotes);

populateCategories();
