<template>
  <v-app style="background: #fff;">
    <div class="header_tool_box">
      <div class="header_title">
        <img
          :src="require('@/assets/logo_blue.png')"
          style="width:120px;"
        >
        <div style="display: flex; align-items: center;">
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
          <div
            class="icon_box"
            style="background: #fff; border-color: #fff;"
          >
            <a href="https://zhuanlan.zhihu.com/c_1221388396922466304">
              <img
                :src="require('@/assets/zhihu.png')"
                style="width:44px; height:44px; margin-left: 0px;"
                class="icon_font_size"
              >
            </a>
          </div>
          <div
            class="icon_box"
            style="margin-top: 5px;margin-left: 5px;"
          >
            <a href="https://weibo.com/p/1006066618230866/home?from=page_100606&mod=TAB&is_all=1#place">
              <sina-weibo class="icon_font_size weibo_icon" />
            </a>
          </div>
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
    line-height: 64px;
  }
  .header_title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    padding: 0 10%;
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
    margin-top: 5px;
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
  .weibo_icon {
    color: #fff;
  }
  </style>
