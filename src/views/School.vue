<template>
  <div id="school">
    <background-img>
      <div class="normalHeader">
        <banner :src="`${ORIGIN}/school/schoolguide_bg.jpg`" />
        <div class="nhCover" />
      </div>
    </background-img>
    <v-container>
      <school-card :list="schools" />
    </v-container>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex';
  import ORIGIN from '@/data/global.js';
  export default {
    name: 'School',
    components: {
      Banner: () => import('@/components/base/Banner'),
      BackgroundImg: () => import('@/components/base/BackgroundImg'),
      SchoolCard: () => import('@/components/base/SchoolCard')
    },
    data () {
      return {
        ORIGIN
      };
    },
    computed: {
      ...mapGetters(['schools'])
    },
    mounted() {
      this.fetchSchools();
    },
    methods: {
      ...mapActions(['fetchSchools']),
    }
  };
</script>
