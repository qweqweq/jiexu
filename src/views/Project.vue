<template>
  <div
    id="project"
    flex
    column
  >
    <background-img>
      <div class="normalHeader">
        <banner :src="`${ORIGIN}/project/project_bg1.jpg`" />
        <div class="nhCover" />
      </div>
    </background-img>
    <v-container grid-list-xl>
      <v-tabs
        grow
        background-color="indigo"
        dark
        class="pa-3"
        style="flex:1"
      >
        <v-tab
          v-for="(item, i) in projects"
          :key="i"
          :href="`#tab-${i}`"
        >
          {{ item.title }}
        </v-tab>

        <v-tab-item
          v-for="(item, i) in projects"
          :key="i"
          :value="`tab-${i}`"
        >
          <v-card
            flat
            tile
          >
            <v-img :src="`${ORIGIN}/project/project_bg1.jpg`" />
            <div v-if="projects[i].headImg" >
              <v-img :src="`${ORIGIN}/project/${projects[i].headImg}`" />
            </div>
            <div v-else>
              <v-card-text>{{ projects[i].header }}</v-card-text>
              <v-card-text>{{ projects[i].text }}</v-card-text>
              <v-card-text>{{ projects[i].secondTitle }}</v-card-text>
            </div>
            <v-flex
              row
              align-center
              justify-space-between
              style="display: flex;flex-wrap: wrap;"
            >
              <v-card-text
                v-for="(ele, j) in projects[i].schools"
                :key="j"
                style="width: 40%; word-break: break-all; cursor: pointer;"
              >
                <a @click="openUrlWindow(ele.url)">
                  {{ ele.name }}<br>{{ ele.url }}
                </a>
              </v-card-text>
            </v-flex>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-container>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex';
  import ORIGIN from '@/data/global.js';
  export default {
    name: 'Project',
    components: {
      Banner: () => import('@/components/base/Banner'),
      BackgroundImg: () => import('@/components/base/BackgroundImg')
    },
    data () {
      return {
        ORIGIN
      };
    },
    computed: {
      ...mapGetters(['projects'])
    },
    methods: {
      openUrlWindow: function (url) {
        window.open(url, '_blank');
      }
    }
  };
</script>
