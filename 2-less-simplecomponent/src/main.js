import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import FastClick from 'fastclick';

Vue.use(VueRouter);

FastClick.attach(document.body);

const router = new VueRouter({
	//default to hash, availble value[hash, history]
    mode: 'hash',
    
	base: '/noteapp/2-less-simplecomponent',
	
    // （缩写）相当于 routes: routes
    routes
});

const app = new Vue({
    router
}).$mount('#app');