'use strict';

export default class ComicView {
  constructor(data) {
    this.element = document.createElement(`div`);
    this.element.classList.add(`comic`);

    this.element.innerHTML =
    `<div class="comic-pic">
      <img class="generic" src="${data.thumbnail.path}.${data.thumbnail.extension}" alt=""/>
    </div>
    <div class="comic-number">${data.issueNumber}</div>
    <div class="comic-name">${data.title}</div>
    <button class="read-more">Read More</button>
    <div class="modal">
      <div class="modal-card">
      <button class="close-button">X</button>
      <p class="modal-text">${data.description}</p>
      </div>
    </div>
    `;

    this.data = data;
  }

}
