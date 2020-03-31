<template>
  <button
    :class="{ disable: isDisable }"
    :disabled="isDisable"
    class="btn"
    @click="pushButton"
  >
    {{ title }}
  </button>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseButton',
  props: {
    title: {
      type: String,
      default: ''
    },
    isDisable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    pushButton(e) {
      this.$emit('click')
    }
  }
})
</script>
<style lang="scss" scoped>
.btn {
  position: relative;
  width: 185px;
  height: 44px;
  border-radius: 3px;
  letter-spacing: 2px;
  font-size: 17px;
  font-weight: bold;
  font-family: 'ヒラギノ明朝 ProN W3', 'HiraMinProN-W3', 'HG明朝E',
    'ＭＳ Ｐ明朝', 'MS PMincho', 'MS 明朝', serif;
  outline: 0;

  color: #fff;
  background-color: #070b10;
  border: solid 4px #070b10;
  transition: 0.2s all ease;
  filter: drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.2));

  &::before {
    position: absolute;
    content: '';
    top: 14px;
    right: 10px;
    width: 12px;
    height: 2px;
    background-color: #fff;
    transform: rotate(45deg);
  }

  &::after {
    position: absolute;
    content: '';
    bottom: 12px;
    right: 10px;
    width: 12px;
    height: 2px;
    background-color: #fff;
    transform: rotate(-45deg);
  }

  &:hover {
    background-color: #fff;
    color: #070b10;
    filter: drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.6));

    &::before {
      background-color: #070b10;
    }

    &::after {
      background-color: #070b10;
    }
  }

  &.disable {
    background: #c1c1c1;
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
