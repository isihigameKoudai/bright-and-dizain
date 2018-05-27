<template>
  <button 
    class="btn"
    :class="{'disable': disable}"
    :disabled="disable"
  >{{title}}</button>
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
.btn {
  position: relative;
  width: 185px;
  height: 40px;
  border-radius: 2px;
  letter-spacing: 2px;
  font-size: 17px;
  font-weight: bold;
  font-family: "ヒラギノ明朝 ProN W3", "HiraMinProN-W3", "HG明朝E", "ＭＳ Ｐ明朝", "MS PMincho", "MS 明朝", serif;

  color: #fff;
  background-color: #070B10;
  border: solid 4px #070B10;



  &::before {
    position: absolute;
    content: '';
    top: 12px;
    right: 10px;
    width: 12px;
    height: 2px;
    background-color: #fff;
    transform: rotate(45deg);
  }

  &::after {
    position: absolute;
    content: '';
    bottom: 10px;
    right: 10px;
    width: 12px;
    height: 2px;
    background-color: #fff;
    transform: rotate(-45deg);
  }

  &:active {
    background-color: #fff;
    color: #070B10;
    outline: 0;

    &::before {
      background-color: #070B10;
    }

    &::after {
      background-color: #070B10;
    }
  }

  &.disable {
    background: #C1C1C1;
    color: #777;
    border: solid 4px #777;
    filter: none;

    &::before {
      background-color: #777;
    }

    &::after {
      background-color: #777;
    }
  }
 }
</style>
