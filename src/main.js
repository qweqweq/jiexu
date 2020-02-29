import Vue from 'vue';
import './plugins/vuetify';
import './plugins/base';
import './plugins/icon';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

router.afterEach(route => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
