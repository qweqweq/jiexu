<template>
  <div id="channel">
    <background-img>
      <div class="normalHeader">
        <banner
          v-if="banner.imgLink"
          :src="banner.imgLink"
        />
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
      <market-ads :actives="actives" />
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
      <form-modal
        :show="dialog"
        @showModal="showModal"
      />
    </v-container>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex';
  export default {
    name: 'Channel',
    components: {
      Banner: () => import('@/components/base/Banner'),
      BackgroundImg: () => import('@/components/base/BackgroundImg'),
      MarketAds: () => import('@/components/base/MarketAds'),
      FormModal: () => import('@/components/base/FormModal')
    },
    data () {
      return {
        dialog: false
      };
    },
    computed: {
      ...mapGetters(['channels', 'channelPage', 'actives']),
      banner () {
        return this.channelPage && this.channelPage.bannerImg;
      }
    },
    mounted () {
      this.fetchChannels();
    },
    methods: {
      ...mapActions(['fetchChannels']),
      jumpToSchool (url) {
        window.open(url, '_blank');
      },
      openDialog () {
        this.dialog = true;
      },
      showModal (data) {
        this.dialog = data;
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
