<template>
  <div 
    class="box-parallax"
    :style="{ backgroundImage: 'url(' + path + ')' }"
  >
    <p>{{title}}</p>
  </div>
</template>
<script>
export default {
  name: 'TitleParallax',
  props: {
    path: String,
    title: String
  },
}
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

  p {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    width: auto;
    height: auto;
    color: #fff;
    text-align: center;
    text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.8);
    transform: translate3d(-50%,-50%,0);
    font-size: 68px;
    font-family: Cambria, Georgia, serif;
    font-style: normal;
    font-variant: normal;
  }

  @media screen and (max-width: 768px){
    height: 100vh;
    background-size: auto 100vh;
    background-attachment: scroll;
  }
}
</style>
