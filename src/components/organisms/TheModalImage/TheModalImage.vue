<template>
  <img
    :src="imagePath"
    class="modal-image"
    loading="lazy"
    decoding="async"
    alt="modal-img"
  >
</template>
<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'TheModalImage',
  computed: {
    ...mapGetters('view', ['imagePath'])
  }
})
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
