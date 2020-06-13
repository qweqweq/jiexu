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
import HOST from '@/graphql/env.js';
import {
  getHomePage, // 首页
  getChannels, // 备考通道
  getProjects, // 项目介绍
  getFooter // 页面通用底部
} from '@/graphql/api.js';

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
    updateChannels: (state, payload) => (state.channels = payload),
    updateProjects: (state, payload) => (state.projects = payload),
    updateHomePageProjects: (state, payload) => (state.homeProjects = payload),
    updateFooter: (state, payload) => (state.items = payload)
  },
  actions: {
    fetchHomePage: ({ commit }) => {
      getHomePage().then(res => {
        if (res) {
          commit('updateHomePageProjects', res.homePageProjects);
        }
      });
    },
    fetchChannels: ({ commit }) => {
      getChannels()
        .then((res) => {
          if (res) {
            res.channels.forEach(item => {
              item.imgUrl = HOST + item.imgUrl.url;
            });
            commit('updateChannel', res.channels);
          }
        });
    },
    fetchProjects: ({ commit }) => {
      getProjects().then(res => {
        if (res) {
          res.projects.forEach(item => {
            item.backImg = HOST + item.backImg.url;
            item.headImg = HOST + item.headImg.url;
          });
          debugger;
          commit('updateProjects', res.projects);
        }
      });
    },
    fetchFooter: ({ commit }) => {
      getFooter().then(res => commit('updateFooter', res.pageFooters));
    }
  }
});
