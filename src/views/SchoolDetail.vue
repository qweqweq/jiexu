<template>
  <div
    id="detail"
    flex
    column
  >
    <background-img>
      <div class="normalHeader">
        <banner :src="`${ORIGIN}/school/schoolguide_bg.jpg`" />
        <div class="nhCover" />
      </div>
    </background-img>
    <v-flex
      style="padding: 0 18%;"
    >
      <v-img
        v-if="details.headerImg"
        height="100%"
        width="100%"
        contain
        :src="`${ORIGIN}/detail/${details.headerImg}`"
        :aspect-ratio="aspectRatio"
      />
      <v-card-text class="title_blod font18">
        {{ details.title }}
      </v-card-text>
      <template v-if="Array.isArray(details.desc)">
        <v-card-text
          v-for="(ele, index) in details.desc"
          :key="`desc_${index}`"
        >
          {{ ele }}
        </v-card-text>
      </template>
      <v-card-text v-else>
        {{ details.desc }}
      </v-card-text>
      <v-card
        v-for="(ele, k) in details.projects"
        :key="k"
        tile
        style="margin-bottom: 20px; padding: 8px 16px;"
      >
        <v-card-text class="title_blod font16">
          {{ ele.secondTitle }}
        </v-card-text>
        <v-img
          v-if="ele.secondImg"
          :src="`${ORIGIN}/detail/${ele.secondImg}`"
        />
        <v-flex
          v-for="(data, j) in ele.secondDesc"
          :key="j"
        >
          <v-card-text
            v-if="data.title"
            class="title_blod"
          >
            {{ data.title }}
          </v-card-text>
          <v-card-text>{{ data.desc }}</v-card-text>
        </v-flex>
        <v-img
          v-if="ele.thirdImg"
          :src="`${ORIGIN}/detail/${ele.thirdImg}`"
        />
      </v-card>
    </v-flex>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  import ORIGIN from '@/data/global.js';
  import { onResize } from '../mixin/mixin';
  export default {
    name: 'SchoolDetail',
    components: {
      Banner: () => import('@/components/base/Banner'),
      BackgroundImg: () => import('@/components/base/BackgroundImg')
    },
    mixins: [onResize],
    data () {
      return {
        ORIGIN,
        details: []
      };
    },
    computed: {
      ...mapGetters(['schoolDetails'])
    },
    mounted: function () {
      this.aspectRatio = this.$data.aspectRatio;
      this.details = this.schoolDetails[+this.$route.params.id];
      console.log(this.details);
    }
  };
</script>
<style lang="less">
.title_blod {
  font-weight: bold;
}
.font18 {
  font-size: 18px;
}
.font16 {
  font-size: 16px;
}
</style>
