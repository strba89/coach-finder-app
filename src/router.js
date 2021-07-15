import { createRouter, createWebHistory } from 'vue-router';
import CoachList from './pages/coachs/List.page';
import Contact from './pages/requests/Contact.page'
import Registration from './pages/coachs/Registration.page';
import NotFound from './pages/NotFound.page';
import Requests from './pages/requests/Requests.page'
import Details from './pages/coachs/Details.page'
import TheDetailsItem from './components/coachs/TheDetailsItem.component'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect:'/coach'},
        { path: '/coach', component: CoachList },
        { path: '/coach/:id', component: Details, props:true,
            children:[
                { path: '', component: TheDetailsItem},
                { path: 'contact', component: Contact},
            ]
        },
        { path: '/requests', component: Requests },
        { path: '/registration', component: Registration },
        { path: '/:notFound(.*)', component: NotFound}
    ]
});

export default router;