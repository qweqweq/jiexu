<template>
  <div id="school">
    <background-img>
      <div class="normalHeader">
        <banner src="imgs/school/schoolguide_bg.jpg" />
        <div class="nhCover" />
      </div>
    </background-img>
    <v-card flat>
      <v-container
        fluid
        grid-list-md
      >
        <v-layout
          row
          wrap
          style="margin:0 4%;"
          class="hidden-sm-and-down"
        >
          <v-flex
            v-for="(item, i) in shcools"
            :key="i"
            xs4
          >
            <v-card
              class="pa-3 ma-2"
              style="height: 900px"
            >
              <v-card-title primary-title>
                <div class="headline">
                  {{ item.title }}
                </div>
              </v-card-title>
              <v-img
                :src="require('@/assets/imgs/school/'+ item.bgImage)"
                aspect-ratio="1"
              />
              <p>{{ item.desc }}</p>
              <v-layout
                row
                align-center
                flex
              >
                <v-flex>
                  <v-img
                    :src="require('@/assets/imgs/school/' + item.icon)"
                    aspect-ratio="1"
                  />
                </v-flex>
                <v-layout
                  xs6
                  column
                  flex
                >
                  <v-flex>{{ item.schoolName }}</v-flex>
                  <v-flex>{{ item.schoolText }}</v-flex>
                </v-layout>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
        <!--主要是做屏幕手机模式适配-->
        <v-layout
          row
          wrap
          style="margin:0 4%;"
          class="hidden-lg-and-up"
        >
          <v-flex
            v-for="(item, i) in shcools"
            :key="i"
          >
            <v-card
              class="pa-3 ma-2"
              style="height: 900px"
            >
              <v-card-title primary-title>
                <div class="headline">
                  {{ item.title }}
                </div>
              </v-card-title>
              <v-img
                :src="require('@/assets/imgs/school/'+ item.bgImage)"
                aspect-ratio="1"
              />
              <p>{{ item.desc }}</p>
              <v-layout
                row
                align-center
                flex
              >
                <v-flex>
                  <v-img
                    :src="require('@/assets/imgs/school/' + item.icon)"
                    aspect-ratio="1"
                  />
                </v-flex>
                <v-layout
                  xs6
                  column
                  flex
                >
                  <v-flex>{{ item.schoolName }}</v-flex>
                  <v-flex>{{ item.schoolText }}</v-flex>
                </v-layout>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex';
  export default {
    name: 'School',
    components: {
      Banner: () => import('@/components/base/Banner'),
      BackgroundImg: () => import('@/components/base/BackgroundImg')
    },
    computed: {
      ...mapGetters(['shcools'])
    }
  };
</script>
