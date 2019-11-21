<template>
  <div>
    <TheHumburger
      :is-active="modal.mode"
      class="fixed-humburegr"
      @click="toggleModal"
    />
    <nuxt />
    <TheModal
      v-if="modal.mode"
      class="positiond-fixed fixed-content"
    />
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import TheModal from '@components/templates/TheModal';
import TheHumburger from '@components/atoms/TheHumburger';

export default {
  name: 'Default',
  components: {
    TheModal,
    TheHumburger
  },
  computed: {
    ...mapState('view', ['modal'])
  },
  methods: {
    ...mapActions({
      toggleModal: 'view/toggleModal'
    })
  }
}

</script>
