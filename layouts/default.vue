<template>
  <div>
    <humburger
      class="fixed-humburegr"
      :isActive="modal.mode"
      @click="toggleModal()"
    />
    <nuxt />
    <Modal
      v-if="modal.mode"
      class="positiond-fixed fixed-content"
    />
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import Modal from '@components/templates/Modal';
import Humburger from '@components/atoms/Humburger';

export default {
  name: 'default',
  components: {
    Modal,
    Humburger
  },
  computed: {
    ...mapState(['modal'])
  },
  methods: {
    ...mapActions(['toggleModal'])
  }
}

</script>