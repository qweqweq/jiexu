import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Active from './views/Active.vue';
import Channel from './views/Channel.vue';
import Project from './views/Project.vue';
import School from './views/School.vue';
import Style from './views/Style.vue';
import Class from './views/Class.vue';
import About from './views/About.vue';
import SchoolDetail from './views/SchoolDetail.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/active_consult',
            name: 'active',
            component: Active
        },
        {
            path: '/remark_channel',
            name: 'channel',
            component: Channel
        },
        {
            path: '/project_intr',
            name: 'project',
            component: Project
        },
        {
            path: '/college_guide',
            name: 'school',
            component: School
        },
        {
            path: '/famous_style',
            name: 'style',
            component: Style
        },
        {
            path: '/curriculum_stru',
            name: 'class',
            component: Class
        },
        {
            path: '/about_jiexu',
            name: 'about',
            component: About
        },
        {
            path: '/school_detail/:id',
            name: 'detail',
            component: SchoolDetail
        }

    ]
});
