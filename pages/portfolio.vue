<template>
  <div class="pb100">
    <label-title class="position-title" title="Portfolio"/>
    <div class="wrapper position-title flex-con">
      <image-box-thumbnail
        v-for="(image,index) in imageArr"
        :key="index"
        :path="image.url"
      />
    </div>
  </div>
</template>

<script>
import LabelTitle from '../components/atoms/LabelPageTop';
import ImageBoxThumbnail from '../components/atoms/ImageBoxThumbnail';

export default {
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
    LabelTitle,
    ImageBoxThumbnail
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
