import Vue from 'vue';
import VueRouter from 'vue-router';
import Redirect from '../views/Redirect.vue';
import Index from '../views/Index.vue';
import Browse from '../views/search.vue';
import Artist from '../components/album.vue';
import Search from '../components/artist.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/redirect', component: Redirect },
    { path: '/', component: Index },
    { path: '/search', component: Browse ,children: [
        { path: 'album', component: Artist },
        { path: 'artist', name: 'search', component: Search, props: true},] },
    
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
