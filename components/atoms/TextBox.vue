<template>
  <input 
    type="text"
    class="text-box"
    :class="{'is-error': contactRule}"
    :placeholder="placeHolder"
    v-model="text"
    @input="outOfKey()"
    @focus="onFocus()"
  />
</template>
<script>
import {mapState,mapMutations} from 'vuex';

export default {
  name: 'TextBox',
  props: {
    placeHolder: {
      type: String,
      default: ''
    },
    contentType: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      text: '',
      isFocus: false
    }
  },
  computed: {
    ...mapState(['contact']),
    contactRule() {
      if (this.contentType === 'name') {
        return this.isFocus && !this.contact.name ? true : false;
      } else if (this.contentType === 'email') {
        return this.isFocus && !this.contact.email ? true : false;
      } else if (this.contentType === 'phone') {
        return this.isFocus && !this.contact.phone ? true : false;
      } else {
        return false;
      }
    }
  },
  methods: {
    ...mapMutations(['updateContactCompany',
                      'updateContactName',
                      'updateContactEmail',
                      'updateContactPhone']),
    outOfKey() {
      switch (this.contentType) {
        case 'company':
          this.updateContactCompany(this.text);
          break;
        case 'name':
          this.updateContactName(this.text);
          break;
        case 'email':
          this.updateContactEmail(this.text);
          break;
        case 'phone':
          this.updateContactPhone(this.text);
          break;
        default:
          break;
      }
    },
    onFocus() {
      this.isFocus = true;
    }
  }
}
</script>
<style lang="scss" scoped>
.text-box {
  position: relative;
  width: 380px;
  padding: 7px 15px;
  border: none;
  background-color: #fff;
  font-size: 18px;
  filter: drop-shadow(3px 3px 4px rgba(0,0,0,0.2));
  outline: 0;
  box-sizing: border-box;

  color: #402C2C;
  font-family: "HG明朝E", "ＭＳ Ｐ明朝", "MS PMincho", "MS 明朝", serif;
	font-style: normal;
	font-variant: normal;
	font-weight: 500;
	line-height: 39.6px;
  letter-spacing: 1px;

  &::-webkit-input-placeholder {
    color: #C3BFBF; 
  }

  &.is-error {
    border: solid 1px #F51F1F;
  }

  @media screen and (max-width: 768px) {
    width: calc(100% - 100px);
  }
}

</style>
