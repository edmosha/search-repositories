class SearchValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._errorElementSelector = config.errorElementSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._formElement = formElement;
  }

  _showInputError(inputElem, errorMessage) {
    inputElem.classList.add(this._inputErrorClass);
    this._errorElem.textContent = errorMessage;
  }

  _hideInputError(inputElem) {
    inputElem.classList.remove(this._inputErrorClass);
    this._errorElem.textContent = '';
  }

  _isValid(inputElem) {
    if (!inputElem.validity.valid) {
      this._showInputError(inputElem, inputElem.validationMessage);
    } else {
      this._hideInputError(inputElem);
    }
  }

  _toggleButtonState() {
    if (!this._inputElem.validity.valid) {
      this._buttonElem.classList.add(this._inactiveButtonClass);
      this._buttonElem.setAttribute('disabled', 'true');

    } else {
      this._buttonElem.classList.remove(this._inactiveButtonClass);
      this._buttonElem.removeAttribute('disabled');
    }
  }

  _setEventListener() {

    this._inputElem = this._formElement.querySelector(this._inputSelector);
    this._buttonElem = this._formElement.querySelector(this._submitButtonSelector);
    this._errorElem = this._formElement.querySelector(this._errorElementSelector);

    this._toggleButtonState();

    this._inputElem.addEventListener('input', () => {
        this._isValid(this._inputElem);
        this._toggleButtonState();
      })
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputElem.value = '';
  }

  enableValidation() {
    this._setEventListener();
  }
}

export default SearchValidator;