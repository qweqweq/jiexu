<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list rounded>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            :link="item.link"
            router
            exact
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :value="showAppBar" :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-toolbar color="white">
      <v-toolbar-title v-text="title">111</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019 杰旭教育MBA</span>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      showAppBar: false,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: '首页',
          to: '/'
        },
        {
          icon: 'mdi-apps',
          title: '活动资讯',
          to: '/active—consult'
        },
        {
          icon: 'mdi-apps',
          title: '备考通道',
          to: '/remark-channel'
        },
        {
          icon: 'mdi-apps',
          title: '项目介绍',
          to: '/project-intr'
        },
        {
          icon: 'mdi-apps',
          title: '院校指南',
          to: '/college-guide'
        },
        {
          icon: 'mdi-apps',
          title: '名校风采',
          to: '/famous-style'
        },
        {
          icon: 'mdi-apps',
          title: '课程体系',
          to: '/curriculum-stru'
        },
        {
          icon: 'mdi-apps',
          title: '杰旭网校',
          to: 'http://school.jiexuedu.com/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: '关于杰旭',
          to: '/about-jiexu'
        }
      ],
      miniVariant: false,
      title: 'Vuetify.js'
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      if (window.innerWidth > 960) {
        this.showAppBar = false
      } else {
        this.showAppBar = true
      }
    }
  }
}
</script>
