import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
import ArticlesByCategory from '@/components/article/ArticlesByCategory'
import ArticleById from '@/components/article/ArticleById'
import Auth from '@/components/auth/auth'

import{userKey} from '@/global'

Vue.use(VueRouter)

const routes = [{
    name: 'Home',
    path: '/',
    component: Home
}, {
    name: 'AdminPages',
    path: '/admin',
    component: AdminPages,
    meta:{requiresAdmin: true}
},{
    name: 'ArticleByCategory',
    path: '/categories/:id/articles',
    component: ArticlesByCategory
},{
    name: 'ArticleById',
    path: '/articles/:id',
    component: ArticleById
},{
    name: 'Auth',
    path: '/Auth',
    component: Auth
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to,from,next)=>{
    const json = localStorage.getItem(userKey)

    if(to.matched.some(record => record.meta.requiresAdmin)){
        const user = JSON.parse(json)
        user && user.admin ? next() : next({path: '/'})
    }else{
        next()
    }
})

export default router 
