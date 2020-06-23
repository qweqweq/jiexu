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

  export default {
    name: 'CoreDrawer',
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
      onClick (e, item) {
        e.stopPropagation();
        if (this.isUrl(item.to)) {
          window.open(item.to, '_blank');
        } else {
          this.$router.push(item.to);
        }
        this.setDrawer(false);
      },
      isUrl (url) {
        return url.includes('http://');
      }
    }
  };
</script>
