<template>
  <textarea 
    class="text-area"
    :placeholder="placeHolder"
    :style="contentWidth"
    rows="5"
  />
</template>
<script>
export default {
  props: ['placeHolder','width'],
  computed: {
    contentWidth() {
      const contentSize = this.width ? this.width : 300;
      return 'width: ' + contentSize + 'px';
    }
  }
}
</script>
<style lang="scss" scoped>
.text-area {
  height: 300px;
  padding: 10px 15px;
  border: none;
  background-color: #fff;
  font-size: 18px;
  line-height: 1.2;
  filter: drop-shadow(3px 3px 4px rgba(0,0,0,0.2));
  outline: 0;

  color: #402C2C;
  font-family: "HG明朝E", "ＭＳ Ｐ明朝", "MS PMincho", "MS 明朝", serif;
	font-style: normal;
	font-variant: normal;
	font-weight: 500;
  letter-spacing: 1px;

  &::-webkit-input-placeholder {
    color: #C3BFBF; 
  }
}
</style>
