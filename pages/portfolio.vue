<template>
  <default-view title="Portfolio">
    <label-nomal
      class="position-title mt80"
      :fontSize="32"
    >Creative</label-nomal>
    <div class="wrapper flex-con mt30">
      <image-box-thumbnail
        v-for="(image,index) in imageArr"
        :key="index"
        :path="image.url"
        @click="updateImagePath(image.url); updateModal('image');"
      />
    </div>
    <label-nomal
      class="position-title mt80"
      :fontSize="32"
    >Portrait</label-nomal>
    <div class="wrapper flex-con mt30">
      <image-box-thumbnail
        v-for="(image,index) in imageArr"
        :key="index"
        :path="image.url"
        @click="updateImagePath(image.url); updateModal('image');"
      />
    </div>
    <label-nomal
      class="position-title mt80"
      :fontSize="32"
    >Media</label-nomal>
    <div class="wrapper flex-con mt30">
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
import LabelNomal from '@components/atoms/LabelNomal';
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
    ImageBoxThumbnail,
    LabelNomal
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
