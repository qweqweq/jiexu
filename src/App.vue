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
