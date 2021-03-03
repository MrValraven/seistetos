<template>
   <section class="hero">
    <div class="heroImage" :style="style"></div>
    <div class="heroContent">
        <h1> {{ title }}</h1>
	    <h2> {{ subtitle }}</h2>
		<ApeitaBtn v-if="callToAction" :callToAction="callToAction" @click="scrollToElement(destination)"/>
        <DownButton v-if="!callToAction" @click="scrollToElement(destination)"/>
    </div>
  </section>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import ApeitaBtn from '../components/ApeitaBtn.vue';
import DownButton from '../components/DownButton.vue';

export default defineComponent({
  name: 'Hero',
  props: {
      destination: String,
      backgroundImage: String,
      title: String,
      subtitle: String,
      callToAction: String,
  },
  components: {
      ApeitaBtn,
      DownButton,
  },
  methods: {
      scrollToElement(destination: string) {
      const element = document.querySelector(destination);

      if (element) {
        element.scrollIntoView({behavior: 'smooth'});
      }
    },
  },
  computed: {
      style () :String {
        return `background-image: url(${this.backgroundImage})`;
      }
    },
});
</script>

<style lang="scss">

.hero {
    display: flex;
    position: relative;
	justify-content: center;
    align-items: center;
	min-height: 100vh;
	color: #fff;

    .heroImage {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        background-color: #fff;
        z-index: -1;

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #414a4f;
            opacity: 0.75;
        }
    }

    .heroContent {
        justify-content: center;
        align-items: center;
        opacity: 0;
        animation: 1s slidefade 00.5s forwards;

        h1{
            font: bold 60px 'Open Sans', sans-serif;
            margin-bottom: 15px;
            text-shadow: 2px 2px black;
        }

        h2{
            font: normal 28px 'Open Sans', sans-serif;
            margin-bottom: 40px;
            text-shadow: 1.5px 1.5px black;
        }
    }

    @keyframes slidefade {
        100% {
            opacity: 1;
        }
    }

}

</style>
