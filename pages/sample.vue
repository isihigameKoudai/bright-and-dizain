<template>
  <section class="">
    <label-page-top title="Sample" class="position-title"/>
    <Button title="Contact"/>
    <label-section  content="Concept" />
    <LabelNomal content="「大義名分」" fontSize=24 />
    <LabelNomal content="いつものテキスト" />
    <image-title isDark="true" />
    <image-title />
    <text-box placeHolder="Name" row=5 />
  </section>
</template>

<script>

import Button from '../components/atoms/Button';
import LabelPageTop from '../components/atoms/LabelPageTop';
import LabelSection from '../components/atoms/LabelSection';
import LabelNomal from '../components/atoms/LabelNomal';
import ImageTitle from '../components/atoms/ImageTitle';
import TextBox from '../components/atoms/TextBox';

export default {
  components: {
    Button,
    LabelPageTop,
    LabelSection,
    LabelNomal,
    ImageTitle,
    TextBox
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
