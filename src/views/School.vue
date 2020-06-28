<template>
  <div id="school">
    <background-img>
      <div class="normalHeader">
        <banner
          v-if="banner && banner.imgLink"
          :src="banner.imgLink"
          :query="BANNER_KEY && BANNER_KEY.college_ads"
        />
        <!-- <div class="nhCover" /> -->
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
    mapActions,
    mapState
  } from 'vuex';
  export default {
    name: 'School',
    components: {
      Banner: () => import('@/components/base/Banner'),
      BackgroundImg: () => import('@/components/base/BackgroundImg'),
      SchoolCard: () => import('@/components/base/SchoolCard')
    },
    computed: {
      ...mapState(['BANNER_KEY']),
      ...mapGetters(['schools', 'schoolPage']),
      banner () {
        return this.schoolPage && this.schoolPage.bannerImg;
      }
    },
    mounted () {
      this.fetchSchools();
    },
    methods: {
      ...mapActions(['fetchSchools'])
    }
  };
</script>
