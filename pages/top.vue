<template>
  <section class="container">
    <div>
      <h1>Instgram</h1>
      <div class="wrapper">
        <h2>image</h2>
        <ul class="imgContainer">
          <li class="imgBox"></li>
          <li class="imgBox"></li>
          <li class="imgBox"></li>
          <li class="imgBox"></li>
          <li class="imgBox"></li>
          <li class="imgBox"></li>
          <li class="imgBox"></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>

export default {
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

.wrapper {
  width: 960px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  background-color: #ccc;
}

.imgContainer {
  width: 100%;
  height: auto;
  font-size: 0;
  margin: 0;
  padding: 0;
}

.imgBox {
  width: 320px;
  height: 320px;
  margin: 0;
  background-color: #888;
  border: 4px solid #222;
  box-sizing: border-box;
  display: inline-block;
  list-style: none;
} 

</style>
