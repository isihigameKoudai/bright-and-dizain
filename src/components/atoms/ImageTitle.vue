<template>
  <div>
    <img
      v-if="isDark"
      src="/svg/mainTitleBlack.svg" 
      alt="" 
      width="200px" 
    >
    <img
      v-else
      src="/svg/mainTitleWhite.svg" 
      alt="" 
      width="200px"
    >
  </div>
</template>
<script>
export default {
  name: 'ImageTitle',
  props: {
    isDark: {
      type: Boolean,
      default: false
    }
  },
}
</script>
<style lang="scss" scoped>
</style>
