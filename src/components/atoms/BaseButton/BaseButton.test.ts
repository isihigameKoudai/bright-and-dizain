import 'jest'
import { shallowMount } from '@vue/test-utils'
import BaseButton from './BaseButton.vue'

describe('BaseButton.vue', () => {
  test('is disabled', () => {
    const wrapper = shallowMount(BaseButton, {
      propsData: {
        isDisable: true,
        title: 'button',
      },
    })
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<button disabled=\\"disabled\\" class=\\"btn disable\\">
        button
      </button>"
    `)
  })

  test('is enabled', () => {
    const wrapper = shallowMount(BaseButton, {
      propsData: {
        isDisable: false,
        title: 'button',
      },
    })
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<button class=\\"btn\\">
        button
      </button>"
    `)
  })
})
