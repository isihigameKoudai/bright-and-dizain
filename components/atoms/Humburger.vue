<template>
  <div 
    class="btn-humburger"
    :class="{'is-active on-modal': modal}"
    @click="updateModal()"
  >
    <div></div>
    <div></div>
  </div>
</template>
<script>
import { mapState, mapMutations} from 'vuex';

export default {
  data() {
    return {
      isActive: false,
    }
  },
  computed: {
    ...mapState(['modal']),
  },
  methods: {
    ...mapMutations(['updateModal']),
    pushHumburger() {
      this.isActive = !this.isActive;
    }
  }
}
</script>
<style lang="scss" scoped>
.btn-humburger {
  position: fixed;
  display: block;
  width: 56px;
  height: 56px;
  background:transparent;
  z-index: 110;

  > div {
    position: absolute;
    width: 56px;
    height: 3px;
    transition: all 0.2s;

    background-color: #000;
    filter: none;;

    &:first-child {
      top: 15px;
      left: 0;
    }

    &:last-child {
      bottom: 15px;
      left: 0;
    }
  }

  &.is-active > div {
    background-color: #ffffff;
    filter: drop-shadow(3px 3px 3px rgba(0,0,0,0.3));

    &:first-child {
      -webkit-transform: translateY(11px) rotate(45deg);
      transform: translateY(11px) rotate(45deg);
    }

    &:last-child {
      -webkit-transform: translateY(-10px) rotate(-45deg);
      transform: translateY(-10px) rotate(-45deg);
    }
  }
}

</style>
