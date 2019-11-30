<template>
  <article class="pb100">
    <label-page-top :title="title" class="position-title" />
    <slot />
  </article>
</template>
<script>
import Vue from 'vue'
import LabelPageTop from '@components/atoms/LabelPageTop'

export default Vue.extend({
  name: 'TheDefaultView',
  components: {
    LabelPageTop
  },
  props: {
    title: {
      type: String,
      default: 'None'
    }
  }
})
</script>
<style lang="scss" scoped></style>
