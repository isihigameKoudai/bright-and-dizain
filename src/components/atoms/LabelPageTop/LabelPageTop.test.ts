import 'jest'
import { shallowMount } from '@vue/test-utils'
import LabelPageTop from './LabelPageTop.vue'

describe('LabelPageTop.vue', () => {
  test('default test', () => {
    const wrapper = shallowMount(LabelPageTop, {
      propsData: {
        fontSize: 24,
      },
    })
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<div class=\\"label-top\\" fontsize=\\"24\\">
        <h1 class=\\"label-top-title\\">
          None
        </h1>
      </div>"
    `)
  })
})
