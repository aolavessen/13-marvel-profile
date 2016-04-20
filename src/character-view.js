'use strict';

export default class CharacterView {

  constructor(data) {
    this.element = document.createElement(`div`);
    this.element.classList.add(`character`);

    this.element.innerHTML = `
      <div class="character__pic"></div>
      <h3 class="character__name"></h3>
      <div id ="character-modal" class="character-modal--active character-modal">
      <div id="character-modal-card">
      <button class="character-close-button">X</button>
      <p class="character-modal-title">${data.name}</p>
      <p class="character-modal-text">${data.description}</p>
      </div>
    `;
    this.data = data;

    this.renderCharacterPic();

      //  this.renderCharacterName();
      // this.triggerCharacterModal();
  }

  renderCharacterPic() {
    this.element.querySelector(`.character__pic`).innerHTML =
    `<img class="characters-pic__image" src="${this.data.thumbnail.path}.${this.data.thumbnail.extension}" alt="">`;
  }
  renderCharacterName() {
    this.element.querySelector(`.character_name`).innerHTML = `<h3 class="character_name">${this.data.name}</h3>`;
  }
  triggerCharacterModal() {
    const character = this.element.querySelector(`.character_pic`);
    const characterClose = this.element.querySelector(`character-close-button`);
    const characterModal = this.element.querySelector(`#character-modal`);
    hero.addEventListener(`click`, () => {
      characterModal.classList.toggle(`character-modal--active`);
    });
    characterClose.addEventListener(`click`, () => {
      characterModal.classList.toggle(`character-modal--active`);
    });
  }
}
