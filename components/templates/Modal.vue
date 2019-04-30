<template>
  <transition name="fade">
    <div>
      <div
        :key="1"
        class="modal-wrap"
        @click="toggleModal()"
      />
      <modal-image 
        v-if="modal.modalType === 'image'" 
        :key="2" 
        class="modal-content"
      />
      <modal-complet-email 
        v-else-if="modal.modalType === 'contact'" 
        :key="3" 
        class="modal-content"
      />
      <modal-menu 
        v-else 
        :key="4" 
        class="modal-content"
      />
    </div>  
  </transition>
</template>
<script>
import ModalMenu from '../organisms/ModalMenu';
import ModalImage from '../organisms/ModalImage';
import ModalCompletEmail from '../organisms/ModalCompleteEmail';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Modal',
  components: {
    ModalMenu,
    ModalImage,
    ModalCompletEmail
  },
  computed: {
    ...mapState(['modal']),
  },
  methods: {
    ...mapActions(['toggleModal'])
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
  background: rgba($color: #1d1d24, $alpha: 0.9);
  z-index: 50;
}

.modal-content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 60;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
