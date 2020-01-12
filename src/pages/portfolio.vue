<template>
  <TheDefaultView title="Portfolio">
    <LabelNormal :font-size="32" class="position-title mt80">
      Creative
    </LabelNormal>
    <div class="wrapper flex-con mt30">
      <ImageBoxThumbnail
        v-for="(image, index) in portfolio.creative"
        :key="index"
        :path="image.url"
        @click="onClickModal(image.lrg)"
      />
    </div>
    <LabelNormal :font-size="32" class="position-title mt80">
      Portrait
    </LabelNormal>
    <div class="wrapper flex-con mt30">
      <ImageBoxThumbnail
        v-for="(image, index) in portfolio.portrait"
        :key="index"
        :path="image.url"
        @click="onClickModal(image.lrg)"
      />
    </div>
    <LabelNormal :font-size="32" class="position-title mt80">
      Landscape
    </LabelNormal>
    <div class="wrapper flex-con mt30">
      <ImageBoxThumbnail
        v-for="(image, index) in portfolio.landscape"
        :key="index"
        :path="image.url"
        @click="onClickModal(image.lrg)"
      />
    </div>
  </TheDefaultView>
</template>

<script>
import TheDefaultView from '@components/templates/TheDefaultView'
import ImageBoxThumbnail from '@components/atoms/ImageBoxThumbnail'
import LabelNormal from '@components/atoms/LabelNormal'
import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'Portfolio',
  components: {
    TheDefaultView,
    ImageBoxThumbnail,
    LabelNormal
  },
  data() {
    return {
      portfolio: {
        creative: [
          {
            url: require('~/assets/img/portfolio/creative/c1.jpg'),
            lrg: require('~/assets/img/portfolio/creative/lrg/c1.jpg')
          },
          {
            url: require('~/assets/img/portfolio/creative/c2.jpg'),
            lrg: require('~/assets/img/portfolio/creative/lrg/c2.jpg')
          },
          {
            url: require('~/assets/img/portfolio/creative/c3.jpg'),
            lrg: require('~/assets/img/portfolio/creative/lrg/c3.jpg')
          },
          {
            url: require('~/assets/img/portfolio/creative/c4.jpg'),
            lrg: require('~/assets/img/portfolio/creative/lrg/c4.jpg')
          },
          {
            url: require('~/assets/img/portfolio/creative/c5.jpg'),
            lrg: require('~/assets/img/portfolio/creative/lrg/c5.jpg')
          },
          {
            url: require('~/assets/img/portfolio/creative/c6.jpg'),
            lrg: require('~/assets/img/portfolio/creative/lrg/c6.jpg')
          },
          {
            url: require('~/assets/img/portfolio/creative/c7.jpg'),
            lrg: require('~/assets/img/portfolio/creative/lrg/c7.jpg')
          },
          {
            url: require('~/assets/img/portfolio/creative/c8.jpg'),
            lrg: require('~/assets/img/portfolio/creative/lrg/c8.jpg')
          },
          {
            url: require('~/assets/img/portfolio/creative/c9.jpg'),
            lrg: require('~/assets/img/portfolio/creative/lrg/c9.jpg')
          },
          {
            url: require('~/assets/img/portfolio/creative/c10.jpg'),
            lrg: require('~/assets/img/portfolio/creative/lrg/c10.jpg')
          },
          {
            url: require('~/assets/img/portfolio/creative/c11.jpg'),
            lrg: require('~/assets/img/portfolio/creative/lrg/c11.jpg')
          },
          {
            url: require('~/assets/img/portfolio/creative/c12.jpg'),
            lrg: require('~/assets/img/portfolio/creative/lrg/c12.jpg')
          },
          {
            url: require('~/assets/img/portfolio/creative/c13.jpg'),
            lrg: require('~/assets/img/portfolio/creative/lrg/c13.jpg')
          },
          {
            url: require('~/assets/img/portfolio/creative/c14.jpg'),
            lrg: require('~/assets/img/portfolio/creative/lrg/c14.jpg')
          },
          {
            url: require('~/assets/img/portfolio/creative/c15.jpg'),
            lrg: require('~/assets/img/portfolio/creative/lrg/c15.jpg')
          }
        ],
        portrait: [
          {
            url: require('~/assets/img/portfolio/portrait/p1.jpg'),
            lrg: require('~/assets/img/portfolio/portrait/lrg/p1.jpg')
          },
          {
            url: require('~/assets/img/portfolio/portrait/p2.jpg'),
            lrg: require('~/assets/img/portfolio/portrait/lrg/p2.jpg')
          },
          {
            url: require('~/assets/img/portfolio/portrait/p3.jpg'),
            lrg: require('~/assets/img/portfolio/portrait/lrg/p3.jpg')
          },
          {
            url: require('~/assets/img/portfolio/portrait/p4.jpg'),
            lrg: require('~/assets/img/portfolio/portrait/lrg/p4.jpg')
          },
          {
            url: require('~/assets/img/portfolio/portrait/p5.jpg'),
            lrg: require('~/assets/img/portfolio/portrait/lrg/p5.jpg')
          },
          {
            url: require('~/assets/img/portfolio/portrait/p6.jpg'),
            lrg: require('~/assets/img/portfolio/portrait/lrg/p6.jpg')
          },
          {
            url: require('~/assets/img/portfolio/portrait/p7.jpg'),
            lrg: require('~/assets/img/portfolio/portrait/lrg/p7.jpg')
          },
          {
            url: require('~/assets/img/portfolio/portrait/p8.jpg'),
            lrg: require('~/assets/img/portfolio/portrait/lrg/p8.jpg')
          },
          {
            url: require('~/assets/img/portfolio/portrait/p9.jpg'),
            lrg: require('~/assets/img/portfolio/portrait/lrg/p9.jpg')
          },
          {
            url: require('~/assets/img/portfolio/portrait/p10.jpg'),
            lrg: require('~/assets/img/portfolio/portrait/lrg/p10.jpg')
          },
          {
            url: require('~/assets/img/portfolio/portrait/p11.jpg'),
            lrg: require('~/assets/img/portfolio/portrait/lrg/p11.jpg')
          },
          {
            url: require('~/assets/img/portfolio/portrait/p12.jpg'),
            lrg: require('~/assets/img/portfolio/portrait/lrg/p12.jpg')
          },
          {
            url: require('~/assets/img/portfolio/portrait/p13.jpg'),
            lrg: require('~/assets/img/portfolio/portrait/lrg/p13.jpg')
          },
          {
            url: require('~/assets/img/portfolio/portrait/p14.jpg'),
            lrg: require('~/assets/img/portfolio/portrait/lrg/p14.jpg')
          },
          {
            url: require('~/assets/img/portfolio/portrait/p15.jpg'),
            lrg: require('~/assets/img/portfolio/portrait/lrg/p15.jpg')
          }
        ],
        landscape: [
          {
            url: require('~/assets/img/portfolio/landscape/l1.jpg'),
            lrg: require('~/assets/img/portfolio/landscape/lrg/l1.jpg')
          },
          {
            url: require('~/assets/img/portfolio/landscape/l2.jpg'),
            lrg: require('~/assets/img/portfolio/landscape/lrg/l2.jpg')
          },
          {
            url: require('~/assets/img/portfolio/landscape/l3.jpg'),
            lrg: require('~/assets/img/portfolio/landscape/lrg/l3.jpg')
          },
          {
            url: require('~/assets/img/portfolio/landscape/l4.jpg'),
            lrg: require('~/assets/img/portfolio/landscape/lrg/l4.jpg')
          },
          {
            url: require('~/assets/img/portfolio/landscape/l5.jpg'),
            lrg: require('~/assets/img/portfolio/landscape/lrg/l5.jpg')
          },
          {
            url: require('~/assets/img/portfolio/landscape/l6.jpg'),
            lrg: require('~/assets/img/portfolio/landscape/lrg/l6.jpg')
          },
          {
            url: require('~/assets/img/portfolio/landscape/l7.jpg'),
            lrg: require('~/assets/img/portfolio/landscape/lrg/l7.jpg')
          },
          {
            url: require('~/assets/img/portfolio/landscape/l8.jpg'),
            lrg: require('~/assets/img/portfolio/landscape/lrg/l8.jpg')
          },
          {
            url: require('~/assets/img/portfolio/landscape/l9.jpg'),
            lrg: require('~/assets/img/portfolio/landscape/lrg/l9.jpg')
          },
          {
            url: require('~/assets/img/portfolio/landscape/l10.jpg'),
            lrg: require('~/assets/img/portfolio/landscape/lrg/l10.jpg')
          },
          {
            url: require('~/assets/img/portfolio/landscape/l11.jpg'),
            lrg: require('~/assets/img/portfolio/landscape/lrg/l11.jpg')
          },
          {
            url: require('~/assets/img/portfolio/landscape/l12.jpg'),
            lrg: require('~/assets/img/portfolio/landscape/lrg/l12.jpg')
          },
          {
            url: require('~/assets/img/portfolio/landscape/l13.jpg'),
            lrg: require('~/assets/img/portfolio/landscape/lrg/l13.jpg')
          },
          {
            url: require('~/assets/img/portfolio/landscape/l14.jpg'),
            lrg: require('~/assets/img/portfolio/landscape/lrg/l14.jpg')
          },
          {
            url: require('~/assets/img/portfolio/landscape/l15.jpg'),
            lrg: require('~/assets/img/portfolio/landscape/lrg/l15.jpg')
          }
        ]
      }
    }
  },
  methods: {
    ...mapActions({
      setImagePath: 'view/setImagePath',
      updateModal: 'view/updateModal'
    }),
    onClickModal(path) {
      this.setImagePath(path)
      this.updateModal('image')
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/css/page.scss';

.flex-con {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.flex-con > * {
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    margin-top: 3px;
  }

  @media screen and (max-width: 640px) {
    margin-top: 2px;
  }
}
</style>
