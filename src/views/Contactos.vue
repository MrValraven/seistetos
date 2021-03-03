<template>
    <ScrollToTopButton v-if="!isAtTop"  @click="scrollToElement('body')"/>
    <NavbarMobile v-if="(mobileMode && isAtTop) || (activatedNavbar && mobileMode)" @click="activatedNavbar = !activatedNavbar" />
    <Navbar v-if="!mobileMode" />
    <Hero :backgroundImage="getImgURL('tetosArraiolos.webp')" title="Contactos" subtitle="Honesta Açorda com Muito Bacalhau Misturado" destination=".contacts"/>
    <section class="contacts">
        <h1>Apeitas-te?</h1>
        <p>
            Também queres fazer parte desta experiência única e da grande familia que é o Grupo Académico Seistetos?
            Envia-nos uma mensagem em qualquer uma das nossas páginas ou informa-te junto do teto mais próximo!
        </p>  
        <div class="cards">
            <SmallCard v-for="info in contactInfo" :key="info.id" :link="info.link" :icon="info.icon" :text="info.text" />
        </div>
        
    </section>
    <Footer />
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import Navbar from '../components/Navbar.vue';
import NavbarMobile from '../components/NavbarMobile.vue';
import Hero from '../components/Hero.vue';
import ApeitaBtn from '../components/ApeitaBtn.vue';
import ScrollToTopButton from '../components/ScrollToTopButton.vue';
import SmallCard from '../components/SmallCard.vue';
import Footer from '../components/Footer.vue';

export default defineComponent({
    name: 'Contactos',
    data() {
        return {
          activatedNavbar: false,
            isAtTop: true,
            mobileMode: false,
            contactInfo: [
              {id: 0, link: "https://goo.gl/maps/urQSW3d6P5AZzo8S9", icon: "fa fa-map-marker", text: "R. de Diogo Cão 21, 7000-278 Évora"},
              {id: 1, link: "https://goo.gl/maps/N2QZJY9Zq3a2YK5y9", icon: "fa fa-music", text: "Ensaios todas as Terças e Quintas às 21:30 no Colégio Luis António Verney"},
              {id: 2, link: "mailto:seistetos@gmail.com", icon: "fa fa-envelope-o", text: "seistetos@gmail.com"}
            ]
        }
    },
    components: {
    Navbar,
    NavbarMobile,
    ApeitaBtn,
    ScrollToTopButton,
    Hero,
    SmallCard,
    Footer,
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
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
      window.pageYOffset >= 250 ? this.isAtTop = false : this.isAtTop = true;
    },
    handleResize () {
        this.mobileMode = window.innerWidth <= 1015;
    },
  },

});
</script>

<style lang="scss">

.contacts {
	position: relative;
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
	background-color: #f7f7f7;
	padding: 60px;
	overflow: hidden;

  h1 {
    font-size: 50px;
	  padding: 25px;
	  color: #6d1112;
  }

  p {
    font-size: 25px;
	  margin-bottom: 50px;
	  min-width: 70%;
  }

  .cards {
    display: flex;
  }
}

@media (max-width: 700px) {

  .contacts {
    padding: 0px;

    h1 {
      font-size: 36px;
    }

    p {
      font-size: 20px;
      text-align: justify;
    }

    .cards {
      flex-direction: column;
      align-items: center;
      margin-bottom: 30px;
    }
  }
}


</style>