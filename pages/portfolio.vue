<template>
  <default-view title="Portfolio">
    <div class="wrapper position-title flex-con">
      <image-box-thumbnail
        v-for="(image,index) in imageArr"
        :key="index"
        :path="image.url"
        @click="updateImagePath(image.url); updateModal('image');"
      />
    </div>
  </default-view>
</template>

<script>
import DefaultView from '@components/templates/DefaultView';
import ImageBoxThumbnail from '@components/atoms/ImageBoxThumbnail';
import { mapMutations } from 'vuex';

export default {
  name: 'portfolio',
  data() {
    return {
      imageArr: [
        {url: '/img/mainImageSmall.jpg'},
        {url: '/img/sample.jpg'},
        {url: ''},
        {url: ''},
        {url: ''},
        {url: ''},
        {url: ''},
        {url: ''},
        {url: ''},
        {url: ''},
        {url: ''},
        {url: ''},
        {url: ''},
        {url: ''},
        {url: ''}
      ]
    }
  },
  components: {
    DefaultView,
    ImageBoxThumbnail
  },
  methods: {
    ...mapMutations(['updateModal','updateImagePath'])
  }
}
</script>

<style lang="scss">
.flex-con {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.flex-con > * {
  margin-top: 30px;
  @media screen and (max-width: 768px){
    margin-top: 3px;
  }

  @media screen and (max-width: 640px){
    margin-top: 2px;
  }
}
</style>
