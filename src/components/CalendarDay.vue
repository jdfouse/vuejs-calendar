<template>
  <div :class="classObject" @click="captureClick">
    {{ day.format('D') }}
    <ul class="event-list">
      <li v-for="event in events">{{ event.description }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['day'],
  computed: {
    classObject() {
      let today = this.day.isSame(this.$moment(), 'day');
      return {
        day: true,
        today,
        past: this.day.isSameOrBefore(this.$moment(), 'day') && !today,
      };
    },
    events() {
      let mockData = [
        { description: 'rando event', date: this.$moment() },
        { description: 'rando event 2', date: this.$moment() },
        { description: 'rando event 3', date: this.$moment() },
      ];
      return mockData.filter((event) => event.date.isSame(this.day, 'day'));
    },
  },
  methods: {
    captureClick(event) {
      this.$store.commit('eventFormPos', {
        x: event.clientX,
        y: event.clientY,
      });
      this.$store.commit('eventFormActive', true);
    },
  },
};
</script>
