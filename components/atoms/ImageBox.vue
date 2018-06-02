<template>
  <img 
    :src="path"
    alt=""
    class="image-box"
    :class="{'is-shadow': shadow}"
  />
</template>
<script>
export default {
  props: {
    path: String,
    shadow: {
      type: Boolean,
      default: false
    }
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
  width: 480px;
  height: 320px;
  object-fit: cover;
}

.is-shadow {
  filter: drop-shadow(3px 3px 4px rgba(0,0,0,0.2));
}
</style>
