<template>
  <div>
    <ul>
      <li
        v-for="(menu, index) in menus"
        :key="index"
        :text="menu.title"
        class="list-menu"
        @click="toggleModal"
      >
        <nuxt-link :to="menu.path">
          {{ menu.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex'

export default Vue.extend({
  name: 'TheModalMenu',
  data() {
    return {
      menus: [{
        title: 'Top',
        path: '/'
      },
      {
        title: 'Profile',
        path: '/profile'
      },
      {
        title: 'Portfolio',
        path: '/portfolio'
      },
      {
        title: 'Plan',
        path: '/plan'
      },
      {
        title: 'Contact',
        path: '/contact'
      }]
    }
  },
  methods: {
    ...mapActions({
      toggleModal: 'view/toggleModal'
    })
  }
})
</script>
<style lang="scss" scoped>
.list-menu {
  position: relative;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.9));
  text-align: center;
  opacity: 1;
  font-size: 40px;
  font-family: Cambria, Georgia, serif;
  letter-spacing: 2px;
  list-style: none;
  background: transparent;

  a {
    text-decoration: none;
    color: #fff;
  }

  &:not(:first-child) {
    margin-top: 30px;
  }

  @media screen and (min-width: 769px) {
    &:after,
    &::before {
      position: absolute;
      content: '';
      display: block;
      top: 55px;
      width: 0;
      height: 2px;
      background: #fff;
      transition: all 0.3s ease;
    }

    &::before {
      left: 50%;
    }

    &::after {
      right: 50%;
    }

    &:hover:after,
    &:hover:before {
      width: 50%;
    }
  }

  @media screen and (max-width: 768px) {
    &:active:after,
    &:active:before {
      width: 50%;
    }
  }
}
</style>
