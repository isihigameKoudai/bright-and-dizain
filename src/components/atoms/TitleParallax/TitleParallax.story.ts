import TitleParallax from './TitleParallax.vue'

// import { setParallax } from '@/utils/parallax.ts'

const decorator = () => ({
  template: `<div style="padding-top: 300px; padding-bottom: 300px;">
    <h1 style="text-align: center;">scroll</h1>
    <story />
  </div>`
})

export default {
  components: { TitleParallax },
  title: 'atoms/TitleParallax',
  template: '<TitleParallax />',
  decorators: [decorator]
}

 const Template = (args, { argTypes }) => ({
  components: { TitleParallax },
  props: Object.keys(argTypes),
  template: `<TitleParallax :path="path" :title="title" />`
});

export const defaultState = Template.bind({})
defaultState.args = {
  path: '/img/TitlePhotograph.jpg',
}

// setParallax();
