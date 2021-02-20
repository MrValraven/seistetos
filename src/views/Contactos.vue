<template>
    <ScrollToTopButton v-if="!isAtTop"  @click="scrollToElement('.header')"/>
    <Navbar />
    <Hero :backgroundImage="getImgURL('tetosArraiolos.webp')" title="Contactos" subtitle="Honesta Açorda com Muito Bacalhau Misturado" />
    <section>
        <h1>Apeitas-te?</h1>
        <p>
            Também queres fazer parte desta experiência única e da grande familia que é o Grupo Académico Seistetos?
            Envia-nos uma mensagem em qualquer uma das nossas páginas ou informa-te junto do teto mais próximo!
        </p>  
        <div>
            <SmallCard />
        </div>
        
    </section>
    <Footer />
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import Navbar from '../components/Navbar.vue';
import Hero from '../components/Hero.vue';
import ApeitaBtn from '../components/ApeitaBtn.vue';
import ScrollToTopButton from '../components/ScrollToTopButton.vue';
import Footer from '../components/Footer.vue';

export default defineComponent({
    name: 'Contactos',
    data() {
        return {
            isAtTop: true,
        }
    },
    components: {
    Navbar,
    ApeitaBtn,
    ScrollToTopButton,
    Hero,
    Footer,
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    getImgURL(image: String) {
      return require('../assets/media/' + image);
    },
    scrollToElement(destination: string) {
      const element = document.querySelector(destination);

      if (element) {
        element.scrollIntoView({behavior: 'smooth'});
      }
    },
    handleScroll () {
      window.pageYOffset >= 100 ? this.isAtTop = false : this.isAtTop = true;
    }
  },

});
</script>

<style lang="scss">

</style>