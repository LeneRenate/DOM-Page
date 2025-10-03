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

// const fruitSection = document.createElement("section");
// fruitSection.classList.add("fruit-section");
// document.body.append(fruitSection);

// regular for loop?
// Create section > img + section.textSection + figure
// img > .pokemonImg
// section > h2 + article*2 > p*2  | .category .type .strong .weak
// figure > figcaption + img .evolution

function choosePokemon() {
  card.textContent = ``;
  let theChosenOne = Math.floor(Math.random() * pokemonList.length);
  console.log(theChosenOne);
  for (let pokemon of pokemonList) {
    // Making the "profile image", with class and content
    const pokemonImg = document.createElement("img");
    pokemonImg.classList.add("pokemonImg");
    pokemonImg.src = `./images/${pokemon.name}.png`;
    // Making the text-section
    const midSection = document.createElement("section");
    midSection.classList.add("midSection");
    // Making the title
    const title = document.createElement("h2");
    title.textContent = `${pokemon.name}`;
    // Making the articles-section, and articles
    const textSection = document.createElement("section");
    textSection.classList.add("textSection");
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
    const evolutionTitle = document.createElement("figcaption");
    evolutionTitle.textContent = `The evolution steps of ${pokemon.name}:`;
    const evolutionImg = document.createElement("img");
    evolutionImg.classList.add("evolutionImg");
    evolutionImg.src = `./images/evolution/${pokemon.name}.png`;
    // Only showing the randomly chosen pokemon
    if (pokemon === pokemonList[theChosenOne]) {
      article1.append(type, strong);
      article2.append(category, weak);
      midSection.append(title, textSection);
      textSection.append(article1, article2);
      evolutionCard.append(evolutionTitle, evolutionImg);
      card.append(pokemonImg, midSection, evolutionCard);
    }
  }
}

pokeball.addEventListener("click", choosePokemon);
