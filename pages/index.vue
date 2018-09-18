<template>
  <div class="top-container">
    <img class="main-visual" src="/img/mainImageSmall.JPG" alt="mainVisual"/>
    <img class="title-position appear" src="/svg/mainTitleWhite.svg" alt="" width="200px"  />
  </div>
</template>

<script>
import { init, scroller } from '~/utils/animations';

export default {
  name: 'index',
  mounted() {
    init();
    scroller();
  }
}
</script>

<style lang="scss" scoped>
@import url('~/assets/css/animation.scss');

.top-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.title-position {
  position: absolute;
  top: 50%;
  left: 10vw;
  transform: translate3d(0,-50%,0);
}

.main-visual {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  filter: brightness(97%) opacity(83%);
}

</style>
