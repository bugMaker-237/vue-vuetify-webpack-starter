import './style.scss';
import Vue from 'vue';
import Component from "vue-class-component";
import template from './template.html';
import VueApp from '../../config';
import ContactsService from '../../services/ContactService';

import logo from '_img/bugmaker-logo.png';

@Component({
    template: template

})
export default class ToolbarComponent extends Vue {
    logo = logo;
    drawer = true;
    menu = false;
    search = "";
    items = [];

    created() {
        this.items = ContactsService.getCurrentContacts();
    }
    get filteredItems() {
        if (this.search !== null && this.search !== "" && typeof this.search !== "undefined")
            return this.items.filter(item => {
                return item.name.first.toLowerCase().indexOf(this.search.toLowerCase()) > -1 || item.name.last.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
            })
        else
            return this.items
    }

    setDrawer() {
        VueApp.$emit('toggleLeftDrawer');
    }
    viewContact(ct) {
        VueApp.$emit('contactDetail', ct);
    }
}