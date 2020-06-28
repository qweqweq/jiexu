<template>
  <div id="class">
    <background-img>
      <div class="normalHeader">
        <banner
          v-if="banner && banner.imgLink"
          :src="banner.imgLink"
          :query="BANNER_KEY && BANNER_KEY.schedulepage"
        />
        <!-- <div class="nhCover" /> -->
      </div>
    </background-img>
    <v-card-text
      center
      class="font-weight-bold header"
    >
      杰旭课程安排表
    </v-card-text>
    <v-layout
      class="normalContainer"
      flex
      align-center
      justify-center
    >
      <v-tabs
        grow
        background-color="indigo"
        dark
        class="pa-3"
        style="flex:1"
      >
        <v-tab
          v-for="(item, i) in schedules"
          :key="i"
          :href="`#tab-${i}`"
          @click="tabItemClick"
        >
          {{ item.title }}
        </v-tab>
        <v-tab-item
          v-for="(data, i) in schedules"
          :key="i"
          :value="`tab-${i}`"
        >
          <div
            style="display: flex; margin-top: 20px;"
            align-center
            justify-center
          >
            <v-list
              style="flex: 1; max-width: 200px;"
              subheader
            >
              <v-list-tile
                v-for="(elem, index) in data.subClasses"
                :key="index"
                :style="customListStyle(index)"
                light
                class="list-tile"
                @click="listItemClick(index)"
              >
                <v-list-tile-content>
                  <v-list-tile-title v-text="elem.title" />
                  <v-divider :key="index" />
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <v-card style="flex: 3">
              <v-data-table
                hide-headers
                hide-actions
                :items="data.subClasses[activeIndex] && data.subClasses[activeIndex].tableData"
                :item-key="''+i"
                class="elevation-1"
              >
                <template v-slot:items="props">
                  <tr :style="customTabStyle(props.item)">
                    <td style="background: #6b758d; color: #fff;">
                      {{ props.item.rowkey }}
                    </td>
                    <td class="text-xs-center">
                      {{ props.item.day1 }}
                    </td>
                    <td class="text-xs-center">
                      {{ props.item.day2 }}
                    </td>
                    <td class="text-xs-center">
                      {{ props.item.day3 }}
                    </td>
                    <td class="text-xs-center">
                      {{ props.item.day4 }}
                    </td>
                  </tr>
                </template>
              </v-data-table>
              <div v-if="data.subClasses[activeIndex]">
                <v-card-text class="title_blod font18">
                  上课时间：
                </v-card-text>
                <v-card-text>{{ data.subClasses[activeIndex].time }}</v-card-text>
                <v-card-text class="title_blod font18">
                  上课地点：
                </v-card-text>
                <v-card-text v-html="data.subClasses[activeIndex].address" />
                <v-card-text class="title_blod font18">
                  注意事项：
                </v-card-text>
                <v-card-text v-html="data.subClasses[activeIndex].notice" />
              </div>
            </v-card>
          </div>
        </v-tab-item>
      </v-tabs>
    </v-layout>
  </div>
</template>

<script>
  import { onResize } from '../mixin/mixin';
  import { mapState, mapGetters, mapActions } from 'vuex';
  export default {
    name: 'Schedule',
    components: {
      Banner: () => import('@/components/base/Banner'),
      BackgroundImg: () => import('@/components/base/BackgroundImg')
    },
    mixins: [onResize],
    data () {
      return {
        activeIndex: 0
      };
    },
    computed: {
      ...mapState(['BANNER_KEY']),
      ...mapGetters(['schedulePage']),
      banner () {
        return this.schedulePage && this.schedulePage.bannerImg;
      },
      schedules () {
        return this.schedulePage && this.schedulePage.schedules;
      }
    },
    mounted: function () {
      this.aspectRatio = this.$data.aspectRatio;
      this.fetchSchedules();
    },
    methods: {
      ...mapActions(['fetchSchedules']),
      tabItemClick () {
        this.activeIndex = 0;
      },
      listItemClick (index) {
        this.activeIndex = index;
      },
      customListStyle (index) {
        return index === this.activeIndex ? 'background-color: #00acee; color: #fff;' : '';
      },
      customTabStyle (item) {
        return `background-color: ${!item.rowkey ? '#e3e6e8' : ''}`;
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
.normalContainer {
  padding-top: 0px !important;
}
.header{
  text-align: center;
  font-size: 22px;
}
.list-tile:hover{
  background-color: #00acee;
}
.title_blod {
  font-weight: bold;
}
.font18 {
  font-size: 18px;
}
</style>
