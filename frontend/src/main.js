import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueSocketio from 'vue-socket.io'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueSocketio, 'http://localhost:3000');

Vue.http.options.root = 'http://localhost:3000';

new Vue({
    el : '#app',
    render : h => h(App),
    components : {

    }
});