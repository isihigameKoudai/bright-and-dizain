import 'jest'
import { shallowMount } from '@vue/test-utils'
import BaseTextBox from './BaseTextBox.vue'

describe('BaseTextBox.vue', () => {
  test('is disabled', () => {
    const wrapper = shallowMount(BaseTextBox, {
      propsData: {
        placeHolder: 'place-holder',
        isInvalid: false,
      },
    })
    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<input placeholder=\\"place-holder\\" type=\\"text\\" class=\\"text-box\\">"`
    )
  })

  test('is enabled', () => {
    const wrapper = shallowMount(BaseTextBox, {
      propsData: {
        placeHolder: 'place-holder',
        isInvalid: true,
      },
    })
    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<input placeholder=\\"place-holder\\" type=\\"text\\" class=\\"text-box is-error\\">"`
    )
  })
})
