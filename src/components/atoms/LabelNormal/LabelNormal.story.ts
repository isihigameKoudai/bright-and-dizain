import LabelNormal from './LabelNormal.vue'

export default {
  components: { LabelNormal },
  title: 'atoms/LabelNormal',
  template: '<LabelNormal />'
}

export const defaultState = (args, { argTypes }) => ({
  components: { LabelNormal },
  props: Object.keys(argTypes),
  template: `<LabelNormal :font-size="LabelNormal">{{ title }}</LabelNormal>`
});

defaultState.args = {
  title: 'ラベル',
  fontSize: 24
}
