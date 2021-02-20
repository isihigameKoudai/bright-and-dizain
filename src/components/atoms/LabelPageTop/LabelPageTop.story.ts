import LabelPageTop from './LabelPageTop.vue'

export default {
  components: { LabelPageTop },
  title: 'atoms/LabelPageTop',
  template: '<LabelPageTop />'
}

export const defaultState = (args, { argTypes }) => ({
  components: { LabelPageTop },
  props: Object.keys(argTypes),
  template: `<LabelPageTop :title="title" />`
});

defaultState.args = {
  title: 'ラベル',
}
