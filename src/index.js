function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#user-prompt");
  let apiKey = "a9f2b6a7f83210eb03od0ab344b8t656";
  let prompt = `User instructions: Generate a fact about ${promptInput.value}`;
  let context =
    "you are an ai assistant who knows many facts about countries of the world. use the country name given by the user to generate a short and interesting fact. Do no include any title.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="animate-flicker">⏳Generating your fact about ${promptInput.value}...</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
