'use strict';

export default class CharacterView {

  constructor(data) {
    this.element = document.createElement(`div`);
    this.element.classList.add(`character`);

    this.element.innerHTML = `
      <div class="character__pic"></div>
      <h3 class="character__name"></h3>
    `;
    this.data = data;

    this.renderCharacterPic();
    // this.renderCharacterName();
    this.renderCharacterName();
  }

  renderCharacterPic() {
    this.element.querySelector(`.character__pic`).innerHTML =
    `<img class="characters-pic__image" src="${this.data.thumbnail.path}.${this.data.thumbnail.extension}" alt="">`;
  }
  renderCharacterName() {
    this.element.querySelector(`.character__name`).innerHTML = `<h3 class="character__name">${this.data.name}</h3>`;
  }
}
