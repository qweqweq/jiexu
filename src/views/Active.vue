<template>
  <div id="active">
    <about />
  </div>
</template>

<script>
  export default {
    name: 'Active',
    components: {
      About: () => import('@/components/about/About'),
    }
  }
</script>
