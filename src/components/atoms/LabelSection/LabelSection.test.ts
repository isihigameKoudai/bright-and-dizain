import 'jest'
import { shallowMount } from '@vue/test-utils'
import LabelSection from './LabelSection.vue'

describe('LabelSection.vue', () => {
  test('default test', () => {
    const wrapper = shallowMount(LabelSection, {
      slots: {
        default: 'hello',
      },
    })
    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<h2 class=\\"label-section\\">hello</h2>"`
    )
  })
})
