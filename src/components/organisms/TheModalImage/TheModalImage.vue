<template>
  <img :src="imagePath" class="modal-image" alt="" />
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TheModalImage',
  computed: {
    ...mapGetters('view', ['imagePath'])
  }
}
</script>
<style lang="scss" scoped>
.modal-image {
  max-width: calc(100vw - 200px);
  max-height: calc(100vh - 100px);

  @media screen and (max-width: 768px) {
    max-width: calc(100vw - 50px);
  }
}
</style>
