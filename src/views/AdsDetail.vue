<template>
  <div id="adsDetail">
    <div class="normalHeader">
      <banner
        v-if="banner && banner.imgLink"
        :src="banner.imgLink"
        :can-jump="false"
      />
      <!-- <div class="nhCover" /> -->
    </div>
    <v-layout
      class="normalContainer"
      flex
      align-center
      justify-center
      style="flex-direction: column;"
    >
      <div class="container grid-list-xl">
        <img
          v-if="pageData.imgUrl"
          :src="pageData.imgUrl"
          width="100%"
          height="100%"
          contain
          :aspect-ratio="aspectRatio"
        >
      </div>
      <v-card-text
        style="text-align: left;padding-left: 15%;padding-right: 15%;"
        v-html="pageData.desc"
      />
      <v-card-text
        style="text-align: left;padding-left: 15%;padding-right: 15%;"
        v-html="pageData.detail"
      />
      <div style="display: flex; ">
        <v-card color="#ccc">
          <v-container style="display: flex;">
            <v-layout
              column
              style="padding: 0px 5%;"
            >
              <v-text-field
                v-model="name"
                style="width: 300px;"
                label="姓名*"
                solo
                :rules="[rules.required]"
              />
              <v-text-field
                v-model="phone"
                style="width: 300px;"
                label="手机号*"
                solo
                :rules="[rules.required, rules.isPhoneNum]"
              />
              <v-text-field
                v-model="profession"
                style="width: 300px;"
                label="报考专业"
                solo
              />
              <v-btn
                color="info"
                style="width: 300px;margin:0px;"
                @click="sendInfos"
              >
                提交
              </v-btn>
            </v-layout>
          </v-container>
        </v-card>
       <v-spacer></v-spacer>
        <v-card color="#ccc" style="display: flex; align-items: center;">
         <v-layout column>
            <account-question class="icon-style"></account-question>
            <v-card-text style="text-align: center;">在线客服</v-card-text>
            <v-btn color="info" @click="jumpToChat">立即咨询</v-btn>
        </v-layout>
        </v-card>
      </div>
    </v-layout>
  </div>
</template>

<script>
  import { postClients } from '@/graphql/api.js';
  import isEmpty from 'lodash/isEmpty';
  import { onResize } from '../mixin/mixin';
  import { mapGetters, mapState } from 'vuex';
  export default {
    name: 'AdsDetail',
    components: {
      Banner: () => import('@/components/base/Banner')
      // BackgroundImg: () => import('@/components/base/BackgroundImg')
    },
    mixins: [onResize],
    data () {
      return {
        pageData: {
          imgUrl: '',
          detail: '',
          desc: ''
        },
        rules: {
          required: value => !!value || '必填项哦',
          isPhoneNum: value => !!/^1(3|4|5|6|7|8|9)\d{9}$/.test(value) || '请输入正确的手机号哦'
        },
        name: null,
        phone: null,
        profession: null,
        formData: {}
      };
    },
    computed: {
      ...mapState(['banners']),
      ...mapGetters(['adsDetailPage']),
      banner () {
        return this.adsDetailPage && this.adsDetailPage.bannerImg;
      },
      actives () {
        return this.adsDetailPage && this.adsDetailPage.actives;
      },
      answer () {
        return (this.adsDetailPage && this.adsDetailPage.answerImg) || {};
      }

    },
    watch: {
      adsDetailPage (newVal, oldVal) {
        if (newVal !== oldVal) this.pageData = this.getPageData();
      }
    },
    mounted: function () {
      this.aspectRatio = this.$data.aspectRatio;
      this.pageData = this.getPageData();
    },
    methods: {
      getPageData () {
        const { index = 0, type } = this.$route.query || {};
        let imgUrl = ''; let desc = ''; let detail = '';
        if (type === 'active' && this.actives[index]) {
          imgUrl = this.actives[index].imgLink;
          detail = this.actives[index].adsDetail;
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
        };
      },
      sendInfos () {
        this.formData = {
          name: this.name,
          phone: this.phone,
          profession: this.profession
        };
        if (isEmpty(this.formData)) return;
        postClients(this.formData)
          .then(res => this.resetFormData())
          .catch(e => {
            throw new Error(e);
          });
      },
      resetFormData () {
        this.name = null;
        this.phone = null;
        this.profession = null;
        this.formData = {};
      },
      jumpToChat() {
        window.open('https://ww25.53kf.com/webCompany.php?kf_sign=zQ0MDMTU5McwMTExNDg1Njg1ODIyMDA3NzIyMjYxODA=&arg=10226180&style=1&language=zh-cn&charset=GBK&kflist=off&kf=&zdkf_type=1&lnk_overflow=0&callback_id6ds=&referer=http%3A%2F%2Flocalhost%3A8080%2F%23%2F&keyword=http%3A%2F%2Flocalhost%3A8080%2F&tfrom=1&tpl=crystal_blue&uid=7e2e9821a2f132feae838586058a167b&is_group=&is_group=&timeStamp=1593441628642&ucust_id=', '_blank')
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
.icon-style{
  color: #2196f3e0;
  font-size: 42px;;
}
</style>
