

require('./bootstrap');

window.Vue = require('vue');



Vue.component('example-component', require('./components/ExampleComponent.vue'));

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
  })

const app = new Vue({
    el: '#app',
    router
});
