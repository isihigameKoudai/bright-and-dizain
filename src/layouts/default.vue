<template>
  <div>
    <TheHamburger
      :is-active="modalMode"
      class="fixed-humburegr"
      @click="toggleModal"
    />
    <nuxt />
    <TheModal class="positiond-fixed fixed-content" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import TheModal from '@components/templates/TheModal'
import TheHamburger from '@components/atoms/TheHamburger'

export default Vue.extend({
  name: 'Default',
  components: {
    TheModal,
    TheHamburger
  },
  computed: {
    ...mapGetters('view', ['modalMode'])
  },
  methods: {
    ...mapActions({
      toggleModal: 'view/toggleModal'
    })
  }
})
</script>
