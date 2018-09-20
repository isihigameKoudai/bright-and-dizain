<template>
  <transition name="fade">
    <div>
      <div
        class="modal-wrap"
        @click="toggleModal()"
        :key="1"
      ></div>
      <modal-image v-if="modal.modalType === 'image'" class="modal-content" :key="2"/>
      <modal-complet-email v-else-if="modal.modalType === 'email'" class="modal-content" :key="3"/>
      <modal-menu v-else class="modal-content" :key="4" />
    </div>  
  </transition>
</template>
<script>
import ModalMenu from '../organisms/ModalMenu';
import ModalImage from '../organisms/ModalImage';
import ModalCompletEmail from '../organisms/ModalCompleteEmail';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'Modal',
  computed: {
    ...mapState(['modal']),
    ...mapActions(['toggleModal'])
  },
  components: {
    ModalMenu,
    ModalImage,
    ModalCompletEmail
  }
}

</script>
<style lang="scss" scoped>

.modal-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #1D1D24, $alpha: 0.9);
}

.modal-content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 10;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
