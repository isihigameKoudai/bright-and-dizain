import 'jest'
import { shallowMount } from '@vue/test-utils'
import ImageBox from './ImageBox.vue'

describe('ImageBox.vue', () => {
  test('default ImageBox', () => {
    const wrapper = shallowMount(ImageBox, {
      propsData: {
        isSmall: false,
        path: 'assets/img/portfolio/creative/c1.jpg',
      },
    })
    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<img src=\\"assets/img/portfolio/creative/c1.jpg\\" alt=\\"\\" class=\\"image-box\\">"`
    )
  })

  test('small and shadow', () => {
    const wrapper = shallowMount(ImageBox, {
      propsData: {
        isSmall: true,
        shadow: true,
        path: '~/assets/img/portfolio/creative/c1.jpg',
      },
    })
    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<img src=\\"~/assets/img/portfolio/creative/c1.jpg\\" alt=\\"\\" class=\\"image-box is-shadow small\\">"`
    )
  })
})
