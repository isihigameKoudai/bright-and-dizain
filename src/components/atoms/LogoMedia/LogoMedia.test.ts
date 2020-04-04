import 'jest'
import { shallowMount } from '@vue/test-utils'
import LogoMedia from './LogoMedia.vue'

describe('LogoMedia.vue', () => {
  test('default test', () => {
    const wrapper = shallowMount(LogoMedia, {})
    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<a href=\\"\\" target=\\"_blank\\"><img src=\\"\\" alt=\\"\\" class=\\"img-logo\\"></a>"`
    )
  })
})
