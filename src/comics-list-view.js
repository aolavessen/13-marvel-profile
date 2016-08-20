'use strict';
import ComicView from 'comic-view';
export default class ComicsListView {
  constructor(element, comics) {
    this.element = element;
    this.comics = comics;

    this.renderNewComics();
  }
  renderNewComics() {
    this.comics.forEach((comic) => {
      const comView = new ComicView(comic);
      this.element.appendChild(comView.element);
    });
  }
}
