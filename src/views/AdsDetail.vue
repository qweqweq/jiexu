<template>
  <div id="adsDetail">
    <background-img>
      <div class="normalHeader">
        <banner v-if="banner && banner.imgLink" :src="banner.imgLink" :canJump="false" />
        <!-- <div class="nhCover" /> -->
      </div>
    </background-img>
    <v-layout class="normalContainer" flex align-center justify-center style="flex-direction: column;">
      <img 
        v-if="pageData.imgUrl" :src="pageData.imgUrl"
        height="50%"
        width="50%"
        contain
        :aspect-ratio="aspectRatio"
       />
       <v-card-text v-html="pageData.desc" />
       <v-card-text v-html="pageData.detail" />
    </v-layout>
  </div>
</template>

<script>
import { onResize } from "../mixin/mixin";
import { mapGetters, mapState } from "vuex";
export default {
  name: "ads-detail",
  components: {
    Banner: () => import("@/components/base/Banner"),
    BackgroundImg: () => import("@/components/base/BackgroundImg")
  },
  mixins: [onResize],
  data() {
    return {
      pageData: {
        imgUrl: '',
        detail: '',
        desc: ''
      },
    }
  },
  watch: {
    adsDetailPage(newVal, oldVal) {
      if (newVal !== oldVal) this.pageData = this.getPageData();
    }
  },
  computed: {
    ...mapState(['banners']),
    ...mapGetters(["adsDetailPage"]),
    banner() {
      return this.adsDetailPage && this.adsDetailPage.bannerImg;
    },
    actives() {
      return this.adsDetailPage && this.adsDetailPage.actives;
    },
    answer () {
      return (this.adsDetailPage && this.adsDetailPage.answerImg) || {};
    },

  },
  mounted: function() {
    this.aspectRatio = this.$data.aspectRatio;
    this.pageData = this.getPageData();
  },
  methods: {
    getPageData() {
      const { index = 0, type } = this.$route.query || {};
      let imgUrl = '', desc = '', detail = '';
      if (type === 'active' && this.actives[index]) {
        imgUrl = this.actives[index].imgUrl;
        desc = this.actives[index].desc;
        detail = this.actives[index].adsDetail
      }
      if (type === 'answer') {
        imgUrl = this.answer.imgLink;
        detail = this.answer.adsDetail;
      }
      if (type === 'banner') {
        const result = this.banners.find(v => v.id === index);
        imgUrl = result.imgLink;
        detail = result.adsDetail;
      }
      return {
        imgUrl,
        desc,
        detail
      }
    }
  }
};
</script>
<style lang="less">
.normalHeader {
  position: relative;
  width: 100%;
  & .nhCover {
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
</style>
