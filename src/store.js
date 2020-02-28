import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        articles: require('@/data/articles.json'),
        drawer: false,
        items: [
            {
                icon: 'mdi-apps',
                text: '活动资讯',
                to: '/active_consult'
            },
            {
                icon: 'mdi-apps',
                text: '备考通道',
                to: '/remark_channel'
            },
            {
                icon: 'mdi-apps',
                text: '项目介绍',
                to: '/project_intr'
            },
            {
                icon: 'mdi-apps',
                text: '院校指南',
                to: '/college_guide'
            },
            {
                icon: 'mdi-apps',
                text: '名师风采',
                to: '/famous_style'
            },
            {
                icon: 'mdi-apps',
                text: '课程体系',
                to: '/curriculum_stru'
            },
            {
                icon: 'mdi-apps',
                text: '杰旭网校',
                href: 'http://school.jiexuedu.com/'
            },
            {
                icon: 'mdi-chart-bubble',
                text: '关于杰旭',
                to: '/about_jiexu'
            }
        ]
    },
    getters: {
        categories: state => {
            const categories = []

            for (const article of state.articles) {
                if (
                    !article.category ||
          categories.find(category => category.text === article.category)
                ) continue

                const text = article.category

                categories.push({
                    text,
                    to: `/category/${text}`
                })
            }

            return categories.sort().slice(0, 4)
        },
        links: (state) => {
            return state.items
        }
    },
    mutations: {
        setDrawer: (state, payload) => (state.drawer = payload),
        toggleDrawer: state => (state.drawer = !state.drawer)
    },
    actions: {

    }
})
