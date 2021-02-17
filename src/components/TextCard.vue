<template>
    <div class="epoca">
        <h1 class="titulo"> {{ title }}</h1>
        <p class="text">{{ firstText }}</p>
        <p class="text">{{ secondText }}</p>
        <p class="text">{{ thirdText }}</p>
        <img :src="imgPath" alt="">
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TextCard',
  props: {
      title: String,
      firstText: String,
      secondText: String,
      thirdText: String,
      imgPath: String,
  }
});
</script>

<style lang="scss">

.epoca {
	background-color: #f7f7f7;
	width: 100%;
	border-radius: 25px;

    p {
        text-indent: 30px;
    }

    .titulo {
        font-size: 50px;
        padding-left: 20px;
        text-align: justify;
    }

    .text {
        min-width: 100%;
        padding-top: 25px;
        text-align: justify;
    }

    img {
        width: 100%;
        border-radius: 25px;
    }

}
</style>
