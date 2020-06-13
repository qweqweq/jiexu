<template>
  <div id="active">
    <background-img>
      <div class="normalHeader">
        <banner v-if="banner.imgLink" :src="banner.imgLink" />
        <div class="nhCover" />
      </div>
    </background-img>
    <market-ads />
  </div>
</template>

<script>
  export default {
    name: 'Active',
    components: {
      Banner: () => import('@/components/base/Banner'),
      BackgroundImg: () => import('@/components/base/BackgroundImg'),
      MarketAds: () => import('@/components/base/MarketAds')
    },
    computed: {
      banner() {
        return this.activePage && this.activePage.bannerImg
      }
    }
  };
</script>
