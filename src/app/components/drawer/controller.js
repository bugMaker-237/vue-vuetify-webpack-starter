import './style.scss';
import Vue from 'vue';
import Component from "vue-class-component";
import template from './template.html';
import VueApp from '../../config';
@Component({
    template: template,
})
export default class DrawerComponent extends Vue {
    drawer = null;
    items = [{
            icon: 'contacts',
            text: 'Team'
        },
        {
            icon: 'apps',
            text: 'Projects'
        },
        {
            icon: 'keyboard_arrow_up',
            'icon-alt': 'keyboard_arrow_down',
            text: 'More',
            model: false,
            children: [{
                    text: 'Import'
                },
                {
                    text: 'Export'
                },
                {
                    text: 'Print'
                },
                {
                    text: 'Undo changes'
                },
                {
                    text: 'Other contacts'
                }
            ]
        },
        {
            icon: 'settings',
            text: 'Settings'
        }
    ];
    mounted() {
        VueApp.$on(
            'toggleLeftDrawer',
            () => {
                this.drawer = !this.drawer;
            }
        )
    }
}