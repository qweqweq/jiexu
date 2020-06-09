import Vue from 'vue';
import Vuex from 'vuex';
import {
  channels,
  projects,
  items,
  teachers,
  shcools,
  homeProjects,
  schoolDetails
} from './data/mutable';
import getChannels from '@/graphql/channels.js';
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
    toggleDrawer: state => (state.drawer = !state.drawer),
    updateState: (state, payload) => (state.channels = payload)
  },
  actions: {
    fetchChannels: async ({
      commit
    }) => {
      getChannels()
        .then((res) => {
          if (res) {
            res.channels.forEach(item => {
              item.imgUrl = `http://localhost:1337` + item.imgUrl.url;
            });
            commit('updateState', res.channels);
          }
        });
    }
  }
});
