<template>
  <ProfileTemplate />
</template>

<script lang="ts">
import Vue from 'vue'

import ProfileTemplate from '@components/templates/ProfileTemplate.vue'

export default Vue.extend({
  name: 'Profile',
  components: {
    ProfileTemplate,
  },
})
</script>
