<template>
  <v-app style="background: #fff">
    <core-toolbar />
    <core-drawer />
    <core-view />
    <core-footer :items="links" :wxImgs="wxImgs" />
    <core-jiexu />
  </v-app>
</template>

<script>
  import { mapGetters, mapActions, mapState } from 'vuex';
  export default {
    name: 'App',
    components: {
      CoreDrawer: () => import('@/components/core/Drawer'),
      CoreFooter: () => import('@/components/core/Footer'),
      CoreToolbar: () => import('@/components/core/Toolbar'),
      CoreView: () => import('@/components/core/View'),
      CoreJiexu: () => import('@/components/core/Jiexu')
    },
    computed: {
      ...mapState(['wxImgs']),
      ...mapGetters(['links'])
    },
    mounted () {
      this.fetchLinks();
      this.fetchBanners();
    },
    methods: {
      ...mapActions(['fetchLinks', 'fetchBanners'])
    }
  };
</script>
<style>
  html,body {
    height: 100%;
    font-family: Helvetica Neue,Helvetica,Hiragino Sans GB,Microsoft YaHei,\5FAE软雅黑,Arial,sans-serif;
  }
  * {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  .clearfix:after {
    content: " ";
    display: block;;
    line-height: 0;
    height: 0;
    visibility: hidden;
    clear: both;
  }
  </style>
