function displayFact(response) {
  new Typewriter("#fact", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateFact(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#user-prompt");
  let apiKey = "a9f2b6a7f83210eb03od0ab344b8t656";
  let prompt = `User instructions: Generate a fact about ${promptInput.value}`;
  let context =
    "you are an ai assistant who knows many facts about countries of the world. use the country name given by the user to generate a short and interesting fact. Do no include any title. include an emoji that relates to the fact";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let FactElement = document.querySelector("#fact");
  FactElement.classList.remove("hidden");
  FactElement.innerHTML = `<div class="animate-flicker">⏳Generating your fact about ${promptInput.value}...</div>`;

  axios.get(apiURL).then(displayFact);
}

let FactFormElement = document.querySelector("#fact-generator-form");
FactFormElement.addEventListener("submit", generateFact);
