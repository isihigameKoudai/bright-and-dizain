<template>
  <div class="label-top">
    <h1>{{title}}</h1>
  </div>
</template>
<script>
export default {
  props: ['title'],
  data() {
    return {
      disable: false,
    }
  },
}
</script>
<style lang="scss" scoped>
.label-top {
  position: relative;
  width: auto;
  text-align: center;
  height: 60px;

  &::after {
    position: relative;
    content: '';
    display: block;
    bottom: 0px;
    width: 50px;
    height: 3px;
    top: 18px;
    background: #402C2C;
    margin-left: auto;
    margin-right: auto;
  }
}

h1 {
  position: relative;
  font-size: 36px;
  color: #402C2C;
  font-family: Cambria, Georgia, serif;
	font-style: normal;
	font-variant: normal;
	font-weight: 500;
	line-height: 39.6px;
  letter-spacing: 2px;
}
</style>
