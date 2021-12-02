<template>
  <PortfolioTemplate @select-image="onClickModal" />
</template>

<script>
import Vue from 'vue'
import { mapActions } from 'vuex'

import PortfolioTemplate from '@components/templates/PortfolioTemplate.vue'

export default Vue.extend({
  name: 'Portfolio',
  components: {
    PortfolioTemplate,
  },
  methods: {
    ...mapActions({
      setImagePath: 'view/setImagePath',
      updateModal: 'view/updateModal',
    }),
    onClickModal(path) {
      this.setImagePath(path)
      this.updateModal('image')
    },
  },
})
</script>
