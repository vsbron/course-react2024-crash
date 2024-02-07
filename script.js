const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

// Selecting DOM Elements
const btn = document.querySelector(".btn--open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Render facts to the list
factsList.innerHTML = "";

// Load data from Supabase
async function loadFacts() {
  // Fetching the data
  const res = await fetch(
    "https://tzmuxqwkqlgqxnqbljuh.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6bXV4cXdrcWxncXhucWJsanVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczMDM1NDcsImV4cCI6MjAyMjg3OTU0N30.jlG-_TG5_AC-iILfAY56itr-Z3nug000fN9a_UPXla4",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6bXV4cXdrcWxncXhucWJsanVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczMDM1NDcsImV4cCI6MjAyMjg3OTU0N30.jlG-_TG5_AC-iILfAY56itr-Z3nug000fN9a_UPXla4",
      },
    }
  );

  // Converting data to String
  const data = await res.json();

  // Creating the list in the HTML
  createFactsList(data);
}

// Calling the async function
loadFacts();

// Creating the function that creats initial facts list
function createFactsList(data) {
  // Formatting the fact into HTML
  const htmlArr = data.map(
    (fact) => `
    <li class="fact">
      <p>${fact.text}<a href="${fact.source}" class="source" target="_blank">(Source)</a></p>
      <span class="tag" style="background: #eab308">${fact.category}</span>
      <div class="vote-buttons">
        <button>👍 ${fact.votesInteresting}</button>
        <button>🤯 ${fact.votesMindblowing}</button>
        <button>⛔ ${fact.votesFalse}</button>
      </div>
    </li>
    `
  );

  // Removing commas
  const html = htmlArr.join("");

  // Placing inside HTML
  factsList.insertAdjacentHTML("afterbegin", html);
}

// Form visibility toggle
btn.addEventListener("click", () => {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});
