<template>
  <div id="channel">
    <background-img>
      <div class="normalHeader">
        <banner src="imgs/channel/channel_bg1.jpg" />
        <div class="nhCover" />
      </div>
    </background-img>
    <v-container>
      <v-card-text class="channel_title">
        高校信息
        <v-divider class="divider" />
      </v-card-text>
      <v-layout wrap>
        <v-flex
          v-for="(item, i) in channels"
          :key="i"
          style="width: 25%; margin-right: 8px; margin-top: 5px; min-width: 200px;max-width:369px"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            <v-card-text class="card_text">
              {{ item.name }}
            </v-card-text>
            <v-divider />
            <v-img
              :src="item.imgUrl"
              height="184"
              class="ma-1"
            />
            <v-divider />
            <a
              row
              space-between
              style="display: flex;cursor: pointer;"
              @click="jumpToSchool(item.linkUrl)"
            >
              <v-card-text class="url_text">
                高校链接
              </v-card-text>
              <v-card-text
                class="url_text"
                style="text-align: right"
              >
                GO
                <chervon-right />
              </v-card-text>
            </a>
            <v-divider />
            <a
              row
              space-between
              style="display: flex;cursor: pointer;"
              @click="jumpToSchool(item.applyUrl)"
            >
              <v-card-text class="url_text">
                在线申请
              </v-card-text>
              <v-card-text
                class="url_text"
                style="text-align: right"
              >
                GO
                <chervon-right />
              </v-card-text>
            </a>
            <v-divider />
            <v-card-text
              class="url_text"
              style="height: 70px; display: flex; align-items: center;"
            >
              {{ item.desc }}
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-card-text class="channel_title">
        杰旭新闻
        <v-divider class="divider" />
      </v-card-text>
      <market-ads />
      <v-card-text class="channel_title">
        资料下载
        <v-divider class="divider" />
      </v-card-text>
      <v-card-text
        style="cursor: pointer;"
        @click="openDialog"
      >
        下载1
      </v-card-text>
      <v-divider />
      <v-card-text
        style="cursor: pointer;"
        @click="openDialog"
      >
        下载2
      </v-card-text>
      <v-divider />
      <v-layout
        row
        justify-center
      >
        <v-dialog
          v-model="dialog"
          width="360px"
        >
          <v-card>
            <v-card-title class="headline">
              请先填写联系信息
            </v-card-title>
            <v-form>
              <v-container>
                <v-layout
                  column
                  style="padding: 0px 5%;"
                >
                  <v-text-field
                    label="姓名*"
                    solo
                    :rules="[rules.required]"
                  />
                  <v-text-field
                    label="手机号*"
                    solo
                    :rules="[rules.required]"
                  />
                  <v-text-field
                    label="报考专业"
                    solo
                  />
                  <v-text-field
                    label="所在行业"
                    solo
                  />
                  <v-text-field
                    label="公司规模"
                    solo
                  />
                  <v-text-field
                    label="公司职位"
                    solo
                  />
                  <v-text-field
                    label="毕业院校"
                    solo
                  />
                </v-layout>
              </v-container>
            </v-form>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="white"
                style="background: gray;"
                flat="flat"
                @click="dialog = false"
              >
                取消
              </v-btn>
              <v-btn
                color="white"
                style="background: #2296f3;"
                flat="flat"
                @click="dialog = false"
              >
                发送
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Channel',
    components: {
      Banner: () => import('@/components/base/Banner'),
      BackgroundImg: () => import('@/components/base/BackgroundImg'),
      MarketAds: () => import('@/components/base/MarketAds')
    },
    data () {
      return {
        rules: {
          required: value => !!value || '必填项哦'
        },
        dialog: false,
        channels: [
          {
            name: '交大安泰',
            imgUrl: require('@/assets/imgs/channel/channel1.jpg'),
            linkUrl: 'https://mba.sjtu.edu.cn/',
            applyUrl: 'https://mba.sjtu.edu.cn/mba/login.html',
            desc: 'ANTAI MBA'
          },
          {
            name: '上海高级金融学院',
            imgUrl: require('@/assets/imgs/channel/channel2.jpg'),
            linkUrl: 'http://www.saif.sjtu.edu.cn/',
            applyUrl: 'http://regonline.saif.sjtu.edu.cn/c/login',
            desc: 'GAOJIN FMBA'
          },
          {
            name: '复旦大学',
            imgUrl: require('@/assets/imgs/channel/channel3.jpg'),
            linkUrl: 'https://www.fdsm.fudan.edu.cn/AboutUs/index.aspx',
            applyUrl: 'https://www.fdsm.fudan.edu.cn/fdmba/info_apply.html',
            desc: 'FUDAN MBA'
          },
          {
            name: '复旦泛海国际金融学院',
            imgUrl: require('@/assets/imgs/channel/channel4.jpg'),
            linkUrl: 'https://fisf.fudan.edu.cn/',
            applyUrl: 'https://application.fisf.fudan.edu.cn/mba/external/login',
            desc: 'FANHAI FMBA'
          },
          {
            name: '同济大学',
            imgUrl: require('@/assets/imgs/channel/channel5.jpg'),
            linkUrl: 'https://mba.tongji.edu.cn/',
            applyUrl: 'https://applymba.tongji.edu.cn/c/login',
            desc: 'TONGJI MBA'
          },
          {
            name: '上海财大',
            imgUrl: require('@/assets/imgs/channel/channel6.jpg'),
            linkUrl: 'https://cob.sufe.edu.cn/',
            applyUrl: 'https://usercenter.sufe.edu.cn/Account/Login',
            desc: 'CAIDA MBA'
          },
          {
            name: '华东师范大学',
            imgUrl: require('@/assets/imgs/channel/channel7.jpg'),
            linkUrl: 'http://www.mba.ecnu.edu.cn/',
            applyUrl: 'http://ecnumbazs.mikecrm.com/8bWDFr0',
            desc: 'HUASHIDA MBA'
          },
          {
            name: '上海外国语大学',
            imgUrl: require('@/assets/imgs/channel/channel8.jpg'),
            linkUrl: 'http://mba.shisu.edu.cn/',
            applyUrl: 'http://218.193.160.198:8080/mba-adm/login',
            desc: 'SHANGWAI MBA'
          },
          {
            name: '东华大学',
            imgUrl: require('@/assets/imgs/channel/channel9.jpg'),
            linkUrl: 'http://mba.dhu.edu.cn/',
            applyUrl: 'http://mba.dhu.edu.cn/index',
            desc: 'DONGHUA MBA'
          },
          {
            name: '华东理工大学',
            imgUrl: require('@/assets/imgs/channel/channel10.png'),
            linkUrl: 'https://bs.ecust.edu.cn/',
            applyUrl: 'http://ecust.netapply.cn/user/login/ecust',
            desc: 'HUALI MBA'
          }
        ]
      };
    },
    methods: {
      jumpToSchool (url) {
        window.open(url, '_blank');
      },
      openDialog () {
        this.dialog = true;
      }
    }
  };
</script>
<style lang="less">
.channel_title {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #0d3084;
  width: 150px;
  margin: auto;
  .divider {
    width: 100%;
    border-color: #0d3084;
  }
}
.card_text {
  font-size: 18px;
  font-weight: bold;
}
.url_text {
  padding: 8px 16px;
  font-size: 16px;
  display: inline-block;
}
</style>
