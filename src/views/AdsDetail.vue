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
        style="text-align: center"
        v-html="pageData.desc"
      />
      <v-card-text
        style="text-align: center;"
        v-html="pageData.detail"
      />
      <v-form>
        <v-container>
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
              @click="sendInfos"
            >
              提交
            </v-btn>
          </v-layout>
        </v-container>
      </v-form>
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
