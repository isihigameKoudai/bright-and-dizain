<template>
  <h2 class="label-section">
    <slot />
  </h2>
</template>
<script>
export default {
  name: 'LabelSection'
}
</script>
<style lang="scss" scoped>
h2 {
  position: relative;
  font-size: 29px;
  color: #402c2c;
  font-family: Cambria, Georgia, serif;
  font-style: normal;
  font-variant: normal;
  font-weight: 500;
  line-height: 39.6px;
  letter-spacing: 1px;
}
</style>
