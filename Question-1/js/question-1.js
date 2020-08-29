const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const gamesContainer = document.querySelector(".results");

async function getRatings() {

  try {

    const response = await fetch(url);

    const games = await response.json();

    console.log(games.results);

    const facts = games.results;

    gamesContainer.innerHTML = "";



    for (let i = 0; i < facts.length; i++) {
      console.log(facts[i].name, facts[i].rating, facts[i].tags);

      if (i === 8) {
        break;
      }

      gamesContainer.innerHTML +=
        `<div class="results"><p>Name: ${facts[i].name}</p>
      <p>Rating: ${facts[i].rating}</p>
      <p>Tags: ${facts[i].tags.length}</p>
      </div>`;
    }
  }
  catch (error) {
    console.log("An error has occurred");
    gamesContainer.innerHTML = displayError("An error has occurred when calling the API");
  }
}

getRatings();
