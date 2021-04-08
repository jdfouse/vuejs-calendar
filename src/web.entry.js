import './style.scss';

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');
let events = window.__INITIAL_STATE__.map(event => {
  return {
    description: event.description,
    date: moment(event.date)
  }
});
//vue instance from entry.js
import VueCalendar from './entry';
//no el prop use $mount to pass in the el selector.
VueCalendar(events).$mount('#app');