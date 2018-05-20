import ApplicationController from './application/controller';
import HomeController from './home/controller';

export default {
    ApplicationController,
    HomeController
}
export const Routes = [{
    path: '/',
    component: ApplicationController,
    name: 'app',
    redirect: '/home',
    children: [{
        path: '/home',
        name: 'home',
        component: HomeController
    }]
}]