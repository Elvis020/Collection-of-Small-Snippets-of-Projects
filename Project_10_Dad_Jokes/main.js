const jokeElement = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

const generateJoke = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  let incoming = await fetch("https://icanhazdadjoke.com", config);
  let data = await incoming.json();
  jokeElement.innerHTML = data.joke;
};

jokeBtn.addEventListener("click", generateJoke);
