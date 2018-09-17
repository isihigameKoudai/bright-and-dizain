<template>
  <default-view title="Works">
    <label-section class="position-title">Concept</label-section>
    <label-nomal class="position-title" :fontSize="24"><span class="sp-dn">「</span>Make Bright All The People<br class="pc-dn"/> - 全ての人を輝かせる -<span class="sp-dn">」</span></label-nomal>
    <div class="position-title">
      <label-nomal class="mt20">
        上記ビジョンのもと、<br/>
        モノづくりを通して<br/>
        みなさんが少しでも<br/>
        前に進むため<br/>
        そして,<br/>
        その起爆剤になれるよう<br/>
        活動していきます。
      </label-nomal>
      <label-nomal class="mt20">
        何を実現しようか、<br/>
        どんな世界観にしようか、<br/>
        どうやって作ろうか、
      </label-nomal>
      <label-nomal class="mt20">
        共感やワクワクから始まる、<br/>
        モノづくりやクリエイティブを<br/>
        全力で応援していきます。
      </label-nomal>
    </div>
    <!-- Photograph Works -->
    <title-parallax class="mt90" path="/img/TitlePhotograph.jpg" title="Photograph" />
    <section class="wrapper area-content mt90">
      <div class="area-content-works">
        <label-section>Creative</label-section>
        <label-nomal class="mt20">
          創作、クリエイティブ、作り込みなど<br/>
          背景や衣装・ドレス、メイクからヘアメイクまで<br/>
          トータルでご準備し、<br/>
          ストーリー・コンセプトなど世界観を<br/>
          決めていき制作にあたります。
        </label-nomal>
        <label-nomal class="mt20">
          他では真似できないような<br/>
          世界観を作り出します。
        </label-nomal>
      </div>
      <image-box class="sp-space" path="/img/worksCreative.jpg" :shadow="true"/>
    </section>

    <section class="wrapper area-content mt90">
      <image-box class="sp-dn" path="/img/worksPortrait.jpg" :shadow="true"/>
      <div class="area-content-works">
        <label-section>Portrait</label-section>
        <label-nomal class="mt20">
          手軽な人物・プロフィールの撮影から<br/>
          結婚式の前撮りなど<br/>
          雰囲気のあるお写真まで<br/>
          ご対応します。<br/>
        </label-nomal>
        <label-nomal class="mt20">
          日常の何気ない瞬間も<br/>
          記念になるような時も<br/>
          永遠に残る<br/>
          色褪せない思い出にしていきます。
        </label-nomal>
      </div>
      <image-box class="pc-dn sp-space" path="/img/worksPortrait.jpg" :shadow="true"/>
    </section>

    <section class="wrapper area-content mt90">
      <div class="area-content-works">
        <label-section>Media & Report</label-section>
        <label-nomal class="mt20">
          宣伝商材やHP素材、Webメディアや記事の<br/>
          ための写真などをご提供いたします。<br/>
          また、音楽CDのアルバムジャケットなど<br/>
          フォーマルなものだけでなく<br/>
          アーティスティックなものもご対応いたします。<br/>
        </label-nomal>
        <label-nomal class="mt20">
          表現したいもの<br/>
          伝えたいことは<br/>
          今、伝えて行きましょう
        </label-nomal>
      </div>
      <image-box class="sp-space" path="/img/worksMediaReport.jpg" :shadow="true"/>
    </section>

    <section class="wrapper mt100 taC">
      <nuxt-link to="/contact">
        <Button>Contact</Button>
      </nuxt-link>
      <label-nomal class="mt30">お問い合わせはこちらから</label-nomal>
    </section>

    <!-- Web Works -->
    <title-parallax class="mt90" path="/img/TitleWebDevelop.jpg" title="Web Works" />
    <section class="wrapper area-content vertical-top">
      <div class="area-content-works mt90">
        <label-section>HTML/CSS Coding</label-section>
        <image-box class="mt30 sp-dn" path="/img/webCoding.jpg" :isSmall="true"/>
        <label-nomal class="mt20">
          大規模サイトのコーディングや<br/>
          リニューアルの<br/>
          経験などを活かし<br/>
          HPやWebアプリにおける<br/>
          HTML/CSSのコーディングをいたします。
        </label-nomal>
        <image-box class="mt30 pc-dn sp-space" path="/img/webCoding.jpg" :isSmall="true"/>
      </div>
      <div class="area-content-works mt90">
        <label-section>WebApp Develop</label-section>
        <image-box class="mt30 sp-dn" path="/img/webApp.jpg" :isSmall="true"/>
        <label-nomal class="mt20">
          Web上で動くアプリやサイトの<br/>
          フロントエンド開発を行います。<br/>
          Vue.jsでの開発がメインですが<br/>
          jQueryにも対応いたします。
        </label-nomal>
        <image-box class="mt30 pc-dn sp-space" path="/img/webApp.jpg" :isSmall="true"/>
      </div>
    </section>

    <section class="wrapper mt100 taC">
      <nuxt-link to="/contact">
        <Button>Contact</Button>
      </nuxt-link>
      <label-nomal class="mt30">お問い合わせはこちらから</label-nomal>
    </section>
  </default-view>
</template>

<script>
import DefaultView from '@components/templates/DefaultView';
import LabelSection from '@components/atoms/LabelSection';
import LabelNomal from '@components/atoms/LabelNomal';
import TitleParallax from '@components/atoms/TitleParallax';
import ImageBox from '@components/atoms/ImageBox';
import Button from '@components/atoms/Button';

export default {
  name: 'works',
  components: {
    DefaultView,
    LabelSection,
    LabelNomal,
    TitleParallax,
    ImageBox,
    Button
  }
}
</script>

<style lang="scss" scoped>

.area-content-works {
  width: 480px;
  height: auto;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
}

@media screen and (min-width: 769px){
  .area-content > * {
    display: inline-block;
    vertical-align: middle;
  }
  .area-content.vertical-top > * {
    vertical-align: top;
  }
}

.area-content .sp-space {
  @media screen and (max-width: 768px){
    margin-top: 90px;
  }
}
</style>
