<template>
  <PlanTemplate />
</template>

<script lang="ts">
import Vue from 'vue'

import PlanTemplate from '@components/templates/PlanTemplate.vue'

export default Vue.extend({
  name: 'Plan',
  components: {
    PlanTemplate,
  },
})
</script>
