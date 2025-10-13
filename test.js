/******************************************************************************

******************************************************************************/

import { pokemonList } from "./pokemonList.js";

const randomPokemon = Math.floor(Math.random() * pokemonList.length);

console.log(pokemonList[randomPokemon]);

// Making the pokemon-card
const card = document.createElement("section");
card.classList.add("pokemonCard");
document.body.append(card);

// for of loop
// Create section > figure + section.textSection + figure
// figure >figcaption.title img.pokemonImg
// section > h2 + article > p*4  | .category .type .strong .weak
// figure > figcaption + img .evolution

function makeCards() {
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
    const article = document.createElement("article");
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
  }

  function choosePokemon() {
    card.textContent = ``; // Clear previous card
    let theChosenOne = Math.floor(Math.random() * pokemonList.length);
    // Only showing the randomly chosen pokemon
    if (pokemon === pokemonList[theChosenOne]) {
      pokemonImgCard[theChosenOne].append(title, pokemonImg);
      article[theChosenOne].append(type, category, strong, weak);
      midSection[theChosenOne].append(statsTitle, article);
      evolutionCard[theChosenOne].append(evolutionTitle, evolutionImg);
      card[theChosenOne].append(pokemonImgCard, midSection, evolutionCard);
    }
  }
}

pokeball.addEventListener("click", choosePokemon);
