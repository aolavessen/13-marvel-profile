'use strict';


/* global require */
import SeriesInfoView from 'series-info-view';

export default function () {
  fetch(`http://gateway.marvel.com:80/v1/public/characters?name=howard%20the%20duck&apikey=68706a532b6461683940ee2900eeccb5`)
    .then((response) => response.json())
    .then((info) => {
      const element = document.querySelector(`.left-sidebar`);
      const profile = new SeriesInfoView(element, info.data.results[0]);
    });
}
