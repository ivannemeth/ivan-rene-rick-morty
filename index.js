import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector('[data-js="search-bar-container"]');
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

let maxPage = 1;
let page = 1;
let searchQuery = "";
 

const fetchCharacters = async () => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`);
  const data = await res.json();

  let characters = data.results.map((eachCharacter) => createCharacterCard(eachCharacter));
  
  cardContainer.innerHTML = '';
  cardContainer.append(...characters);
  maxPage = data.info.pages

  updatePagination();
};


const updatePagination = () => {
  pagination.textContent = `Page ${page} of ${maxPage}`;
}
updatePagination();


nextButton.addEventListener('click', () => {
  page = (page < maxPage) ? page + 1 : page;
  fetchCharacters();
});

prevButton.addEventListener('click', () => {
  page = (page > 1) ? page - 1 : page;
  fetchCharacters();
});

searchBarContainer.addEventListener('submit', (e) => {
  e.preventDefault();
  searchQuery = searchBar.value;
 //console.log(searchQuery)
  fetchCharacters();
});


fetchCharacters();