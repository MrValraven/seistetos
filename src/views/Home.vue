<template >
  <header>
    <Navbar />
  </header>
  <section class="hero">
    <div class="heroImage"></div>
    <div class="heroContent">
      <h1>Grupo Académico Seistetos</h1>
			<h2>Honesta Açorda com Muito Bacalhau Misturado </h2>
			<ApeitaBtn callToAction="Apeitas-te?" />
    </div>
  </section>
  <section>
    <h1>cenas</h1>
  </section>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '../components/Navbar.vue';
import ApeitaBtn from '../components/ApeitaBtn.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Navbar,
    ApeitaBtn,
  },
});
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');


header {
  position: absolute;
	z-index: 10;
	width: 100%;
	opacity: 0;
	color: #fff;
	padding: 35px 100px 0;
	animation: 1s fadeIn 0.5 forwards;
}

@keyframes fadeIn {
  100% {
      opacity: 1;
  }
}

.hero {
  display: flex;
  position: relative;
	justify-content: center;
  align-items: center;
	min-height: 100vh;
	color: #fff;

  .heroImage {
  background-image: url('../assets/media/tetosRececao.webp');
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
