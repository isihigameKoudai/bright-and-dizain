import ImageBox from './ImageBox.vue'
import image from '@/static/img/TitleWebDevelop.jpg';

export default {
  components: { ImageBox },
  title: 'atoms/ImageBox',
  template: '<ImageBox />'
}

export const withImage = (args, { argTypes }) => ({
  components: { ImageBox },
  props: Object.keys(argTypes),
  template: '<ImageBox :path="path" :shadow="shadow" :is-small="isSmall" />',
})

withImage.args =  {
  path: image,
}

export const isSmall = (args, { argTypes }) => ({
  components: { ImageBox },
  props: Object.keys(argTypes),
  template: '<ImageBox :path="path" :shadow="shadow" :is-small="isSmall" />',
})

isSmall.args = {
  path: image,
  shadow: false,
  isSmall: true
}

export const isShadow = (args, { argTypes }) => ({
  components: { ImageBox },
  props: Object.keys(argTypes),
  template: '<ImageBox :path="path" :shadow="shadow" :is-small="isSmall" />',
})

isShadow.args = {
  path: image,
  shadow: true,
  isSmall: false
}
