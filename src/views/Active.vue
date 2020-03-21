<template>
  <div id="active">
    <background-img>
      <div class="normalHeader">
        <banner :src="`${ORIGIN}/active/active_bg1.jpg`" />
        <div class="nhCover" />
      </div>
    </background-img>
    <market-ads />
  </div>
</template>

<script>
  import ORIGIN from '@/data/global.js';
  export default {
    name: 'Active',
    components: {
      Banner: () => import('@/components/base/Banner'),
      BackgroundImg: () => import('@/components/base/BackgroundImg'),
      MarketAds: () => import('@/components/base/MarketAds')
    },
    data(){
      return {
        ORIGIN
      }
    }
  };
</script>
