import '../sass/style.scss';
import RepoCard from "../components/RepoCard";
import { getRepositories } from "../utils/utils";
import Search from "../components/Search";
import SearchValidator from "../components/SearchValidator";

const resultsContainer = document.querySelector('.results__container');
const spinner = document.querySelector('.spinner');
const searchForm = document.querySelector('.search__form');


const search = new Search({
  handleFormSubmit: (searchQuery) => {

    resultsContainer.innerHTML = '';
    spinner.classList.add('spinner_visible');
    searchValidator.resetValidation();

    getRepositories(searchQuery).then(res => {

      if (res.length !== 0) {
        res.forEach(item => {
          const repoCard = new RepoCard(item, '#repo-card');
          resultsContainer.append(repoCard.createRepoCard())
        })
      }
      else {
        resultsContainer.insertAdjacentHTML(
          'afterbegin',
          '<li><p class="results__status">Ничего не найдено!</p></li>'
        )
      }
    })
      .catch(res => {
        resultsContainer.insertAdjacentHTML(
          'afterbegin',
          `<li><p class="results__status">Ошибка! ${res.errorText}</p></li>`
        )
      })
      .finally(() => spinner.classList.remove('spinner_visible'))
  }
}, '.search__form');

search.setEventListeners();


const searchValidator = new SearchValidator({
  inputSelector: '.search__input',
  submitButtonSelector: '.search__submit-btn',
  errorElementSelector: '.search__error',
  inactiveButtonClass: 'search__submit-btn_inactive',
  inputErrorClass: 'search__input_type_error',
}, searchForm);

searchValidator.enableValidation();





