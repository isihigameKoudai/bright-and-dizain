<template>
  <img
    :src="imagePath"
    alt=""
    width="200px"
  >
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ImageTitle',
  props: {
    isDark: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    imagePath() {
      const darkImage: string = '/svg/title_black.svg'
      const whiteImage: string = '/svg/title_white.svg'
      return this.isDark ? darkImage : whiteImage
    }
  }
})
</script>
<style lang="scss" scoped></style>
