import 'jest'
import { shallowMount } from '@vue/test-utils'
import ImageCircle from './ImageCircle.vue'

describe('ImageCircle.vue', () => {
  test('default test', () => {
    const wrapper = shallowMount(ImageCircle, {
      propsData: {
        path: 'assets/img/portfolio/creative/c1.jpg',
      },
    })
    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<div class=\\"img-circle\\"><img src=\\"assets/img/portfolio/creative/c1.jpg\\" alt=\\"\\"></div>"`
    )
  })
})
