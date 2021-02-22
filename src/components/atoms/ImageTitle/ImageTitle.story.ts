import ImageTitle from './ImageTitle.vue'

const decorator = () => ({
  template: `<div style="background: #eee; padding: 30px;">
    <story />
  </div>`
})

export default {
  components: { ImageTitle },
  title: 'atoms/ImageTitle',
  template: '<ImageTitle />',
  decorators: [decorator]
}

export const defaultState = (args, { argTypes }) => ({
  components: { ImageTitle },
  props: Object.keys(argTypes),
  template: `<ImageTitle :is-dark="isDark" />`
});

export const isDark = (args, { argTypes }) => ({
  components: { ImageTitle },
  template: `<ImageTitle :is-dark="true" />`
});

