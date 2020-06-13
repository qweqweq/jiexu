<template>
  <div
    id="project"
    flex
    column
  >
    <background-img>
      <div class="normalHeader">
        <banner :src="`${ORIGIN}/project/project_bg3.png`" />
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
          v-for="(data, i) in projects"
          :key="i"
          :value="`tab-${i}`"
        >
          <v-card
            flat
            tile
          >
            <v-img :src="`${data.backImg}`" />
            <div v-if="data.headImg">
              <v-img :src="`${data.headImg}`" />
            </div>
            <div v-else>
              <v-card-text>{{ data.header }}</v-card-text>
              <v-card-text>{{ data.text }}</v-card-text>
              <v-card-text>{{ data.secondTitle }}</v-card-text>
            </div>
            <v-flex
              row
              align-center
              justify-space-between
              style="display: flex;flex-wrap: wrap;"
            >
              <v-card-text
                v-for="(ele, j) in data.schools"
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
    mapGetters,
    mapActions
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
    mounted () {
      this.fetchProjects();
    },
    methods: {
      ...mapActions(['fetchProjects']),
      openUrlWindow: function (url) {
        window.open(url, '_blank');
      }
    }
  };
</script>
