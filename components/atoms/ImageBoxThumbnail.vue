<template>
  <div
    class="image-box"
    :style="{ backgroundImage: 'url('+ imagePath +')' }"
    @click="$emit('click')"
    ></div>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ImageBoxThumbnail',
  props: {
    path: {
      type: String,
      default: '/img/NonThumbnail.png'
    }
  },
  computed: {
    imagePath() {
      return this.path ? this.path : '/static/img/NonThumbnail.png';
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
  background: none;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: 0.2s all ease;

  @media screen and (min-width: 769px){
    &:hover {
      filter: drop-shadow(3px 3px 4px #909090f0);
      transform: translate(-1px,-1px);
    }
  }

  @media screen and (max-width: 768px){
    width: 33vw;
    height: 33vw;
  }
}
</style>
