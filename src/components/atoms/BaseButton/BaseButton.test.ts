import 'jest'
import { shallowMount } from '@vue/test-utils'
import BaseButton from './BaseButton.vue'

describe('BaseButton.vue', () => {
  test('is abled', () => {
    const wrapper = shallowMount(BaseButton, {
      propsData: {
        isDisable: true,
        title: 'button'
      }
    })
    expect(wrapper.html()).toEqual(
`<button disabled="disabled" class="btn disable">
  button
</button>`
    )
  })
})
