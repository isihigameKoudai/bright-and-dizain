<template>
  <transition name="fade">
    <div
      class="modal-wrap"
    >
      <modal-image v-if="modal.modalType === 'image'"/>
      <modal-menu v-else/>
    </div>   
  </transition> 
</template>
<script>
import ModalMenu from '../organisms/ModalMenu';
import ModalImage from '../organisms/ModalImage';
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['modal']),
  },
  components: {
    ModalMenu,
    ModalImage
  }
}

</script>
<style lang="scss" scoped>

.modal-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba($color: #1D1D24, $alpha: 0.9);
  z-index: 100;

  & > * {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
