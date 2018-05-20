import './style.scss';
import Vue from 'vue';
import Component from "vue-class-component";
import template from './template.html';
import VueApp from '../../config';

@Component({
    template: template
})
export default class ContactDetailComponent extends Vue {
    contactDetail = false;
    contact = {
        name: {}
    };
    mounted() {
        VueApp.$on(
            'contactDetail',
            (ct) => {
                this.contact = ct[0];
                this.contactDetail = !this.contactDetail;
            }
        )
    }
}