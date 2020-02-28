<template>
  <div id="active">
    <background-img>
      <div class="normalHeader">
        <banner src="imgs/active/active_bg1.jpg" />
        <div class="nhCover" />
      </div>
    </background-img>
    <v-container class="lighten-5">
      <v-layout v-if="showDetail" row wrap no-gutters style="display: flex; justify-content: space-around">
        <v-flex
          v-for="(item, i) in actives"
          :key="i"
          style="width: 30%; margin-right: 8px; margin-top: 5px; min-width: 200px;"
        >
          <v-card
            class="pa-2"
            outlined
            tile
            @click="jumpToDetail()"
          >
            <v-card-text style="font-size: 18px;font-weight: bold;">{{item.title}}</v-card-text>
            <v-img :src="item.imgUrl"/>
            <v-card-text style="color: #0d3084;font-size: 15px;font-weight: bold;">{{item.header}}</v-card-text>
            <v-card-text>{{item.desc}}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout v-else></v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Active',
    components:{
      Banner: () => import("@/components/base/Banner"),
      BackgroundImg: () => import("@/components/base/BackgroundImg")
    },
    data () {
      return {
        actives: [
          { title: '杰旭面试班', imgUrl: require('@/assets/imgs/active/active1.jpg'), header: '杰旭面试班，面试优秀的保障', desc: '学历背景不好，有机会面试拿优秀吗？ 没有管理经验，有机会面试拿优秀吗？ 机遇和挑战并存，成功永远只眷顾有所准备的人。'},
          { title: '杰旭全程班', imgUrl: require('@/assets/imgs/active/active2.jpg'), header: '备战2021，杰旭启航班正式开班', desc: '学习，何时开始都不算晚， 备考，何时开始都不算早。 名校，其实离你不算遥远， 杰旭，备战2021正式启航。'},
          { title: '名校招生政策宣讲会', imgUrl: require('@/assets/imgs/active/active3.jpg'), header: '一场讲座，改变你的命运', desc: ' 报考在职研究生的要求是什么？ 如何选择适合的研究生专业？ 背景不好能否有机会上名校？ 名校和非名校的MBA差异有多大？…'}
        ],
        showDetail: true
      }
    },
    methods: {
      jumpToDetail() {
        // TODO 
        this.showDetail = false;
      }
    }
  }
</script>
