<template>
  <base-card dark>
    <v-img
      class="grey lighten-2"
      width="100%"
      :src="src"
    />
  </base-card>
</template>
<script>
  export default {
    name: 'Banner',
    props: {
      src: {
        type: String,
        default: '',
        required: true
      }
    }
  };
</script>
