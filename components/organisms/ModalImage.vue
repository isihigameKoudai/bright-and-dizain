<template>
	<img
		class="modal-image"
		:src="imagePath"
		alt=""
	/>
</template>
<script>
import {mapState} from 'vuex';

export default {
	name: 'ModalImage',
	computed: {
		...mapState(['imagePath']),
	}
}
	
</script>
<style lang="scss" scoped>
.modal-image {
	max-width: calc(100vw - 200px);
	max-height: calc(100vh - 100px);

	@media screen and (max-width: 768px){
		max-width: calc(100vw - 50px);
	}
}
</style>
