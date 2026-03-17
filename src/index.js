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
  let prompt = `User instructions: Generate a poem about ${promptInput.value}`;
  let context =
    "You are a poet who is great at making up 4-line poems from a user prompt. Be polite and follow the user instructions to create your poem. Use basic HTML and display the poem with each line beginning on a new line on the page. do not include any other titles or comments. do not show html tag";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="animate-flicker">⏳Generating your poem about ${promptInput.value}...</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
