<template>
	<a :href="link" target="_blank"><img class="img-logo" :src="path" alt="" /></a>
</template>
<script>
export default {
	props: {
		path: String,
		link: String,
	}
}
</script>
<style lang="scss" scoped>
.img-logo {
	height: 60px;
  transition: 0.2s all ease;
  &:hover {
    filter: brightness(110%) drop-shadow(3px 3px 4px #909090f0);
  }
}
</style>
