import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";


const fetchCharacters = async () => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/`);
  const data = await res.json();
  console.log("data",data);

  let characters = data.results.map((character) => createCharacterCard(character));

  cardContainer.innerHTML = "";
  cardContainer.append(...characters);

  
}


fetchCharacters()