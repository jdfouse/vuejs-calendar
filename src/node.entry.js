//vue instance from entry.js
import VueCalendar from './entry';

export default function (context) {
    return VueCalendar(context.events);
}