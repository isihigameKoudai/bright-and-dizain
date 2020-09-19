<template>
  <figure>
    <img
      :src="path"
      :alt="alt"
      loading="lazy"
      decoding="async"
      class="image"
      @click="() => $emit('click')"
    >
  </figure>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Sample',
  props: {
    path: {
      type: String,
      default: '/img/NonThumbnail.png'
    },
    alt: {
      type: String,
      default: 'image'
    }
  },
  computed: {
    imagePath() {
      return this.path ? this.path : '/static/img/NonThumbnail.png'
    }
  }
})
</script>
<style lang="scss" scoped>
.image {
  width: 300px;
  height: 300px;
  border: none;
  background: none;
  overflow: hidden;
  object-fit: cover;
  transition: 0.2s all ease;

  @media screen and (min-width: 769px) {
    &:hover {
      filter: drop-shadow(3px 3px 4px #909090f0);
      transform: translate(-1px, -1px);
    }
  }

  @media screen and (max-width: 768px) {
    width: 33vw;
    height: 33vw;
  }
}
</style>
