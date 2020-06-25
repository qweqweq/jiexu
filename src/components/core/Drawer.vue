<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    light
    temporary
  >
    <v-list>
      <v-list-tile
        v-for="(link, i) in links"
        :key="i"
        @click="onClick($event, link)"
      >
        <v-list-tile-title v-text="link.text" />
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// Utilities
  import {
    mapGetters,
    mapMutations
  } from 'vuex';
  import { navLinkClick } from '@/mixin/mixin.js';
  export default {
    name: 'CoreDrawer',
    mixins: [ navLinkClick ],
    computed: {
      ...mapGetters(['links']),
      drawer: {
        get () {
          return this.$store.state.drawer;
        },
        set (val) {
          this.setDrawer(val);
        }
      }
    },
    methods: {
      ...mapMutations(['setDrawer']),
    }
  };
</script>
