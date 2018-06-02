<template>
  <section class="">
    <label-page-top title="Sample" class="position-title"/>
    <Button title="Contact"/>
    <label-section  content="Concept" />
    <LabelNomal content="「大義名分」" fontSize=24 />
    <LabelNomal content="いつものテキスト" />
    <image-title isDark="true" />
    <image-title />
    <text-box placeHolder="Name" row=5 width="450" />
    <text-area placeHolder="Message" width="450"/>
    <image-box path="/img/webApp.JPG" :shadow="true" />
    <image-box-thumbnail path="/img/webApp.JPG" />
  </section>
</template>

<script>

import Button from '../components/atoms/Button';
import LabelPageTop from '../components/atoms/LabelPageTop';
import LabelSection from '../components/atoms/LabelSection';
import LabelNomal from '../components/atoms/LabelNomal';
import ImageTitle from '../components/atoms/ImageTitle';
import TextBox from '../components/atoms/TextBox';
import TextArea from '../components/atoms/TextArea';
import ImageBox from '../components/atoms/ImageBox';
import ImageBoxThumbnail from '../components/atoms/ImageBoxThumbnail';

export default {
  components: {
    Button,
    LabelPageTop,
    LabelSection,
    LabelNomal,
    ImageTitle,
    TextBox,
    TextArea,
    ImageBox,
    ImageBoxThumbnail
  }
}

</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
