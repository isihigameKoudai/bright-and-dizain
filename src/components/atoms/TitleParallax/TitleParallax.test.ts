import 'jest'
import { shallowMount } from '@vue/test-utils'
import TitleParallax from './TitleParallax.vue'

describe('TitleParallax.vue', () => {
  test('default test', () => {
    const wrapper = shallowMount(TitleParallax, {
      propsData: {
        path: '/img/TitlePhotograph.jpg',
        title: 'photograph',
      },
    })
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<div class=\\"box-parallax jsc-parallax\\" style=\\"background-image: url(/img/TitlePhotograph.jpg);\\">
        <p class=\\"title-text\\">
          photograph
        </p>
      </div>"
    `)
  })

  test('active test', () => {
    const wrapper = shallowMount(TitleParallax, {
      propsData: {
        isActive: true,
      },
    })
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<div class=\\"box-parallax jsc-parallax\\" style=\\"background-image: url();\\" isactive=\\"true\\">
        <p class=\\"title-text\\">

        </p>
      </div>"
    `)
  })
})
