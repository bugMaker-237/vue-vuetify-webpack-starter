import DrawerComponent from './drawer/controller';
import FooterComponent from './footer/controller';
import ToolbarComponent from './toolbar/controller';
import ContactDetailComponent from './ContactDetail/controller';
import Vue from 'vue';

export default function RegisterComponents() {
    Vue.component('app-toolbar', ToolbarComponent);
    Vue.component('app-drawer', DrawerComponent);
    Vue.component('app-footer', FooterComponent);
    Vue.component('contact-detail', ContactDetailComponent);
}