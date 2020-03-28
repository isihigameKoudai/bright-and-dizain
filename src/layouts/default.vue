<template>
  <div>
    <TheHumburger
      :is-active="modalMode"
      class="fixed-humburegr"
      @click="toggleModal"
    />
    <nuxt />
    <TheModal
      v-if="modalMode"
      class="positiond-fixed fixed-content"
    />
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import TheModal from '@components/templates/TheModal'
import TheHumburger from '@components/atoms/TheHumburger'

export default {
  name: 'Default',
  components: {
    TheModal,
    TheHumburger
  },
  computed: {
    ...mapGetters('view', ['modalMode'])
  },
  methods: {
    ...mapActions({
      toggleModal: 'view/toggleModal'
    })
  }
}
</script>
