<template>
  <img 
    :src="toPath"
    class="image-box"
  />
</template>
<script>
export default {
  props: {
    path: {
      type: String,
      default: '/img/NonThumbnail.png'
    }
  },
  computed: {
    toggleShadow() {
      return this.shadow ? 'shadow' : '';
    },
    toPath() {
      return this.path ? this.path : '/img/NonThumbnail.png';
    }
  }
}
</script>
<style lang="scss" scoped>
.image-box {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border: none;

  @media screen and (max-width: 768px){
    width: 33%;
    height: 33%;
  }
}
</style>
