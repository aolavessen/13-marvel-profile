'use strict';
import CharacterView from 'character-view';
export default class CharListView {
  constructor(element, characters) {
    this.element = element;
    this.characters = characters;

    this.renderNewCharacters();
  }

  renderNewCharacters() {
    this.characters.forEach((character) => {
      const charView = new CharacterView(character);
      this.element.appendChild(charView.element);
    });
  }
}
