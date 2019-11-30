<template>
  <div class="label-top">
    <h1>{{ title }}</h1>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LabelPageTop',
  props: {
    title: {
      type: String,
      default: 'None'
    }
  }
})
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
    background: #402c2c;
    margin-left: auto;
    margin-right: auto;
  }
}

h1 {
  position: relative;
  font-size: 36px;
  color: #402c2c;
  font-family: Cambria, Georgia, serif;
  font-style: normal;
  font-variant: normal;
  font-weight: 500;
  line-height: 39.6px;
  letter-spacing: 2px;
}
</style>
