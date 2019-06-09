
import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import './css/font-awesome.min.css'
import  VueResource from 'vue-resource';
Vue.use(VueResource)



// import  Bootstrap from 'bootstrap';
import router from './router.js'
import app from './Blog.vue';
import './js/navbar.js'
import './js/scroll.js'

var vm = new Vue({
	el: '#app',
	render: c =>c(app),
	router
});