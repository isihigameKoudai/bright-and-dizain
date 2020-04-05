import 'jest'
import { shallowMount } from '@vue/test-utils'
import BaseTextArea from './BaseTextArea.vue'

describe('BaseTextArea.vue', () => {
  test('is disabled', () => {
    const wrapper = shallowMount(BaseTextArea, {
      propsData: {
        placeHolder: 'place-holder',
        isInvalid: false,
      },
    })
    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<textarea placeholder=\\"place-holder\\" rows=\\"5\\" class=\\"text-area\\"></textarea>"`
    )
  })

  test('is enabled', () => {
    const wrapper = shallowMount(BaseTextArea, {
      propsData: {
        placeHolder: 'place-holder',
        isInvalid: true,
      },
    })
    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<textarea placeholder=\\"place-holder\\" rows=\\"5\\" class=\\"text-area is-error\\"></textarea>"`
    )
  })
})
