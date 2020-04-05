import 'jest'
import { shallowMount } from '@vue/test-utils'
import ImageTitle from './ImageTitle.vue'

describe('ImageTitle.vue', () => {
  test('default test', () => {
    const wrapper = shallowMount(ImageTitle, {
      propsData: {
        isDark: false,
      },
    })
    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<img src=\\"/svg/title_white.svg\\" alt=\\"\\" width=\\"200px\\">"`
    )
  })

  test('dark image test', () => {
    const wrapper = shallowMount(ImageTitle, {
      propsData: {
        isDark: true,
      },
    })
    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<img src=\\"/svg/title_black.svg\\" alt=\\"\\" width=\\"200px\\">"`
    )
  })
})
