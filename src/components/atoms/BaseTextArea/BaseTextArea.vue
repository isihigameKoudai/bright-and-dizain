<template>
  <textarea
    :placeholder="placeHolder"
    :class="{ 'is-error': isInvalid}"
    class="text-area"
    rows="5"
    @input="event => $emit('text', event.target.value)"
  />
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'BaseTextArea',
  props: {
    placeHolder: {
      type: String,
      default: ''
    },
    isInvalid: {
      type: Boolean,
      default: false
    }
  }
})
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
  filter: drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.2));
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.2);
  outline: 0;
  resize: none;

  color: #402c2c;
  font-family: 'HG明朝E', 'ＭＳ Ｐ明朝', 'MS PMincho', 'MS 明朝', serif;
  font-style: normal;
  font-variant: normal;
  font-weight: 500;
  letter-spacing: 1px;
  -webkit-appearance: none;

  &.is-error {
    border: solid 1px #f51f1f;
  }

  &::-webkit-input-placeholder {
    color: #c3bfbf;
  }

  @media screen and (max-width: 768px) {
    width: calc(100% - 100px);
  }
}
</style>
