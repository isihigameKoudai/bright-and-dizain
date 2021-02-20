import LabelSection from './LabelSection.vue'

export default {
  components: { LabelSection },
  title: 'atoms/LabelSection',
  template: '<LabelSection />'
}

export const defaultState = (args, { argTypes }) => ({
  components: { LabelSection },
  props: Object.keys(argTypes),
  template: `<LabelSection>text</LabelSection>`
});

