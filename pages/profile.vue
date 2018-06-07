<template>
  <div class="pb100">
    <label-title class="position-title" title="Profile"/>
    <section class="wrapper mt90">
      <div class="area-profile-left">
        <image-circle class="position-img-profile" path="/img/ProfileImage.jpg" />
        <label-section class="mt40" content="Koudai Ishigame"/>
      </div>
      <div class="area-profile-right">
        <p class="label-nomal">1994年6月28日生まれ、青森県出身・東京都在住。
          <br/>プログラミングと音楽が好きで、
          <br/>学生時代にはプレーヤーとSNSを統合させた音楽アプリや
          <br/>調理工程と材料を限定した簡易型料理レシピアプリをリリース。
        </p>
        <p class="label-nomal mt30">大学時代に大手家電量販店での販売員の仕事でカメラと出会う。
          <br/>たまたま撮った写真を機に
          <br/>知人がフリーペーパーのモデルに挑戦してくれたことをキッカケに、
          <br/>本格的に人物・ポートレート写真を始める。
        </p>
        <p class="label-nomal mt30">現在はエンジニア兼フォトグラファーとして都内で活動中。
          <br/>「作り込み」と呼ばれる、コンセプトに応じた背景や衣装などを用いて
          <br/>世界観を描き出す分野の写真を得意とし、
          <br/>モデルの撮影だけでなく音楽CDのアルバムジャケットなど
          <br/>アーティスティックな撮影もこなす。
        </p>
        <p class="label-nomal mt30">その他、Webメディアへの写真提供や
          <br/>海外の厳正写真審査サイトでの掲載経験もあり。
        </p>
      </div>
    </section>
    <section class="position-title">
      <label-section content="skills"/>
      <p class="label-nomal mt20">Photograph
        <br/>Retouch
        <br/>Art Direction
        <br/>HTML/CSS/Javascript(ES6)
        <br/>Vue.js
        <br/>jQuery
      </p>
    </section>
    <section class="position-title">
      <label-section content="SNS & Media"/>
      <div class="logo-wrapper mt40">
        <logo-media
          path="/svg/LogoFacebook.svg"
          link="https://www.facebook.com/koudai.ishigame"
        />
        <logo-media
          path="/img/LogoTwitter.png"
          link="https://twitter.com/TVK382"
        />
        <logo-media
          path="/img/LogoInstagram.png"
          link="https://www.instagram.com/koudai_ishigame/?hl=ja"
        />
      </div>
      <div class="logo-wrapper mt20">
        <logo-media
          path="/img/LogoQiita.png"
          link="https://qiita.com/isihigameKoudai"
        />
        <logo-media
          path="/img/LogoGithub.png"
          url="https://github.com/isihigameKoudai"
        />
      </div>
      <p class="label-nomal mt20">
        <a class="link-nomal" target="_blank" href="https://oneeyeland.com/member/member_portfolio.php?pgrid=107158">OneEyeLand</a> /
        <a class="link-nomal" target="_blank" href="https://1x.com/member/koudaiishigame">1X.com</a> /
        <a class="link-nomal" target="_blank" href="http://www.vogue.it/photovogue/myportfolio/?id=0B9D2B3B-3F81-41B4-9866-B0A3BC03CF14">PhotoVogue</a> /
        <a class="link-nomal" target="_blank" href="https://valu.is/kodai2100">VALU</a>
      </p>
    </section>
  </div>
</template>

<script>
import LabelTitle from '../components/atoms/LabelPageTop';
import ImageCircle from '../components/atoms/ImageCircle';
import LabelSection from '../components/atoms/LabelSection';
import LogoMedia from '../components/atoms/LogoMedia';

export default {
  components: {
    LabelTitle,
    ImageCircle,
    LabelSection,
    LogoMedia
  }
}
</script>

<style lang="scss" scoped>
.link-nomal {
  text-decoration: none;
  color: #402C2C;
  transition: filter 0.2s;
  &:hover {
    filter:  drop-shadow(3px 3px 2px #808080f0);
  }
}
.area-profile-left,.area-profile-right {
  display: inline-block;
  vertical-align: top;
}

.area-profile-left {
  width: 40%;
  height: auto;
  text-align: center;
  @media screen and (max-width: 768px){
    width: 100%;
  }
}

.area-profile-right {
  width: 60%;
  height: auto;
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (max-width: 768px){
    width: 100%;
  }
}

.position-img-profile {
  display: inline-block;
}

.logo-wrapper {
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-around;
}

</style>
