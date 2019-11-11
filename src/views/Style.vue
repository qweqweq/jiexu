<template>
  <div id="style">
    <banner src="imgs/home_bg.jpg" />
  </div>
</template>

<script>
  export default {
    name: 'Style',
    components: {
      Banner: () => import('@/components/base/Banner')
    }
  }
</script>
