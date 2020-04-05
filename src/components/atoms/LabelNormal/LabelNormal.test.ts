import 'jest'
import { shallowMount } from '@vue/test-utils'
import LabelNormal from './LabelNormal.vue'

describe('LabelNormal.vue', () => {
  test('default test', () => {
    const wrapper = shallowMount(LabelNormal, {
      propsData: {
        fontSize: 24,
      },
    })
    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<p class=\\"label-normal\\" style=\\"font-size: 24px;\\"></p>"`
    )
  })
})
