<template>
  <input
    :class="{ 'is-error': isInvalid }"
    :placeholder="placeHolder"
    type="text"
    :value="value"
    class="text-box"
    @input="event => $emit('text', event.target.value)"
  />
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseTextBox',
  props: {
    placeHolder: {
      type: String,
      default: ''
    },
    isInvalid: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  }
})
</script>
<style lang="scss" scoped>
.text-box {
  position: relative;
  width: 380px;
  padding: 7px 15px;
  border: none;
  background-color: #fff;
  font-size: 18px;
  filter: drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.2));
  outline: 0;
  box-sizing: border-box;

  color: #402c2c;
  font-family: 'HG明朝E', 'ＭＳ Ｐ明朝', 'MS PMincho', 'MS 明朝', serif;
  font-style: normal;
  font-variant: normal;
  font-weight: 500;
  line-height: 39.6px;
  letter-spacing: 1px;
  -webkit-appearance: none;

  &::-webkit-input-placeholder {
    color: #c3bfbf;
  }

  &.is-error {
    border: solid 1px #f51f1f;
  }

  @media screen and (max-width: 768px) {
    width: calc(100% - 100px);
  }
}
</style>
