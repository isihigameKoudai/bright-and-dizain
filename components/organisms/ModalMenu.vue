<template>
  <div>
    <ul>
      <li
        v-for="(menu,index) in menus"
        :key="index"
        :text=menu.title
        class="list-menu"
        @click="updateModal()"
      >
        <nuxt-link :to="menu.path">{{menu.title}}</nuxt-link>
      </li>
    </ul>
  </div>    
</template>
<script>
import {mapMutations} from 'vuex';

export default {
  name: 'ModalMenu',
  date() {
    return {
      menus: [],
    }
  },
  beforeMount() {
    this.menus = [
      {
        title: 'Top',
        path: '/'
      },
      {
        title: 'Works',
        path: '/works'
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
        title: 'Contact',
        path: '/contact'
      }]
  },
  methods: {
    ...mapMutations(['updateModal']),
  }
}
</script>
<style lang="scss" scoped>
.list-menu {
  position: relative;
  filter: drop-shadow(3px 3px 2px rgba(0,0,0,0.9));
  text-align: center;
  opacity: 1.0;
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

  &:after, &::before {
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

  &:hover:after,&:hover:before {
    width: 50%;
  }
}
</style>
