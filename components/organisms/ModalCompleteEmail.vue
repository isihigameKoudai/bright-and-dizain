<template>
  <div class="complete-wrapper">
    <label-section class="mt100">お問い合わせが完了しました。</label-section>
    <nuxt-link to="/">
      <Button
        class="mt100"
        @click="updateModal"
      >Topへ</Button>
    </nuxt-link>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
import Button from '../atoms/Button';
import LabelSection from '../atoms/LabelSection';

export default {
	name: 'ModalCompleteEmail',
	components: {
		Button,
		LabelSection
	},
	methods: {
		...mapMutations(['updateModal'])
	}
}
	
</script>
<style lang="scss" scoped>
.complete-wrapper {
  width: 760px;
  height: 400px;
  padding: 20px 30px;
  box-sizing: border-box;
  border: 4px solid #111415;
  background-color: #fff;
  border-radius: 4px;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: calc(100vw - 100px);
  }
}
</style>
