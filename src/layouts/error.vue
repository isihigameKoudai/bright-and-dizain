<template>
  <div id="error">
    <TheHumburger
      :is-active="modalMode"
      class="fixed-humburegr"
      @click="toggleModal()"
    />
    <TheModal
      v-if="modalMode"
      class="positiond-fixed fixed-content"
    />
    <div class="error-container">
      <h1 class="error-code">
        {{ error.statusCode }}
      </h1>
      <LabelNormal class="taC mt10">
        {{ errorMessage }}
      </LabelNormal>
      <LabelNormal class="taC mt10">
        <nuxt-link
          to="/"
          class="link"
        >
          TOPへ戻る
        </nuxt-link>
      </LabelNormal>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex'
import TheModal from '@components/templates/TheModal'
import TheHumburger from '@components/atoms/TheHumburger'
import LabelNormal from '@components/atoms/LabelNormal'

export default Vue.extend({
  name: 'Default',
  components: {
    TheModal,
    TheHumburger,
    LabelNormal
  },
  props: {
    error: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    ...mapGetters('view', ['modalMode']),
    errorMessage() {
      const code = this.error.statusCode
      switch (code) {
        case 400:
          return 'リクエストエラー、URLに間違いがないか確認してみてください。'
        case 403:
          return 'アクセス権がないためページを表示することができません。'
        case 404:
          return '指定されたページは存在しません。'
        case 500:
        case 502:
        case 503:
          return 'アクセスが集中しています、時間を置いてからアクセスしてみてください。'
        default:
          return '不明なエラーです、TOPに戻ってみてください。'
      }
    }
  },
  methods: {
    ...mapActions({
      toggleModal: 'view/toggleModal'
    })
  }
})
</script>
<style lang="scss" scoped>
#error {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

.error-container {
  width: 80%;
}

.error-code {
  font-size: 100px;
  text-align: center;
  letter-spacing: 2.5px;
}

.link {
  font-size: 22px;
  font-weight: bold;
  text-decoration: none;
  color: #070b10;
  transition-duration: 0.2s;
  &:hover {
    filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.3));
  }
}
</style>
