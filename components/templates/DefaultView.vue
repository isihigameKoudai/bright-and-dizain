<template>
	<div class="pb100">
		<label-page-top class="position-title" :title="title"/>
		<slot />
	</div>
</template>
<script>
import LabelPageTop from '@components/atoms/LabelPageTop';

export default {
	name: 'DefaultView',
	props: {
		title: {
			type: String,
			default: 'None'
		}
	},
  components: {
		LabelPageTop
  }
}

</script>
<style lang="scss" scoped>

</style>
