import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import VueComponent from 'vue-class-component';

import VueApp from './config';

var app = VueApp.InitializeApp(Vue, Vuetify, VueRouter, VueComponent);

app.$mount('#app');