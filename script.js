/******************************************************************************
Plan:
I want to make a random Pokemon generator.
Starting small, with a limited array of different Pokemons. Using a loop to create "cards" for each. Making a function to choose one pokemon randomly from that array, and only show (append) the card for that specific Pokemon. Connect the function to a button.

Goal:
* Can choose/click the button several times, and get a new pokemon.
* Make the button into a pokeball

Future develoopment::
- Can choose "type" of pokemon to get (grass, poison, water...)
- Fight simulator: You generate two pokemons, and it shows who would (most likely) win in a pokemon battle

******************************************************************************/

// Need an array of different pokemons to start with. Will expand this, but let's make it work first!

const pokemonList = [
  {
    name: "Bulbasaur",
    evolutionsteps: 3,
    category: "Seed",
    type: ["grass", "poison"],
    strongAgainst: ["fighting", "water", "grass", "electric", "fairy"],
    weakAgainst: ["flying", "fire", "psychic", "ice"],
  },
  {
    name: "Charmander",
    evolutionsteps: 3,
    category: "Lizard",
    type: ["fire"],
    strongAgainst: ["bug", "grass", "steel", "fire", "ice", "fairy"],
    weakAgainst: ["ground", "rock", "water"],
  },
  {
    name: "Squirtle",
    evolutionsteps: 3,
    category: "Tiny Turtle",
    type: ["water"],
    strongAgainst: ["steel", "fire", "water", "ice"],
    weakAgainst: ["grass", "electric"],
  },
  {
    name: "Caterpie",
    evolutionsteps: 3,
    category: "Worm",
    type: ["bug"],
    strongAgainst: ["fighting", "ground", "grass"],
    weakAgainst: ["flying", "rock", "fire"],
  },
  {
    name: "Weedle",
    evolutionsteps: 3,
    category: "Hairy Bug",
    type: ["bug", "poison"],
    strongAgainst: ["fighting", "poison", "bug", "grass", "fairy"],
    weakAgainst: ["fire", "flying", "psychic", "rock"],
  },
  {
    name: "Pidgey",
    evolutionsteps: 3,
    category: "Tiny Bird",
    type: ["normal", "flying"],
    strongAgainst: ["bug", "grass"],
    weakAgainst: ["electric", "ice", "rock"],
  },
  {
    name: "Rattata",
    evolutionsteps: 2,
    category: "Mouse",
    type: ["normal"],
    strongAgainst: ["ghost"],
    weakAgainst: ["fighting"],
  },
];

/******************************************************************************

******************************************************************************/

const randomPokemon = Math.floor(Math.random() * pokemonList.length);

console.log(pokemonList[randomPokemon]);

// Making the pokemon-card
const card = document.createElement("section");
card.classList.add("pokemonCard");
document.body.append(card);

// for of loop
// Create section > figure + section.textSection + figure
// figure >figcaption.title img.pokemonImg
// section > h2 + section > article*2 > p*2  | .category .type .strong .weak
// figure > figcaption + img .evolution

function choosePokemon() {
  card.textContent = ``;
  let theChosenOne = Math.floor(Math.random() * pokemonList.length);
  console.log(theChosenOne);
  for (let pokemon of pokemonList) {
    // Making the "profile image"-card, with class and content
    const pokemonImgCard = document.createElement("figure");
    pokemonImgCard.classList.add("pokemonImgCard");
    // Making the title
    const title = document.createElement("figcaption");
    title.textContent = `${pokemon.name}`;
    const pokemonImg = document.createElement("img");
    pokemonImg.src = `./images/${pokemon.name}.png`;
    // Making the midsection with stats
    const midSection = document.createElement("section");
    midSection.classList.add("midSection");
    const statsTitle = document.createElement("h2");
    statsTitle.textContent = "Base Stats:";
    // Making a section for the articles, for styling-purposes
    const textSection = document.createElement("section");
    textSection.classList.add("textSection");
    // Making the articles for the actual stats
    const article1 = document.createElement("article");
    const article2 = document.createElement("article");
    // Making the paragraphs
    const category = document.createElement("p");
    category.textContent = `Category: ${pokemon.category}`;
    const type = document.createElement("p");
    type.textContent = `Type: ${pokemon.type.join(" & ")}`;
    const strong = document.createElement("p");
    strong.textContent = `Strong against: ${pokemon.strongAgainst.join(", ")}`;
    const weak = document.createElement("p");
    weak.textContent = `Weak against: ${pokemon.weakAgainst.join(", ")}`;
    // Making the evolution-image, and it's content
    const evolutionCard = document.createElement("figure");
    evolutionCard.classList.add("evolutionCard");
    const evolutionTitle = document.createElement("figcaption");
    evolutionTitle.textContent = `The evolution steps of ${pokemon.name}:`;
    const evolutionImg = document.createElement("img");
    evolutionImg.classList.add("evolutionImg");
    evolutionImg.src = `./images/evolution/${pokemon.name}.png`;
    // Only showing the randomly chosen pokemon
    if (pokemon === pokemonList[theChosenOne]) {
      pokemonImgCard.append(title, pokemonImg);
      article1.append(type, strong);
      article2.append(category, weak);
      textSection.append(article1, article2);
      midSection.append(statsTitle, textSection);
      evolutionCard.append(evolutionTitle, evolutionImg);
      card.append(pokemonImgCard, midSection, evolutionCard);
    }
  }
}

pokeball.addEventListener("click", choosePokemon);
