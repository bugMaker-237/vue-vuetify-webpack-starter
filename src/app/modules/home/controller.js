import './style.scss';
import Vue from 'vue';
import Component from "vue-class-component";
import template from './template.html';
import ContactsService from '../../services/ContactService';
import VueApp from '../../config';

@Component({
    template: template,
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.items = ContactsService.getCurrentContacts();
        })
    }
})
export default class HomeController extends Vue {
    dialog = null;
    items = null;
    contactDetail = false;
    currentContact = {
        name: {}
    };

    viewContact(ct) {
        VueApp.$emit('contactDetail', ct);
    }
}