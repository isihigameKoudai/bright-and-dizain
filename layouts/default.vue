<template>
  <div>
    <TheHumburger
      :is-active="modal.mode"
      class="fixed-humburegr"
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
import TheHumburger from '@components/atoms/TheHumburger';

export default {
  name: 'Default',
  components: {
    Modal,
    TheHumburger
  },
  computed: {
    ...mapState(['modal'])
  },
  methods: {
    ...mapActions(['toggleModal'])
  }
}

</script>
