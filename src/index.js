'use strict';
import ComicsListView from 'comics-list-view';
import SeriesInfoView from 'series-info-view';
import CharacterListView from 'character-list-view';
const id = 563;

export default function () {
  fetch(`http://gateway.marvel.com:80/v1/public/series/${id}?apikey=68706a532b6461683940ee2900eeccb5`)
    .then((response) => response.json())
    .then((info) => {
      const element = document.querySelector(`.series-details-sidebar`);
      const profile = new SeriesInfoView(element, info.data.results[0]);
    });

  fetch(`http://gateway.marvel.com:80/v1/public/series/${id}/characters?apikey=68706a532b6461683940ee2900eeccb5`)
    .then((response) => response.json())
    .then((info) => {
      const element = document.querySelector(`.characters`);
      const character = new CharacterListView(element, info.data.results);
    });

  fetch(`http://gateway.marvel.com:80/v1/public/series/${id}/comics?apikey=68706a532b6461683940ee2900eeccb5`)
      .then((response) => response.json())
      .then((info) => {
        const element = document.querySelector(`.comics`);
        const comic = new ComicsListView(element, info.data.results);
      });
}
