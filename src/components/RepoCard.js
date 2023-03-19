class RepoCard {
  constructor({name, url, description, language, owner, ownerAvatar }, templateSelector) {
    this._name = name;
    this._url = url;
    this._description = description;
    this._language = language;
    this._owner = owner;
    this._ownerAvatar = ownerAvatar;
  }

  _getTemplate() {
    return (
      document
        .querySelector('#repo-card')
        .content
        .querySelector('.results__item')
        .cloneNode(true)
    );
  }

  createRepoCard() {
    this._element = this._getTemplate();

    console.log(this)

    const nameElem = this._element.querySelector('.card__repo-link');
    const descriptionElem = this._element.querySelector('.card__description');
    const languageElem = this._element.querySelector('.card__language');
    const ownerElem = this._element.querySelector('.card__author');
    const ownerAvatarElem = this._element.querySelector('.card__author-avatar');

    nameElem.textContent = this._name;
    nameElem.href = this._url;
    ownerElem.textContent = this._owner;
    ownerAvatarElem.src = this._ownerAvatar;
    ownerAvatarElem.alt = this._owner;

    this._description
      ? descriptionElem.textContent = this._description
      : descriptionElem.textContent = '';

    this._language
      ? languageElem.textContent = this._language
      : languageElem.textContent = '';

    return this._element;
  }
}

export default RepoCard;