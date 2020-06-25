<template>
  <base-card dark>
    <v-img
      class="grey lighten-2"
      width="100%"
      :src="src"
      @click="handleJump"
    />
  </base-card>
</template>
<script>
  import { utils } from '@/mixin/mixin.js';
  export default {
    name: 'Banner',
    mixins: [utils],
    props: {
      src: {
        type: String,
        default: '',
        required: true
      },
      canJump: {
        type: Boolean,
        default: true
      },
      query: {
        type: String,
        default: null
      }
    },
    methods: {
      handleJump () {
        if (this.canJump) {
          this.jumpToDetail('banner', this.query);
        }
      }
    }
  };
</script>
