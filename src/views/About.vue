<template>
  <div id="about">
    <articles>
      <banner src="imgs/home_bg.jpg" />
    </articles>

    <about />

    <subscribe />

    <social />
  </div>
</template>

<script>
  export default {
    name: 'About',

    components: {
      About: () => import('@/components/about/About'),
      Articles: () => import('@/components/home/Articles'),
      Banner: () => import('@/components/base/Banner'),
      Social: () => import('@/components/home/Social'),
      Subscribe: () => import('@/components/home/Subscribe')
    }
  }
</script>
