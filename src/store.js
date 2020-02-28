import Vue from 'vue';
import Vuex from 'vuex';
import { channels, projects, items, teachers, shcools } from './data/mutable';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        articles: require('@/data/articles.json'),
        drawer: false,
        channels,
        projects,
        items,
        teachers,
        shcools
    },
    getters: {
        categories: state => {
            const categories = [];

            for (const article of state.articles) {
                if (
                    !article.category ||
          categories.find(category => category.text === article.category)
                ) continue;

                const text = article.category;

                categories.push({
                    text,
                    to: `/category/${text}`
                });
            }

            return categories.sort().slice(0, 4);
        },
        links: (state) => state.items,
        projects: (state) => state.projects,
        channels: (state) => state.channels,
        teachers: (state) => state.teachers,
        shcools: (state) => state.shcools
    },
    mutations: {
        setDrawer: (state, payload) => (state.drawer = payload),
        toggleDrawer: state => (state.drawer = !state.drawer)
    },
    actions: {

    }
});
