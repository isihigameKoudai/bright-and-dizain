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
      `"<div class=\\"image-box\\" style=\\"background-image: url(assets/img/portfolio/creative/c1.jpg);\\"></div>"`
    )
  })

  test('no props', () => {
    const wrapper = shallowMount(ImageBoxThumbnail, {
      propsData: {
        path: '',
      },
    })
    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<div class=\\"image-box\\" style=\\"background-image: url(/static/img/NonThumbnail.png);\\"></div>"`
    )
  })
})
