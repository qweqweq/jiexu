<template>
  <div id="project">
   
  </div>
</template>

<script>
  export default {
    name: 'Project',
    components: {
      Articles: () => import('@/components/home/Articles'),
      Banner: () => import('@/components/base/Banner')
    }
  }
</script>
