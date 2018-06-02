<template>
  <img 
    :src="path"
    class="image-box"
  />
</template>
<script>
export default {
  props: {
    path: String,
  },
  computed: {
    toggleShadow() {
      return this.shadow ? 'shadow' : '';
    }
  }
}
</script>
<style lang="scss" scoped>
.image-box {
  width: 320px;
  height: 320px;
  object-fit: cover;

  @media screen and (max-width: 768px){
    width: 120px;
    height: 120px;
  }
}
</style>
