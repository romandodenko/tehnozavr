import Vue from 'vue';
import App from './App.vue';
// import { messageOne, messageTwo } from './homework-file-1';
// import functionHomework from './homework-file-2';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

// functionHomework(messageOne);
// functionHomework(messageTwo);
