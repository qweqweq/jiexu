<template>
  <div id="home">
    <background-img>
      <div class="normalHeader">
        <banner
          v-if="banner.imgLink"
          :src="banner.imgLink"
          :query="BANNER_KEY && BANNER_KEY.home_ads"
        />
      </div>
    </background-img>
    <v-container>
      <v-flex
        row
        space-between
        style="display: flex;"
      >
        <v-card-text class="url_text">
          活动资讯/ACTIVITY CONSULTATION
        </v-card-text>
        <a
          class="url_text outline"
          @click="jumpToPage('active_consult')"
        >
          GET MORE
        </a>
      </v-flex>
      <market-ads :actives="actives" />
    </v-container>
    <v-divider class="divider" />
    <v-container>
      <v-flex
        row
        space-between
        style="display: flex;"
      >
        <v-card-text class="url_text">
          备考通道 / REMARKS CHANNEL
        </v-card-text>
        <a
          class="url_text outline"
          @click="jumpToPage('remark_channel')"
        >
          GET MORE
        </a>
      </v-flex>
      <v-flex style="display: flex;justify-content: space-between; flex-wrap: wrap;">
        <v-card
          width="33%"
          flat
          style="padding: 5px; min-width: 300px;"
        >
          <v-card-text class="project_name">
            杰旭新闻
          </v-card-text>
          <v-flex style="display: flex; flex-direction:column; align-items:center;">
            <div
              v-for="(item, index) in active"
              :key="index"
              style="display: flex; flex-direction:row; margin-top: 5px;"
              @click="jumpToDetail('active', index)"
            >
              <v-img
                v-if="item.imgUrl"
                :src="item.imgUrl"
                width="144px"
                hight="144px"
              />
              <v-card-text
                style="padding-top: 0px;"
                v-html="item.subDesc"
              />
            </div>
          </v-flex>
        </v-card>
        <v-card
          width="33%"
          flat
          style="min-width: 300px;"
          @click="jumpToDetail('answer')"
        >
          <v-card-text class="project_name">
            高效活动
          </v-card-text>
          <v-img
            v-if="answer.imgLink"
            :src="answer.imgLink"
            width="100%"
            height="250px"
          />
          <v-card-text v-html="answer.adsDetail" />
        </v-card>
        <v-card
          width="33%"
          flat
          style="min-width: 300px;"
        >
          <v-card-text class="project_name">
            资料下载
          </v-card-text>
          <v-flex
            v-for="(item, index) in download"
            :key="index"
            style="display: flex; flex-direction: column; align-items: center;"
            @click="handleClick(index + 1)"
          >
            <v-card-text style="padding-top:0px;text-align: center;">
              下载{{ index + 1 }}
            </v-card-text>
            <v-img
              v-if="item.imgLink"
              :src="item.imgLink"
              contain
              height="50%"
              width="70%"
              style="margin-left: 16px;"
            />
          </v-flex>
        </v-card>
      </v-flex>
    </v-container>
    <v-divider class="divider" />
    <v-container>
      <v-flex
        row
        space-between
        style="display: flex;"
      >
        <v-card-text class="url_text">
          项目介绍 / PROJECT INTRODUCTIONGET
        </v-card-text>
        <a
          class="url_text outline"
          @click="jumpToPage('project_intr')"
        >
          GET MORE
        </a>
      </v-flex>
      <v-flex class="project_container hidden-sm-and-down">
        <v-card
          v-for="(item, i) in homeProjects"
          :key="i"
          width="30%"
          raised
          style="margin-top: 2%;"
        >
          <v-card-text class="project_title">
            {{ item.title }}
          </v-card-text>
          <v-divider />
          <v-card-text class="project_name">
            {{ item.name }}
          </v-card-text>
          <v-card-text class="project_desc">
            {{ item.desc }}
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex class="project_container hidden-lg-and-up">
        <v-card
          v-for="(item, i) in homeProjects"
          :key="i"
          width="30%"
          raised
          style="margin-top: 5%; min-width: 100%;"
        >
          <v-card-text class="project_title">
            {{ item.title }}
          </v-card-text>
          <v-divider />
          <v-card-text class="project_name">
            {{ item.name }}
          </v-card-text>
          <v-card-text class="project_desc">
            {{ item.desc }}
          </v-card-text>
        </v-card>
      </v-flex>
    </v-container>
    <v-divider class="divider" />
    <v-container>
      <v-flex
        row
        space-between
        style="display: flex;"
      >
        <v-card-text class="url_text">
          院校指南 / COLLEGE GUIDEGET
        </v-card-text>
        <a
          class="url_text outline"
          @click="jumpToPage('college_guide')"
        >
          GET MORE
        </a>
      </v-flex>
      <school-card :list="schoolCards" />
    </v-container>
    <v-divider class="divider" />
    <v-container>
      <v-flex
        row
        space-between
        style="display: flex;"
      >
        <v-card-text class="url_text">
          名师风采 / FAMOUS STYLE
        </v-card-text>
        <a
          class="url_text outline"
          @click="jumpToPage('famous_style')"
        >
          GET MORE
        </a>
      </v-flex>
      <v-layout
        class="normalContainer"
        flex
        align-center
        justify-center
        style="padding-bottom: 0px; padding-top: 16px;"
      >
        <v-img
          v-if="teacher.imgLink"
          :src="teacher.imgLink"
          height="100%"
          width="100%"
          contain
        />
      </v-layout>
    </v-container>
    <v-divider class="divider" />
    <v-container>
      <v-flex
        row
        space-between
        style="display: flex;"
      >
        <v-card-text class="url_text">
          课程体系 / CURRICULUM STRUCTURE
        </v-card-text>
        <a
          class="url_text outline"
          @click="jumpToPage('curriculum_stru')"
        >
          GET MORE
        </a>
      </v-flex>
      <v-layout
        class="normalContainer"
        flex
        align-center
        justify-center
        style="padding-bottom: 0px; padding-top: 16px;"
      >
        <v-img
          v-if="classes.imgLink"
          :src="classes.imgLink"
          height="100%"
          width="100%"
          contain
        />
      </v-layout>
    </v-container>
    <v-divider class="divider" />
    <v-container>
      <v-flex
        row
        space-between
        style="display: flex;"
      >
        <v-card-text class="url_text">
          关于杰旭 / ABOUT JIEXU
        </v-card-text>
        <a
          class="url_text outline"
          @click="jumpToPage('about_jiexu')"
        >
          GET MORE
        </a>
      </v-flex>
      <v-layout
        class="normalContainer"
        flex
        align-center
        justify-center
        style="padding-bottom: 0px; padding-top: 16px;"
      >
        <v-img
          v-if="content.imgLink"
          :src="content.imgLink"
          height="100%"
          width="100%"
          contain
        />
      </v-layout>
      <v-card-text>
        杰旭各科授课教师均为十余年管理类联考资深授课教师，深入浅出授课方式使学员更容易理解并快速吸收课堂内容。非工作日上课更贴合在职人群的时间安排。小班授课，使老师能照顾到每一位学员的情况。助教团队贴身服务，班主任随堂解决服务问题，让您在短时间内收到学习效果，我们追求的不光是效率更是成效!
        <br>杰旭，只提供最专业高效的备考方案！
      </v-card-text>
      <form-modal
        :show="dialog"
        :click-index="clickIndex"
        @showModal="showModal"
      />
    </v-container>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex';
  import { onResize, utils } from '@/mixin/mixin.js';
  export default {
    name: 'Home',
    components: {
      Banner: () => import('@/components/base/Banner'),
      MarketAds: () => import('@/components/base/MarketAds'),
      SchoolCard: () => import('@/components/base/SchoolCard'),
      FormModal: () => import('@/components/base/FormModal'),
      BackgroundImg: () => import('@/components/base/BackgroundImg')
    },
    mixins: [onResize, utils],
    data () {
      return {
        dialog: false,
        clickIndex: 0
      };
    },
    computed: {
      ...mapState(['BANNER_KEY']),
      ...mapGetters(['schools', 'homeProjects', 'homePage', 'actives']),
      schoolCards: function () {
        return this.schools.slice(0, 3);
      },
      banner () {
        return (this.homePage && this.homePage.bannerImg) || {};
      },
      content () {
        return (this.homePage && this.homePage.content) || {};
      },
      download () {
        return (this.homePage && this.homePage.downloadImg) || [];
      },
      answer () {
        return (this.homePage && this.homePage.answerImg) || {};
      },
      teacher () {
        return (this.homePage && this.homePage.teacherImg) || {};
      },
      classes () {
        return (this.homePage && this.homePage.classImg) || {};
      },
      active () {
        return (this.homePage && this.homePage.activeImg) || [];
      }
    },
    mounted: function () {
      this.fetchSchools();
      this.fetchHomePage();
      this.fetchActives();
      this.aspectRatio = this.$data.aspectRatio;
    },
    methods: {
      ...mapActions(['fetchHomePage', 'fetchSchools', 'fetchActives']),
      jumpToPage (route) {
        this.$router.push({ path: `/${route}` });
      },
      showModal (data) {
        this.dialog = data;
      },
      handleClick (index) {
        this.dialog = true;
        this.clickIndex = index;
      }
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
.url_text {
  font-size: 16px;
  font-weight: bold;
}
.outline {
  border: 1px solid #ccc;
  text-align: right;
  width: 122px;
  cursor: pointer;
}
.divider {
  background: gray;
  height: 5px;
  max-height: 5px;
  border: 1px solid gray;
}
.project_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .project_title {
    font-size: 16px;
    font-weight: bold;
    background: antiquewhite;
  }
  .project_desc {
    font-size: 14px;
    padding-bottom: 25px;
  }
}
.project_name {
  font-size: 15px;
  font-weight: 500;
}
</style>
