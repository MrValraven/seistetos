<template>
    <div class="epoca">
        <h1 class="titulo"> {{ title }}</h1>
        <p class="text">{{ firstText }}</p>
        <slot name="secondTitle"></slot>
        <p v-if="secondText" class="text">{{ secondText }}</p>
        <slot name="thirdTitle"></slot>
        <p v-if="thirdText" class="text">{{ thirdText }}</p>
        <slot name="fourthTitle"></slot>
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
        font-size: 36px;
        padding-left: 20px;
        text-align: center;
        margin-bottom: 10px;
    }

    h2 {
        font-size: 30px;
        padding-left: 20px;
        text-align: justify;
    }

    .text {
        min-width: 100%;
        padding-top: 25px;
        text-align: justify;
        font-size: 18px;
        margin: 0;
    }

    img {
        width: 100%;
        margin-top: 35px;
        border-radius: 25px;
    }

}
</style>
