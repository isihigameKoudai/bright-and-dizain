<template>
  <div
    class="image-box"
    :style="{ backgroundImage: 'url('+ imagePath +')' }"
    @click="updateImagePath(path); updateModal('image');"
    ></div>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    path: {
      type: String,
    }
  },
  computed: {
    toggleShadow() {
      return this.shadow ? 'shadow' : '';
    },
    imagePath() {
      return this.path ? this.path : '/img/NonThumbnail.png';
    }
  },
  methods: {
    ...mapMutations(['updateModal','updateImagePath']),
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
    }
  }

  @media screen and (max-width: 768px){
    width: 33vw;
    height: 33vw;
  }
}
</style>
