import Vue from 'vue'
import App from './App.vue'

// We want production tips, so I've commented this out for now
// Vue.config.productionTip = false;

// Custom filter to capitalize text
Vue.filter('capitalize', function (value) {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

new Vue({
  render: h => h(App)
}).$mount('#app')
