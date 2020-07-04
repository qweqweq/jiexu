<template>
  <v-app style="background: #fff;">
    <div class="header_tool_box">
      <div class="header_title">
        <img
          :src="require('@/assets/logo.png')"
          style="width:65px;"
        >
        <div style="display: flex; align-items: center;">
          <div class="icon_box">
            <a href="https://passport.weibo.com/visitor/visitor?entry=miniblog&a=enter&url=https%3A%2F%2Fweibo.com%2Ffriends%3Fleftnav%3D1%26wvr%3D6%26isfriends%3D1%26step%3D2%26sudaref%3Dschool.jiexuedu.com%26display%3D0%26retcode%3D6102&domain=.weibo.com&ua=php-sso_sdk_client-0.6.36&_rand=1593829533.6143">
              <sina-weibo class="icon_font_size" />
            </a>
          </div>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <div class="icon_box wechat_icon">
                <we-chat
                  dark
                  class="icon_font_size"
                  v-on="on"
                />
              </div>
            </template>
            <span v-if="popOverImage">
              <img
                :src="popOverImage"
                style="width: 120px;height: 120px;"
              >
            </span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <div class="icon_box apple_icon">
                <apple
                  dark
                  class="icon_font_size"
                  v-on="on"
                />
              </div>
            </template>
            <span>
              <img
                :src="require('@/assets/apple.png')"
                style="width: 120px;height: 120px;"
              >
            </span>
          </v-tooltip>
        </div>
      </div>
    </div>
    <core-toolbar />
    <core-drawer />
    <core-view />
    <core-footer
      :items="links"
      :wx-imgs="wxImgs"
    />
    <core-jiexu />
  </v-app>
</template>

<script>
  import { mapGetters, mapActions, mapState } from 'vuex';
  export default {
    name: 'App',
    components: {
      CoreDrawer: () => import('@/components/core/Drawer'),
      CoreFooter: () => import('@/components/core/Footer'),
      CoreToolbar: () => import('@/components/core/Toolbar'),
      CoreView: () => import('@/components/core/View'),
      CoreJiexu: () => import('@/components/core/Jiexu')
    },
    computed: {
      ...mapState(['wxImgs']),
      ...mapGetters(['links']),
      popOverImage () {
        return this.wxImgs[1] && this.wxImgs[1].icon;
      }

    },
    mounted () {
      this.fetchLinks();
      this.fetchBanners();
      this.fetchActives();
    },
    methods: {
      ...mapActions(['fetchLinks', 'fetchBanners', 'fetchActives'])
    }
  };
</script>
<style>
  html,body {
    height: 100%;
    font-family: Helvetica Neue,Helvetica,Hiragino Sans GB,Microsoft YaHei,\5FAE软雅黑,Arial,sans-serif;
  }
  * {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  .clearfix:after {
    content: " ";
    display: block;;
    line-height: 0;
    height: 0;
    visibility: hidden;
    clear: both;
  }
  .header_tool_box {
    height: 64px;
    position: absolute;
    width: 100%;
    background: #82aeff;
    line-height: 64px;
  }
  .header_title {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 64px;
  }
  .icon_font_size {
    font-size: 28px;
    margin-left: 5px;
  }
  .icon_box {
    border: 1px solid red;
    border-radius: 20px;
    display: inline-block;
    height: 40px;
    width: 40px;
    background: red;
    color: #fff;
    margin-right: 8px;
  }
  .wechat_icon {
    border-color: #1ec354;
    background: #1ec354;
  }
  .icon_box .icon_font_size {
    margin-bottom: 8px;
  }
  .apple_icon {
    background: #3793f1;
    border-color: #3793f1;
  }
  .wechat_icon .icon_font_size {
    margin-bottom: 5px;
  }
  </style>
