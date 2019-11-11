<template>
  <v-container grid-list-xl>
    <v-layout wrap>
      <v-flex xs12>
        <slot />
      </v-flex>

      <feed-card
        v-for="(feed, i) in feeds"
        :key="i"
        :size="layout"
        :value="feed"
      />
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    name: 'Feed',
    components: {
      FeedCard: () => import('@/components/base/FeedCard')
    },
    props: {
      feeds: {
        type: Array,
        default: () => ([])
      },
      layout: {
        type: Number,
        default: 2
      }
    },
    data: () => ({
      page: 1
    })
  }
</script>
