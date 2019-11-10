<template>
  <v-container grid-list-xl>
    <v-layout wrap>
      <v-flex xs12>
        <slot />
      </v-flex>

      <feed-card
        v-for="(feed, i) in this.feeds"
        :key="i"
        :size="this.layout"
        :value="feed"
      />
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "Feed",
  data: () => ({
    page: 1
  }),
  props: {
    feeds: Array,
    layout: Number
  },
  components: {
    FeedCard: () => import('@/components/FeedCard')
  },
};
</script>