<template>
  <div id="about">
    <background-img>
      <div class="normalHeader">
        <banner :src="`${ORIGIN}/about_bg.jpg`" />
        <div class="nhCover" />
      </div>
    </background-img>
    <v-layout
      class="normalContainer"
      flex
      align-center
      justify-center
    >
      <v-img
        :src="`${ORIGIN}/about.jpg`"
        height="100%"
        width="100%"
        contain
        :aspect-ratio="aspectRatio"
      />
    </v-layout>
  </div>
</template>

<script>
  import ORIGIN from '@/data/global.js';
  import { onResize } from '../mixin/mixin';
  export default {
    name: 'About',
    components: {
      Banner: () => import('@/components/base/Banner'),
      BackgroundImg: () => import('@/components/base/BackgroundImg')
    },
    mixins: [onResize],
    data () {
      return {
        ORIGIN
      };
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
