<template>
  <div id="home">
    <articles>
      <banner src="imgs/home_bg.jpg" />
    </articles>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    components: {
      Articles: () => import('@/components/home/Articles'),
      Banner: () => import('@/components/base/Banner')
    }
  }
</script>
