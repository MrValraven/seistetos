<template>
  <ScrollToTopButton v-if="!isAtTop"  @click="scrollToElement('.header')"/>
  <Navbar class="navbar" />
  <Hero :backgroundImage="getImgURL('tetosRececao.webp')" title="Grupo Académico Seistetos" subtitle="Honesta Açorda com Muito Bacalhau Misturado" callToAction="Apeitas-te?" />

  <section class="work">
    <div class="info">
      <h3 class="title">In Taberna</h3>
		  <p>O Grupo Académico Seistetos surge no panorama musical da Universidade de Évora em 1992, 
      sendo apadrinhado pelo Magnífico Reitor Professor Jorge Araújo. De espírito académico singular e boémio, 
      este grupo ganhou o respeito e o carinho de todos nesta academia através da sua alegria e irreverência 
      em palco e das suas canções dedicadas à cidade de Évora, à Universidade, às caloiras, às veteranas e à vida de estudante!
      </p>
    </div>
		
		<div class="viagens">
      <img class="viagens" src="../assets/media/tetosAntigos1.webp" alt="">
    </div>
	</section>
	
<section class="features">
		<h3 class="title">Noites Boémias</h3>
		<p>Como nem só de trabalho e estudo vive o estudante, o Grupo Académico Seistetos convida-te a conhecer o lado boémio da vida universitária!</p>
		<hr>

		<ul class="grid">
       <FeatureCard v-for="feature in features" :key="feature.id" :icon="feature.icon" :title="feature.subtitle" :description="feature.description" />
    </ul>
			
    <div class="viagens">
      <img class="viagens" src="../assets/media/tetosLisboa.webp" alt="">
      <img class="viagens" src="../assets/media/tetosCovilha.webp" alt="">
    </div>
	</section>

	<section class="reviews">

		<h3 class="title">A Vida de Estudante</h3>
		<hr>

    <ul class="grid" >
      <TetoCard v-for="tetos in tetosReviews" :key="tetos.id" :ImgPath="getImgURL(tetos.imgPath)" :quote="tetos.quote" :author="tetos.author" />
    </ul>

	
	</section>

	<section id ="contacto" class="contact">
		<h3 class="title">Apeitas-te?</h3>	
		<p>Tens vontade de aprender, orgulho para demonstrar o teu espirito académico, um estomâgo e fígado impertubável? Estás pronto para sair para a rua, cantar as nossas canções, trovando à luz da lua para conquistar corações?</p>
		<hr>

		<ApeitaBtn callToAction="Contacta-nos!" />
	</section>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '../components/Navbar.vue';
import Hero from '../components/Hero.vue';
import ApeitaBtn from '../components/ApeitaBtn.vue';
import ScrollToTopButton from '../components/ScrollToTopButton.vue';
import TetoCard from '../components/TetoCard.vue';
import FeatureCard from '../components/FeatureCard.vue';
import Footer from '../components/Footer.vue';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      isAtTop: true,
      tetosReviews: [
        {id: 1, imgPath: "serodio.webp", quote: "É teres sempre alguém pronto a ajudar quando precisas, é estares sempre rodeado de boa música, é teres o melhor que a UÉ pode oferecer!", author: 'Nuno "Caçador" Serôdio' },
        {id: 2, imgPath: "seixas.webp", quote: "Honestamente, lembro-me de pouca coisa, mas o fígado tem cá umas marcas.", author: 'João "Wolverine" Seixas' },
        {id: 3, imgPath: "rodrigo.webp", quote: "É (tentar) fazer o curso sabendo que toda e qualquer noite é noite de copos, amigos e modas (alentejanas e não só!)! #fazercadeirasnobilhar", author: 'Rodrigo "TGV" Silva' },
      ],
      features: [
        {id: 1, icon: "fa fa-music", subtitle: "As Modinhas", description: "Aquisição e desenvolvimento de novas competências e conhecimentos musicais e a comemoração da cultura alentejana e das tradições da academia eborense."},
        {id: 2, icon: "fa fa-users", subtitle: "A Camaradagem", description: "Experiências, histórias, memórias e aventuras únicas e originais das viagens pelo país e estrangeiro. Um grupo de amigos que estará sempre disposto a ajudar, nos bons e maus momentos"},
        {id: 3, icon: "fa fa-beer", subtitle: "O Vinho", description: "Celebração daquilo que temos de mais belo nesta vida: a capa, a batina, a guitarra, o amor, a açorda, o cante alentejano e o vinho. Para cantar basta beber um copo, e ao cantar ultrapassamos as amarguras da vida."},
      ]
    }
  },
  components: {
    Navbar,
    ApeitaBtn,
    ScrollToTopButton,
    TetoCard,
    FeatureCard,
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

@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

$PrimaryWhite: #ffffff;
$SecondaryWhite: #f7f7f7;

.navbar {
  opacity: 0;
  animation: 1s fadeIn 0.5 forwards;

  @keyframes fadeIn {
    100% {
      opacity: 1;
    }
  }
}

section{
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 100px 100px;

  .title {
	color: #414a4f;
	font: bold 32px 'Open Sans', sans-serif;
	margin-bottom: 35px;
	text-align: center;
  }

  p{
    max-width: 800px;
    text-align: center;
    margin-bottom: 35px;
    padding: 0 20px;
    line-height: 2;
  }
}

.grid  {
  display: flex;
}

.work {
	background-color: $PrimaryWhite;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  .info {
    width: 70%;
  }

 .viagens {
    display: flex;
    justify-content: center;
    width: 100%;

    img {
      width: 100%;
      margin: 30px;
      border-radius: 25px;
    }
  }
}

.features {
  background-color: $SecondaryWhite;
  display: flex;
  flex-direction: column;

  .viagens {
    display: flex;
    justify-content: center;
    width: 30rem;

    img {
      margin: 30px;
      border-radius: 10px;
    }
  }
}

.contact {
  background-color: $SecondaryWhite;

  p {
    font-size: 20px;
  }
}

</style>
