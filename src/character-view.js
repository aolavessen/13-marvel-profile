`use strict`;

export default class CharacterView {

  constructor(data) {
    this.element = document.createElement(`div`);
    this.element.classList.add(`character`);

    this.element.innerHTML =
    `<div class="characters-pic"></div>
     <p class="characters-name"><p>`;

     this.data = data;

     this.renderCharacterPic();
  }

  renderCharacterPic() {
    this.element.querySelector(`.character-pic`).innerHTML =
    `<img class="character-pic__image" src="${this.data.thumbnail.path}.${this.data.thumbnail.extension}" alt="">`
  }
}
