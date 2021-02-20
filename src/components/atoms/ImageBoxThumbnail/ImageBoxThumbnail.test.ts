import 'jest'
import { shallowMount } from '@vue/test-utils'
import ImageBoxThumbnail from './ImageBoxThumbnail.vue'

describe('ImageBoxThumbnail.vue', () => {
  test('default test', () => {
    const wrapper = shallowMount(ImageBoxThumbnail, {
      propsData: {
        path: 'assets/img/portfolio/creative/c1.jpg',
      },
    })
    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<figure><img src=\\"assets/img/portfolio/creative/c1.jpg\\" alt=\\"image\\" loading=\\"lazy\\" decoding=\\"async\\" class=\\"image\\"></figure>"`
    )
  })

  test('no props', () => {
    const wrapper = shallowMount(ImageBoxThumbnail, {
      propsData: {
        path: '',
      },
    })
    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<figure><img src=\\"\\" alt=\\"image\\" loading=\\"lazy\\" decoding=\\"async\\" class=\\"image\\"></figure>"`
    )
  })
})
