<template>
  <img
    :src="path"
    :class="{ 'is-shadow': shadow, small: isSmall }"
    alt=""
    class="image-box"
  />
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ImageBox',
  props: {
    path: {
      type: String,
      default: ''
    },
    shadow: {
      type: Boolean,
      default: false
    },
    isSmall: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    toggleShadow() {
      return this.shadow ? 'shadow' : ''
    }
  }
})
</script>
<style lang="scss" scoped>
.image-box {
  width: 480px;
  height: 320px;
  object-fit: cover;
}

.image-box.small {
  width: 320px;
  height: 240px;
}

@media screen and (max-width: 768px) {
  .image-box,
  .image-box.small {
    width: 100vw;
    height: auto;
  }
}

.is-shadow {
  filter: drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.2));
}
</style>
