<template>
  <v-toolbar
    app
    flat
    color="#1867c0"
  >
    <view-headline
      class="hidden-md-and-up white--text font-22"
      @click="toggleDrawer"
    />
    <v-container
      mx-auto
      py-0
    >
      <v-layout>
        <v-img
          :src="require('@/assets/logo.png')"
          class="mr-5"
          contain
          height="48"
          width="48"
          max-width="48"
          @click="iconClcik"
        />
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          class="ml-0 hidden-sm-and-down"
          color="white"
          flat
          @click="onClick($event, link)"
        >
          {{ link.text }}
        </v-btn>
      </v-layout>
    </v-container>
  </v-toolbar>
</template>

<script>
// Utilities
  import {
    mapGetters,
    mapMutations
  } from 'vuex';

  export default {
    computed: {
      ...mapGetters(['links'])
    },
    methods: {
      ...mapMutations(['toggleDrawer']),
      onClick (e, item) {
        if (this.isUrl(item.to)) {
          window.open(item.to, '_blank');
        } else {
          this.$router.push(item.to);
        }
      },
      iconClcik () {
        this.$router.push('/');
      },
      isUrl (url) {
        return url.includes('http://');
      }
    }
  };
</script>
<style lang="less">
.font-22{
  font-size: 22px;
}
</style>
