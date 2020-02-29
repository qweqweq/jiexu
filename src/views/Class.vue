<template>
  <div id="class">
    <background-img>
      <div class="normalHeader">
        <banner src="imgs/class_bg.jpg" />
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
        :src="require('@/assets/imgs/class_arrange.png')"
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
  export default {
    name: 'Class',
    components: {
      Banner: () => import('@/components/base/Banner'),
      BackgroundImg: () => import('@/components/base/BackgroundImg')
    },
    mixins: [onResize],
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
