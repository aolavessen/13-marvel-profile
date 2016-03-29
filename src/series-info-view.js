`use strict`;
export default class SeriesInfoView {
  constructor(element, data) {
    this.element = element;
    this.data = data;

    this.renderMainImage();
    this.renderTitle();
    this.renderMainPicStartYear();
    this.renderMainPicEndYear();
    this.renderCreators();
  }
  renderMainImage() {
    this.element.querySelector(`.main-pic`).innerHTML =
    `<img class="title-pic" src="${this.data.thumbnail.path}.${this.data.thumbnail.extension}"
     alt="">`;}

  renderTitle() {
    this.element.querySelector(`.main-title`).innerText = this.data.title;
  }
}
