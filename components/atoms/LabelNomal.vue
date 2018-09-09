<template>
  <p 
    class="label-nomal"
    :style="exportFontSize"
  >{{content}}</p>
</template>
<script>
export default {
  name: 'LabelNomal',
  props: ['content','fontSize'],
  computed: {
    exportFontSize() {
      const size = this.fontSize ? 'font-size: ' + this.fontSize + 'px' : '';
      return size;
    }
  }
}
</script>
<style lang="scss" scoped>

.label-nomal {
  position: relative;
  font-size: 16px;
  color: #402C2C;
  font-family: "HG明朝E", "ＭＳ Ｐ明朝", "MS PMincho", "MS 明朝", serif;
	font-style: normal;
	font-variant: normal;
	font-weight: 500;
	line-height: 36.6px;
  letter-spacing: 2.5px;
}
</style>
