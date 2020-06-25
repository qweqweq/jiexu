<template>
  <v-container class="lighten-5">
    <v-layout
      v-if="showDetail"
      row
      wrap
      no-gutters
      style="display: flex; justify-content: space-around"
    >
      <v-flex
        v-for="(item, i) in actives"
        :key="i"
        style="width: 30%; margin-right: 8px; margin-top: 5px; min-width: 200px;"
      >
        <v-card
          class="pa-2"
          outlined
          tile
          @click="jumpToDetail('active', i)"
        >
          <v-card-text style="font-size: 18px;font-weight: bold;">
            {{ item.title }}
          </v-card-text>
          <v-img :src="item.imgUrl" />
          <v-card-text style="color: #0d3084;font-size: 14px;font-weight: bold;">
            {{ item.header }}
          </v-card-text>
          <v-card-text>{{ item.desc }}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout v-else />
  </v-container>
</template>

<script>
  import { utils } from '@/mixin/mixin.js';
  export default {
    name: 'MarketAds',
    mixins: [utils],
    props: {
      actives: {
        type: Array,
        default: () => []
      }
    },
    data () {
      return {
        showDetail: true
      };
    }
  };
</script>
