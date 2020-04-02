import Vue from 'vue';
import Vuex from 'vuex';
import { channels, projects, items, teachers, shcools, homeProjects, schoolDetails } from './data/mutable';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        drawer: false,
        channels,
        projects,
        items,
        teachers,
        shcools,
        homeProjects,
        schoolDetails
    },
    getters: {
        links: (state) => state.items,
        projects: (state) => state.projects,
        channels: (state) => state.channels,
        teachers: (state) => state.teachers,
        shcools: (state) => state.shcools,
        homeProjects: (state) => state.homeProjects,
        schoolDetails: (state) => state.schoolDetails
    },
    mutations: {
        setDrawer: (state, payload) => (state.drawer = payload),
        toggleDrawer: state => (state.drawer = !state.drawer)
    },
    actions: {

    }
});
