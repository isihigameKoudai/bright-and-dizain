<template>
  <button 
    class="btn"
    :class="{'disable': isDisable}"
    :disabled="isDisable"
    @click="sendEmail(contact.name)"
  >{{title}}</button>
</template>
<script>
import {mapState, mapActions} from 'vuex';

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    btnType: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      disable: false,
    }
  },
  computed: {
    ...mapState(['contact']),
    isDisable() {
      return this.btnType === 'submit' && (!this.contact.name || !this.contact.email || !this.contact.phone);
    }
  },
  methods: {
    ...mapActions(["sendEmail"]),
  }
}
</script>
<style lang="scss" scoped>
.btn {
  position: relative;
  width: 185px;
  height: 44px;
  border-radius: 3px;
  letter-spacing: 2px;
  font-size: 17px;
  font-weight: bold;
  font-family: "ヒラギノ明朝 ProN W3", "HiraMinProN-W3", "HG明朝E", "ＭＳ Ｐ明朝", "MS PMincho", "MS 明朝", serif;
  outline: 0;

  color: #fff;
  background-color: #070B10;
  border: solid 4px #070B10;
  transition: 0.2s all ease;
  filter: drop-shadow(3px 3px 4px rgba(0, 0, 0, .2));

  &::before {
    position: absolute;
    content: '';
    top: 14px;
    right: 10px;
    width: 12px;
    height: 2px;
    background-color: #fff;
    transform: rotate(45deg);
  }

  &::after {
    position: absolute;
    content: '';
    bottom: 12px;
    right: 10px;
    width: 12px;
    height: 2px;
    background-color: #fff;
    transform: rotate(-45deg);
  }

  &:hover {
    background-color: #fff;
    color: #070B10;
    filter: drop-shadow(3px 3px 4px rgba(0, 0, 0, .6));

    &::before {
      background-color: #070B10;
    }

    &::after {
      background-color: #070B10;
    }
  }

  &.disable {
    background: #C1C1C1;
    color: #777;
    border: solid 4px #777;
    filter: none;

    &::before {
      background-color: #777;
    }

    &::after {
      background-color: #777;
    }
  }
 }
</style>
