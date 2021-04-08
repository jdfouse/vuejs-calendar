import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment-timezone';
moment.tz.setDefault('UTC');
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentYear: 2021,
        currentMonth: 4,
        eventFormPosX: 0,
        eventFormPosY: 0,
        eventFormActive: false,
        events: [
                    { description: 'rando event', date: moment() },
                    { description: 'rando event 2', date: moment() },
                    { description: 'rando event 3', date: moment() },
        ],
        eventFormDate: moment()
    },
    mutations: {
        setCurrentMonth(state, payload) {
            state.currentMonth = payload;
        },
        setCurrentYear(state, payload) {
            state.currentYear = payload
        },
        eventFormPos(state, payload) {
            state.eventFormPosX = payload.x;
            state.eventFormPosY = payload.y;
        },
        eventFormActive(state, payload) {
            state.eventFormActive = payload;
        },
        addEvent(state, payload) {
            state.events.push({
                description: payload,
                date: state.eventFormDate
            })
        },
        eventFormDate(state, payload) {
            state.eventFormDate = payload;
        }
    }
});