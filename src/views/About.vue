<template>
  <div id="about">
    <background-img>
      <div class="normalHeader">
        <banner
          v-if="banner && banner.imgLink"
          :src="banner.imgLink"
          :query="BANNER_KEY && BANNER_KEY.about_ads"
        />
        <!-- <div class="nhCover" /> -->
      </div>
    </background-img>
    <v-layout
      class="normalContainer"
      flex
      align-center
      justify-center
    >
      <v-img
        v-if="content.imgLink"
        :src="content.imgLink"
        height="100%"
        width="100%"
        contain
        :aspect-ratio="aspectRatio"
      />
    </v-layout>
  </div>
</template>

<script>
  import { onResize } from '../mixin/mixin';
  import { mapState, mapGetters } from 'vuex';
  export default {
    name: 'About',
    components: {
      Banner: () => import('@/components/base/Banner'),
      BackgroundImg: () => import('@/components/base/BackgroundImg')
    },
    mixins: [onResize],
    computed: {
      ...mapState(['BANNER_KEY']),
      ...mapGetters(['aboutPage']),
      banner () {
        return this.aboutPage && this.aboutPage.bannerImg;
      },
      content () {
        return this.aboutPage && this.aboutPage.content;
      }
    },
    mounted: function () {
      this.aspectRatio = this.$data.aspectRatio;
    }
  };
</script>
<style lang="less">
.normalHeader{
  position: relative;
  width: 100%;
  & .nhCover{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #0d3080;
    opacity: 0.8;
    mix-blend-mode: multiply;
  }
}
.normalContainer{
  padding: 90px 0;
}
</style>
