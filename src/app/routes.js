import {
    Routes as Routes
} from './modules/modules';
/**
 * 
 * @param {VueRouter} VueRouter 
 * @returns VueRouter
 */
export default function GetRoutes(VueRouter) {
    return new VueRouter({
        routes: Routes
    })
}