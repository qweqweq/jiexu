<template>
  <v-card flat>
    <v-container
      fluid
      grid-list-md
    >
      <v-layout
        row
        wrap
        class="hidden-sm-and-down"
      >
        <v-flex
          v-for="(item, i) in list"
          :key="i"
          xs4
        >
          <v-card
            class="pa-3 ma-2"
            style="height: 100%; min-height: 675px;"
          >
            <v-card-title primary-title>
              <div class="headline">
                {{ item.title }}
              </div>
            </v-card-title>
            <v-img
              v-if="item.bgImage"
              :src="item.bgImage"
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
                  v-if="item.icon"
                  :src="item.icon"
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

              <v-card-actions>
                <v-btn
                  text
                  color="deep-purple accent-4"
                  style="color:#fff;"
                  @click="jumpToDetail(i)"
                >
                  详细信息
                </v-btn>
              </v-card-actions>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
      <!--主要是做屏幕手机模式适配-->
      <v-layout
        row
        wrap
        class="hidden-lg-and-up"
      >
        <v-flex
          v-for="(item, i) in list"
          :key="i"
        >
          <v-card
            class="pa-3 ma-2"
            style="height: 675px"
          >
            <v-card-title primary-title>
              <div class="headline">
                {{ item.title }}
              </div>
            </v-card-title>
            <v-img
              v-if="item.bgImage"
              :src="item.bgImage"
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
                  v-if="item.icon"
                  :src="item.icon"
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

              <v-card-actions>
                <v-btn
                  text
                  color="deep-purple accent-4"
                  style="color:#fff;"
                  @click="jumpToDetail(i)"
                >
                  详细信息
                </v-btn>
              </v-card-actions>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
  import ORIGIN from '@/data/global.js';
  export default {
    name: 'SchoolCard',
    props: {
      list: {
        type: Array,
        default: () => [],
        required: true
      }
    },
    data () {
      return {
        ORIGIN
      };
    },
    methods: {
      jumpToDetail (index) {
        this.$router.push({ name: 'detail', params: { id: index } });
      }
    }
  };
</script>
