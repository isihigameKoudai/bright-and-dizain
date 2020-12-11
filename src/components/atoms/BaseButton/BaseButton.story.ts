import BaseButton from './BaseButton.vue'

export default {
  components: { BaseButton },
  title: 'atoms/BaseButton',
  template: '<BaseButton :title="title" @click="onClick" />',
}

export const withTitle = () => ({
  components: { BaseButton },
  template: '<BaseButton title="ボタン" :is-disable="false" />'
});
