<template>
  <div class="img-circle">
    <img
      :src="path"
      alt=""
    >
  </div>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'ImageCircle',
  props: {
    path: {
      type: String,
      default: ''
    }
  }
})
</script>
<style lang="scss" scoped>
.img-circle {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 1;
  @media screen and (max-width: 768px) {
    width: 130px;
    height: 130px;
  }
}

.img-circle > img {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: auto;
  transform: translate3d(-50%, -50%, 0);
}
</style>
