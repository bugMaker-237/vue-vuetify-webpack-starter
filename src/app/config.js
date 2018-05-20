import {
    default
    as
    colors
}
from 'vuetify/es5/util/colors';

import RegisterComponents from './components/Components';
import GetRoutes from './routes';

import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import VueComponent from 'vue-class-component';


var appInitialized = false;

export default class VueApp {
    /**
     * @type Vue
     */
    static VUEINSTANCE = undefined;

    /**
     * 
     * @param {Vue} Vue 
     * @param {Vuetify} Vuetify 
     * @param {VueRouter} VueRouter
     * @param {VueComponent} VueComponent
     */
    static InitializeApp(Vue, Vuetify, VueRouter, VueComponent) {
        if (!appInitialized) {

            Vue.use(Vuetify, {
                theme: {
                    primary: colors.blueGrey.darken4,
                    secondary: colors.blue.darken2,
                    accent: colors.shades.white,
                    error: colors.red.accent3
                }
            });
            Vue.use(VueRouter);

            RegisterComponents();

            var app = new Vue({
                router: GetRoutes(VueRouter)
            });
            this.vueInstance = app;
            appInitialized = true;

            return this.vueInstance;
        }
    }

    /**
     * 
     * @param {string | string[]} event 
     */
    static $on(event, callback) {
        VueApp.VUEINSTANCE.$on(event, callback);
    }
    /**
     * 
     * @param {string | string[]} event 
     * @param {...Object} args 
     */
    static $emit(event, ...args) {
        VueApp.VUEINSTANCE.$emit(event, args);
    }
    /**
     * 
     * @param {Vue} vueInstance 
     */
    static set vueInstance(value) {
        VueApp.VUEINSTANCE = value;
    }
    static get vueInstance() {
        return VueApp.VUEINSTANCE;
    }
}