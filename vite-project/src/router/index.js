import { createMemoryHistory, createRouter } from 'vue-router' 
import AppView from '../views/AppView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
    {   path: '',
        name: 'App',
        component: AppView
    },
    {   path: '/app',
        name: 'App',
        component: AppView
    },
    {   path: '/about',
        name: 'About',
        component: AboutView
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router