<template>
  <div class="pb100">
    <label-page-top 
      :title="title" 
      class="position-title"
    />
    <slot />
  </div>
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
