import Vue, { ComponentOptions } from 'vue'
import { Route } from 'vue-router'

import { Context, Middleware, Transition, NuxtApp } from '../nuxt/index.d.ts'

declare module 'vue/types/options' {
  type MetaInfo = {
    title: string
    meta: {
      hid: string
      name: string
      content: string
    }[]
  }
  interface ComponentOptions<V extends Vue> {
    asyncData?(ctx: Context): object | undefined
    fetch?(ctx: Context): Promise<void> | void
    head?: MetaInfo | (() => MetaInfo)
    key?: string | ((to: Route) => string)
    layout?: string | ((ctx: Context) => string)
    loading?: boolean
    middleware?: Middleware | Middleware[]
    scrollToTop?: boolean
    transition?: string | Transition | ((to: Route, from: Route) => string)
    validate?(ctx: Context): Promise<boolean> | boolean
    watchQuery?: boolean | string[]
  }
}

declare module 'vue/types/vue' {
  type MetaInfo = {
    title: string
    meta: {
      hid: string
      name: string
      content: string
    }[]
  }
  interface Vue {
    $nuxt: NuxtApp
  }
}

// 最小単位のVueのtypes
// NuxtではなくVue単体の場合はこちらでも良い
// declare module '*.vue' {
//   import Vue from 'vue'
//   export default Vue
// }
