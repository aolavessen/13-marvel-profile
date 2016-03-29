'use strict';
export default class SeriesInfoView {
  constructor(element, data) {
    this.element = element;
    this.data = data;

    this.renderMainImage();
    this.renderTitle();
    this.renderMainPicYears();
    this.renderCreaters();
  }
  renderMainImage() {
    this.element.querySelector(`.main-pic`).innerHTML =
  `<img class="main-pic__image" src="${this.data.thumbnail.path}.${this.data.thumbnail.extension}" alt="">`;
  }
  renderTitle() {
    this.element.querySelector(`.main-pic__heading`).innerText = this.data.title;
  }

  renderMainPicYears() {
    this.element.querySelector(`.main-pic__years`).innerText = `${this.data.startYear} - ${this.data.endYear}`;
  }

  renderCreaters() {
    this.data.creators.items.forEach((creator) => {
      const creatorList = document.querySelector(`.creator-names`);
      const creatorEl = document.createElement(`p`);
      creatorEl.innerText = creator.name;
      creatorList.appendChild(creatorEl);
      // Make a new `li` to represent a creator
      // Fill in the creator li with the creator name
      // Append the li to the creators list
    });
  }

}
