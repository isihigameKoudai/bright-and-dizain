<template>
  <input 
    :type="exportType"
    class="text-box"
    :placeholder="placeHolder"
    :rows="row"
  />
</template>
<script>
export default {
  props: ['placeHolder','row'],
  computed: {
    exportType() {
      return this.row > 1 ? 'textarea' : 'text'
    }
  }
}
</script>
<style lang="scss" scoped>
.text-box {
  width: 300px;
  height: 40px;
  padding: 10px 15px;
  border: none;
  background-color: #fff;
  font-size: 18px;
  filter: drop-shadow(3px 3px 4px rgba(0,0,0,0.2));
  outline: 0;

  color: #402C2C;
  font-family: "HG明朝E", "ＭＳ Ｐ明朝", "MS PMincho", "MS 明朝", serif;
	font-style: normal;
	font-variant: normal;
	font-weight: 500;
	line-height: 39.6px;
  letter-spacing: 1px;

  &::-webkit-input-placeholder {
    color: #C3BFBF; 
  }
}
</style>
