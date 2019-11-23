<template>
  <a :href="link" target="_blank">
    <img :src="path" class="img-logo" alt="" />
  </a>
</template>
<script>
export default {
  name: 'LogoMedia',
  props: {
    path: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.img-logo {
  height: 60px;
  transition: 0.2s all ease;
  &:hover {
    filter: brightness(110%) drop-shadow(3px 3px 4px #909090f0);
  }
}
</style>
