<template>
  <article class="pb100">
    <label-page-top 
      :title="title" 
      class="position-title"
    />
    <slot />
  </article>
</template>
<script>
import LabelPageTop from '@components/atoms/LabelPageTop';

export default {
	name: 'DefaultView',
  components: {
		LabelPageTop
  },
	props: {
		title: {
			type: String,
			default: 'None'
		}
	},
}

</script>
<style lang="scss" scoped>
</style>
