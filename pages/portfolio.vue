<template>
  <default-view title="Portfolio">
    <label-nomal
      class="position-title mt80"
      :fontSize="32"
    >Creative</label-nomal>
    <div class="wrapper flex-con mt30">
      <image-box-thumbnail
        v-for="(image,index) in portfolio.creative"
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
        v-for="(image,index) in portfolio.portrait"
        :key="index"
        :path="image.url"
        @click="updateImagePath(image.url); updateModal('image');"
      />
    </div>
    <label-nomal
      class="position-title mt80"
      :fontSize="32"
    >Landscape</label-nomal>
    <div class="wrapper flex-con mt30">
      <image-box-thumbnail
        v-for="(image,index) in portfolio.landscape"
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
      portfolio: {
        creative: [
          {url: '/img/portfolio/creative/c1.jpg'},
          {url: '/img/portfolio/creative/c2.jpg'},
          {url: '/img/portfolio/creative/c3.jpg'},
          {url: '/img/portfolio/creative/c4.jpg'},
          {url: '/img/portfolio/creative/c5.jpg'},
          {url: '/img/portfolio/creative/c6.jpg'},
          {url: '/img/portfolio/creative/c7.jpg'},
          {url: '/img/portfolio/creative/c8.jpg'},
          {url: '/img/portfolio/creative/c9.jpg'},
          {url: '/img/portfolio/creative/c10.jpg'},
          {url: '/img/portfolio/creative/c11.jpg'},
          {url: '/img/portfolio/creative/c12.jpg'},
          {url: '/img/portfolio/creative/c13.jpg'},
          {url: '/img/portfolio/creative/c14.jpg'},
          {url: '/img/portfolio/creative/c15.jpg'}
        ],
        portrait: [
          {url: '/img/portfolio/portrait/p1.jpg'},
          {url: '/img/portfolio/portrait/p2.jpg'},
          {url: '/img/portfolio/portrait/p3.jpg'},
          {url: '/img/portfolio/portrait/p4.jpg'},
          {url: '/img/portfolio/portrait/p5.jpg'},
          {url: '/img/portfolio/portrait/p6.jpg'},
          {url: '/img/portfolio/portrait/p7.jpg'},
          {url: '/img/portfolio/portrait/p8.jpg'},
          {url: '/img/portfolio/portrait/p9.jpg'},
          {url: '/img/portfolio/portrait/p10.jpg'},
          {url: '/img/portfolio/portrait/p11.jpg'},
          {url: '/img/portfolio/portrait/p12.jpg'},
          {url: '/img/portfolio/portrait/p13.jpg'},
          {url: '/img/portfolio/portrait/p14.jpg'},
          {url: '/img/portfolio/portrait/p15.jpg'}
        ],
        landscape: [
          {url: '/img/portfolio/landscape/l1.jpg'},
          {url: '/img/portfolio/landscape/l2.jpg'},
          {url: '/img/portfolio/landscape/l3.jpg'},
          {url: '/img/portfolio/landscape/l4.jpg'},
          {url: '/img/portfolio/landscape/l5.jpg'},
          {url: '/img/portfolio/landscape/l6.jpg'},
          {url: '/img/portfolio/landscape/l7.jpg'},
          {url: '/img/portfolio/landscape/l8.jpg'},
          {url: '/img/portfolio/landscape/l9.jpg'},
          {url: '/img/portfolio/landscape/l10.jpg'},
          {url: '/img/portfolio/landscape/l11.jpg'},
          {url: '/img/portfolio/landscape/l12.jpg'},
          {url: '/img/portfolio/landscape/l13.jpg'},
          {url: '/img/portfolio/landscape/l14.jpg'},
          {url: '/img/portfolio/landscape/l15.jpg'}
        ]
      }
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
