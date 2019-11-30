<template>
  <div
    :style="{ backgroundImage: 'url(' + path + ')' }"
    class="box-parallax jsc-parallax"
  >
    <p class="title-text">
      {{ title }}
    </p>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TitleParallax',
  props: {
    path: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
})
</script>
<style lang="scss" scoped>
.box-parallax {
  position: relative;
  width: 100vw;
  height: 300px;
  background: none;
  overflow: hidden;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  filter: brightness(90%) opacity(80%);

  @media screen and (max-width: 768px) {
    height: 100vh;
    background-size: auto 100vh;
    background-attachment: scroll;
  }
}

.title-text {
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);

  color: #fff;
  text-align: center;
  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.8);
  font-size: 68px;
  font-family: Cambria, Georgia, serif;
  font-style: normal;
  font-variant: normal;
}
</style>
