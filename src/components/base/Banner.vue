<template>
  <base-card dark>
    <v-img
      class="grey lighten-2"
      width="100%"
      :src="require('@/assets/' + this.src)"
    >
    </v-img>
  </base-card>
</template>
<script>
  export default {
    name: 'Banner',
    props: {
      src: String
    },
  }
</script>
