<template>
  <v-footer
    class="py-4 grey darken-3"
    height="auto"
  >
    <v-container
      mx-auto
      wrap
    >
      <div
        class="footer_header"
        @click="iconClick"
      >
        <v-img
          :src="require('@/assets/logo.png')"
          class="mr-5"
          contain
          height="50"
          width="50"
          max-width="50"
        />
        <v-divider />
      </div>
      <v-layout wrap>
        <v-flex>
          <v-list class="white--text grey darken-3">
            <v-list-tile
              v-for="(item, i) in navList1"
              :key="i"
              @click="onClick($event, item)"
            >
              <v-list-tile-action class="font-24">
                <chervon-right />
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title class="foot_tile_title">
                  {{ item.title }}
                </v-list-tile-title>
                <v-list-tile-sub-title class="foot_sub_title">
                  {{ item.subtitle }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
        <v-spacer />
        <v-flex>
          <v-list class="white--text grey darken-3">
            <v-list-tile
              v-for="(item, i) in navList2"
              :key="i"
              @click="onClick($event, item)"
            >
              <v-list-tile-action class="font-24">
                <chervon-right />
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title class="foot_tile_title">
                  {{ item.title }}
                </v-list-tile-title>
                <v-list-tile-sub-title class="foot_sub_title">
                  {{ item.subtitle }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
        <v-spacer />
        <v-flex>
          <v-layout
            column
            wrap
          >
            <v-flex>
              <v-card
                flat
                class="white--text grey darken-3"
              >
                <v-card-title primary-title>
                  <div>
                    <div class="headline">
                      <map-marker />
                      地址
                    </div>
                    <span>
                      上海市 徐汇区 广元西路315号
                    </span>
                    <br>
                    <span>联峰汇商务广场3G（近上海交通大学）</span>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex>
              <v-card
                flat
                class="white--text grey darken-3"
              >
                <v-card-title primary-title>
                  <div>
                    <div class="headline">
                      <contact-phone />
                      电话
                    </div>
                    <span>
                      徐汇校区：   400-082-9866
                    </span>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-spacer />
        <v-flex>
          <v-layout
            align-center
            justify-space-between
            style="height: 100%"
          >
            <div
              v-for="(item, i) in wxImgs"
              :key="i"
              style="width: 148px; height: 148px;"
            >
              <v-img
                :src="`${ORIGIN}/${item.icon}`"
                aspect-ratio="1"
                contain
              />
            </div>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
  import ORIGIN from '@/data/global.js';
  export default {
    data: () => ({
      ORIGIN,
      items: [
        {
          to: '/active_consult',
          title: '活动资讯',
          subtitle: 'Activity Consultation'
        },
        {
          to: '/remark_channel',
          title: '备考通道',
          subtitle: 'Remarks Channel'
        },
        {
          to: '/project_intr',
          title: '项目介绍',
          subtitle: 'Project Introduction'
        },
        {
          to: '/college_guide',
          title: '院校指南',
          subtitle: 'College Guide'
        },
        {
          to: '/famous_style',
          title: '名校风采',
          subtitle: 'Famout Style'
        },
        {
          to: '/curriculum_stru',
          title: '课程体系',
          subtitle: 'Curriculum Structure'
        },
        {
          href: 'http://school.jiexuedu.com/',
          title: '杰旭网校',
          subtitle: 'Online School'
        },
        {
          to: '/about_jiexu',
          title: '关于杰旭',
          subtitle: 'About Jie Xu'
        }
      ],
      wxImgs: [
        {
          icon: 'wechat1.jpg'
        },
        {
          icon: 'wechat2.jpg'
        }
      ]
    }),
    computed: {
      navList1: function () {
        return this.items.slice(0, 4);
      },
      navList2: function () {
        return this.items.slice(4, this.items.length);
      }
    },
    methods: {
      backtoTop () {
        window.scrollTo(0, 0);
      },
      onClick (e, item) {
        if (item.to || !item.href) {
          this.$router.push(item.to);
          return;
        }
        window.location.href = item.href;
      },
      iconClick () {
        this.$router.push('/');
      }
    }

  };
</script>
<style lang="less">
.font-24{
  min-width: 0px;
  margin-top: -26px;
}
.footer_header {
  margin-bottom: 8px;
  margin-top: -25px;
}
.footlist_background{
  background-color: #455a64;
}
.foot_tile_title{
  font-size: 14px;
}
.foot_sub_title{
  color:#FAFAFA!important;
}
</style>
