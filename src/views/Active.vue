<template>
  <div id="active">
    <background-img>
      <div class="normalHeader">
        <banner
          v-if="banner.imgLink"
          :src="banner.imgLink"
          :query="BANNER_KEY && BANNER_KEY.active_ads"
        />
        <!-- <div class="nhCover" /> -->
      </div>
    </background-img>
    <market-ads :actives="actives" />
  </div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex';
  export default {
    name: 'Active',
    components: {
      Banner: () => import('@/components/base/Banner'),
      BackgroundImg: () => import('@/components/base/BackgroundImg'),
      MarketAds: () => import('@/components/base/MarketAds')
    },
    computed: {
      ...mapState(['BANNER_KEY']),
      ...mapGetters(['actives', 'activePage']),
      banner () {
        return this.activePage && this.activePage.bannerImg;
      }
    }
  };
</script>
