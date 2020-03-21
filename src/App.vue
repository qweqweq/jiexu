<template>
  <v-app style="background: #fff">
    <core-toolbar />
    <core-drawer />
    <core-view />
    <core-float-btn />
    <core-footer />
    <core-jiexu />
  </v-app>
</template>

<script>

  export default {
    name: 'App',
    components: {
      CoreDrawer: () => import('@/components/core/Drawer'),
      CoreFooter: () => import('@/components/core/Footer'),
      CoreToolbar: () => import('@/components/core/Toolbar'),
      CoreView: () => import('@/components/core/View'),
      CoreJiexu: () => import('@/components/core/Jiexu'),
      CoreFloatBtn: () => import('@/components/core/FloatBtn')
    },
    data () {
      return {
        //
      };
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
