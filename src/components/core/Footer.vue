<template>
  <v-footer
    class="py-4 grey darken-3"
    height="auto"
  >
    <v-container mx-auto>
      <div class="footer_header">
        <v-img
          :src="require('@/assets/logo.png')"
          class="mr-5"
          contain
          height="50"
          width="50"
          max-width="50"
        />
        <v-divider></v-divider>
      </div>
      <v-layout wrap>
        <v-flex xs2>
          <v-list class="white--text grey darken-3">
            <v-list-tile v-for="(item, i) in navList1" :key="i">
              <v-list-tile-action class="font-24">
                <chervon-right/>
              </v-list-tile-action>

              <v-list-tile-content>   
                <v-list-tile-title class="foot_tile_title">{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title class="foot_sub_title">{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
        <v-spacer />
        <v-flex xs2>
          <v-list class="white--text grey darken-3">
            <v-list-tile v-for="(item, i) in navList2" :key="i">
              <v-list-tile-action class="font-24">
                <chervon-right/>
              </v-list-tile-action>

              <v-list-tile-content>   
                <v-list-tile-title class="foot_tile_title">{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title class="foot_sub_title">{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
        <v-spacer />
        <v-flex xs3>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card flat class="white--text grey darken-3">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">
                      <map-marker />
                      地址
                    </div>
                    <span>徐汇区广元西路45号交大慧谷408室（近交通大学)；
                    </span>
                    <br/>
                    <span>浦东新区张杨路601号华诚大厦7楼7020（近南泉北路）</span>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex xs12>
              <v-card flat class="white--text grey darken-3">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">
                      <contact-phone />
                      电话
                    </div>
                    <span>徐汇校区：   400-082-9866
                    </span>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-spacer />
        <v-flex xs3>
          <v-layout align-center justify-space-between style="height: 100%">
            <div v-for="(item, i) in wxImgs" :key="i" style="width: 148px; height: 148px;">
              <v-img :src="require('@/assets/imgs/' + item.icon)" aspect-ratio="1" contain/>
            </div>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          href: '#!',
          title: '活动资讯',
          subtitle: 'Activity Consultation'
        },
        {
          href: '#!',
          title: '备考通道',
          subtitle: 'Remarks Channel'
        },
        {
         href: '#!',
          title: '项目介绍',
          subtitle: 'Project Introduction'
        },
        {
          href: '#!',
          title: '院校指南',
          subtitle: 'College Guide'
        },
        {
        href: '#!',
          title: '名校风采',
          subtitle: 'Famout Style'
        },
        {
          href: '#!',
          title: '课程体系',
          subtitle: 'Curriculum Structure'
        },
        {
          href: '#!',
          title: '杰旭网校',
          subtitle: 'Online School'
        },
         {
          href: '#!',
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
    methods: {
      backtoTop() {
        window.scrollTo(0, 0)
      }
    },
    computed: {
      navList1: function() {
        return this.items.slice(0,4)
      },
      navList2: function() {
        return this.items.slice(4, this.items.length)
      }
    },
    
  }
</script>
