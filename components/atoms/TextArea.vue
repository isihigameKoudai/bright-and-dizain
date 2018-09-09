<template>
  <textarea 
    class="text-area"
    :placeholder="placeHolder"
    rows="5"
    v-model="text"
    @blur="updateContactMessage(text)"
  />
</template>
<script>
import {mapMutations} from 'vuex';

export default {
  name: 'TextArea',
  props: ['placeHolder'],
  data() {
    return {
      text: '',
    }
  },
  methods: {
    ...mapMutations(['updateContactMessage']),
  }
}
</script>
<style lang="scss" scoped>
.text-area {
  width: 380px;
  height: 300px;
  padding: 10px 15px;
  border: none;
  background-color: #fff;
  font-size: 18px;
  line-height: 1.2;
  filter: drop-shadow(3px 3px 4px rgba(0,0,0,0.2));
  outline: 0;
  resize: none;

  color: #402C2C;
  font-family: "HG明朝E", "ＭＳ Ｐ明朝", "MS PMincho", "MS 明朝", serif;
	font-style: normal;
	font-variant: normal;
	font-weight: 500;
  letter-spacing: 1px;

  &::-webkit-input-placeholder {
    color: #C3BFBF; 
  }

  @media screen and (max-width: 768px){
    width: calc(100% - 100px);
  }
}
</style>
