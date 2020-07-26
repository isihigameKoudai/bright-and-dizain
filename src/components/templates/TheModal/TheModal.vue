<template>
  <transition name="fade">
    <div
      v-show="modalMode"
      class="the-modal"
    >
      <div
        :key="1"
        class="modal-wrap"
        @click="toggleModal()"
      />
      <TheModalImage
        v-if="modalType === 'image'"
        :key="2"
        class="modal-content"
      />
      <TheModalCompletEmail
        v-else-if="modalType === 'contact'"
        :key="3"
        class="modal-content"
      />
      <TheModalMenu
        v-else
        :key="4"
        class="modal-content"
      />
    </div>
  </transition>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex'
import TheModalMenu from '@components/organisms/TheModalMenu'
import TheModalImage from '@components/organisms/TheModalImage'
import TheModalCompletEmail from '@components/organisms/TheModalCompleteEmail'

export default Vue.extend({
  name: 'TheModal',
  components: {
    TheModalMenu,
    TheModalImage,
    TheModalCompletEmail
  },
  computed: {
    ...mapGetters('view', ['modalType', 'modalMode'])
  },
  methods: {
    ...mapActions({
      toggleModal: 'view/toggleModal'
    })
  }
})
</script>
<style lang="scss" scoped>
.modal-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #1d1d24, $alpha: 0.9);
}

.modal-content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.fade-enter-active,
.fade-leave-to {
  transition: opacity 0.2s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
