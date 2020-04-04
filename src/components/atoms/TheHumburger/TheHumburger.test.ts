import 'jest'
import { shallowMount } from '@vue/test-utils'
import TheHumburger from './TheHumburger.vue'

describe('TheHumburger.vue', () => {
  test('default test', () => {
    const wrapper = shallowMount(TheHumburger, {
      propsData: {
        isActive: false,
      },
    })
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<div class=\\"btn-humburger\\">
        <div></div>
        <div></div>
      </div>"
    `)
  })

  test('active test', () => {
    const wrapper = shallowMount(TheHumburger, {
      propsData: {
        isActive: true,
      },
    })
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<div class=\\"btn-humburger is-active on-modal\\">
        <div></div>
        <div></div>
      </div>"
    `)
  })
})
