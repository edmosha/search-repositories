class Search {
  constructor({ handleFormSubmit }, formSelector) {
  this._element = document.querySelector(formSelector);
  this._input = this._element.querySelector('.search__input');
  this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValue() {
    return this._input.value;
  }

  setEventListeners() {
    this._element.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValue());
      })
  }
}

export default Search;