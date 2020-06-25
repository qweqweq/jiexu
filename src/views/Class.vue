<template>
  <div id="class">
    <background-img>
      <div class="normalHeader">
        <banner
          v-if="banner.imgLink"
          :src="banner.imgLink"
          :query="BANNER_KEY && BANNER_KEY.channelpage"
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
        :aspect-ratio="1"
      />
    </v-layout>
  </div>
</template>

<script>
  import { onResize } from '../mixin/mixin';
  import { mapState, mapGetters } from 'vuex';
  export default {
    name: 'Class',
    components: {
      Banner: () => import('@/components/base/Banner'),
      BackgroundImg: () => import('@/components/base/BackgroundImg')
    },
    mixins: [onResize],
    computed: {
      ...mapState(['BANNER_KEY']),
      ...mapGetters(['classPage']),
      banner () {
        return this.classPage && this.classPage.bannerImg;
      },
      content () {
        return this.classPage && this.classPage.content;
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
  padding-top: 0px!important;
}
</style>
