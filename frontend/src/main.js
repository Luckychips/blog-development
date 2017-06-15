import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueSocketio from 'vue-socket.io'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueSocketio, 'http://localhost:3000');

Vue.http.options.root = 'http://localhost:3000';

import PageList from './pages/List.vue'
import PageWrite from './pages/Write.vue'

const router = new VueRouter({
    routes : [
        {path : '/', name : 'list', component : PageList},
        {path : '/write', name : 'write', component : PageWrite},
        {path : '*', redirect : '/'}
    ]
});

new Vue({
    el : '#app',
    router : router,
    render : h => h(App),
    components : {
    }
});