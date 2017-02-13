import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App)
});

Vue.filter('truncate', function(value) {
  let length = 60;
  if (value.length <= length) {
    return value;
  }
  else {
    return value.substring(0, length) + '...';
  }
});
