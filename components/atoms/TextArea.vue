<template>
  <textarea 
    class="text-area"
    :class="{'is-error': isInvalid}"
    :placeholder="placeHolder"
    rows="5"
    @input="event => $emit('text', event.target.value)"
  />
</template>
<script>
export default {
  name: 'TextArea',
  props: {
    placeHolder: {
      type: String,
      default: ''
    },
    isInvalid: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      text: '',
    }
  }
}
</script>
<style lang="scss" scoped>
.text-area {
  width: 380px;
  height: 300px;
  padding: 10px 15px;
  border: none;
  background-color: #fff;
  font-size: 18px;
  line-height: 1.2;
  filter: drop-shadow(3px 3px 4px rgba(0,0,0,0.2));
  outline: 0;
  resize: none;

  color: #402C2C;
  font-family: "HG明朝E", "ＭＳ Ｐ明朝", "MS PMincho", "MS 明朝", serif;
	font-style: normal;
	font-variant: normal;
	font-weight: 500;
  letter-spacing: 1px;

  &.is-error {
    border: solid 1px #F51F1F;
  }

  &::-webkit-input-placeholder {
    color: #C3BFBF; 
  }

  @media screen and (max-width: 768px){
    width: calc(100% - 100px);
  }
}
</style>
