import './style.scss';
import Vue from 'vue';
import Component from "vue-class-component";
import template from './template.html';

@Component({
    template: template
})
export default class ApplicationController extends Vue {
    dialog = false;
    drawer = null;
    source = "";
}