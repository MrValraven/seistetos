<template>
  <ScrollToTopButton v-if="!isAtTop"  @click="scrollToElement('.header')"/>
  <Navbar />
  <Hero :backgroundImage="getImgURL('tetosArena.webp')" title="A nossa História" subtitle="Honesta Açorda com Muito Bacalhau Misturado" callToAction="Apeitas-te?" />
  <section class="ourStory">
    <ul class="indice">
      <i class="fa fa-arrow-circle-down" aria-hidden="true"><span>HISTÓRIA</span></i>
      <li><a @click="showFundacao()">FUNDAÇÃO</a></li>
      <li><a @click="showNatalejo()">ANDA KÁ K'EU NÃTALÊJO</a></li>
      <li><a @click="showTaberna()">IN TABERNA</a></li>
      <li><a @click="showAtualidade()">ATUALIDADE</a></li>
    </ul>
    <div>
      <TextCard v-if="showingFundacao" :title="epocas[0].title" :firstText="epocas[0].firstText" :secondText="epocas[0].secondText" :thirdText="epocas[0].thirdText" :imgPath="getImgURL(epocas[0].imgPath)"/>
      <TextCard v-if="showingNatalejo" :title="epocas[1].title" :fmirstText="epocas[1].firstText" :secondText="epocas[1].secondText" :thirdText="epocas[1].thirdText" :imgPath="getImgURL(epocas[1].imgPath)"/>
      <TextCard v-if="showingTaberna" :title="epocas[2].title" :firstText="epocas[2].firstText" :secondText="epocas[2].secondText" :thirdText="epocas[2].thirdText" :imgPath="getImgURL(epocas[2].imgPath)"/>
      <TextCard v-if="showingAtualidade" :title="epocas[3].title" :firstText="epocas[3].firstText" :secondText="epocas[3].secondText" :thirdText="epocas[3].thirdText" :imgPath="getImgURL(epocas[3].imgPath)"/>
    </div>
  </section>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '../components/Navbar.vue';
import Hero from '../components/Hero.vue';
import ApeitaBtn from '../components/ApeitaBtn.vue';
import TextCard from '../components/TextCard.vue';
import ScrollToTopButton from '../components/ScrollToTopButton.vue';
import Footer from '../components/Footer.vue';

export default defineComponent({
  name: 'Historia',
  data() {
    return {
      isAtTop: true,
      showingFundacao: true,
      showingNatalejo: false,
      showingTaberna: false,
      showingAtualidade: false,
      epocas: [
        { id: 1,
          title: "Fundação", 
          firstText:'Corria o ano de 1992 quando, um dia, um grupo de amigos pensou em constituir o primeiro grupo académico da Universidade de Évora. Mário "Xico da Moita" Moita, Nuno "Tira Tira" Tirapicos, Jorge “Chili" Pena, Paulo "Brasileiro" Gomes, José "Zéii" Manuel, Daniel "El Batatinha" Aurélio e Paulo "Sprite" Fernandes, formam o conjunto dos Fundadores de um grupo de índole académica e de uma forma de estar na vida que ainda hoje prevalece. Sendo os mesmos dos cursos de Engenharia Agrícola e Engenharia Zootécnica acharam por bem atribuir o nome “SEISTETOS” a este novo grupo académico. “Seis”, porque os primeiros elementos a actuar foram 6 e “tetos” faz referência aos tetos da vaca, um animal presente no quotidiano das tarefas académicas dos seus cursos e não só!',
          secondText:'Estrearam-se oficialmente no mês de maio do mesmo ano, na noite de tunas da Queima das Fitas da Universidade de Évora, sendo apadrinhados pelo Sr. Prof. Doutor Jorge Araújo e pela Sr.ª Dr.ª Maria dos Céus Ramos, respectivamente o reitor da Universidade de Évora e a Secretária de Estado da Juventude na altura.', 
          thirdText:'Tendo em conta a experiência musical e raízes alentejanas dos fundadores, as primeiras referências musicais começaram por ser as músicas populares do cancioneiro alentejano. Foram escolhidas as músicas com as quais mais se identificava o seu estado de espírito sempre alegre, descontraido, boémio e apreciador das mulheres e foi-lhes dado um cunho pessoal, fruto da sua vivência académica. Nasceram então canções como a “Caloira” e “Veterana”, cuja letra foi adaptada para elucidar as tradições académicas. Outras canções como a “Moda das Mamas Grandes” ou “Balada dos Seistetos” já foram adaptadas de fados conhecidos, no entanto “As nuvens”, “Abraço ao Alentejo” e “Maria da Rocha” mantêm a letra e música populares também conhecida no cancioneiro alentejano. Mais recentemente surgiram canções originais e adaptações sob outras influências musicais, no entanto não decaíram das suas letras o espírito irreverente e boémio, nem tão pouco a sua musicalidade alegre tão peculiar.',
          imgPath:'tetosCD1.webp',
        },
        { id: 2, 
          title: "Anda Ká K'Eu Nãtalêjo", 
          firstText:'Em 2002, por comemoração do 10.º aniversário, concretiza-se um velho sonho e nasce uma obra discográfica com o título de "Anda ká k’eu nãtalêjo", reunindo as canções mais populares do Grupo Académico Seistetos até então. A sua musicalidade já várias vezes premiada leva além fronteiras a cultura alentejana e as tradições da academia eborense. Destacam-se no seu currículo actuações nos Doutoramentos Honoris Causa de Sua Alteza Real Rainha Sofia de Espanha, Dr. Mário Soares, Dr. José Saramago, Dr. Ximenes Belo, de Sua Alteza Real Aga Khan, Comendador Rui Nabeiro, a actriz Eunice Muñoz, o actor Ruy de Carvalho e o pintor Malangatana, representação de Portugal no Salão Internacional do Estudante em Bruxelas, receção de Sua Alteza Real Príncipe das Astúrias na Universidade de Évora, festivais e encontros de tunas em Angra do Heroísmo, Idanha-a-Nova, Lisboa, Porto, Elvas, Crato, Funchal, Leiria, Beja entre muitos outros... E participações em programas de Rádio e TV, tais como "Doutores e Engenheiros" e "1.ª Companhia" da TVI e "Portugal no Coração" e "Verão Total" da RTP1.', 
          secondText:'A partir de 2004 inicia-se a celebração do Dia Solene dos Seistetos, contando com a participação da Formação Actual, da Velha Guarda e dos Fundadores numa festividade sem par na cidade de Évora no primeiro sábado da semana da Queima das Fitas.', 
          thirdText:'Em 2007 a Tuna Académica Feminina da Universidade de Évora é apadrinhada pelo G.A.S., estreitando-se as boas relações e a cooperação no âmbito de boa vivências das tradições académicas.',
          imgPath:'tetosCD1.webp',
        },
        { id: 3, 
          title: "In Taberna", 
          firstText:'No dia 27 de maio de 2010 foi lançado o segundo trabalho discográfico do G.A.S., "In Taberna", apadrinhado pelo Sr. Professor Doutor José Bravo Nico, então professor na Universidade de Évora e deputado na Assembleia da República. Numa calma e pacata noite alentejana, tendo como cenário o Templo Romano de Évora, o G.A.S. convidou a participarem na apresentação do "In Taberna" diversos grupos musicais alentejanos e artistas de renome nacional com os quais também gravou alguns dos temas deste novo trabalho. O grupo coral "Os Almocreves", o grupo alentejano de música tradicional "Trovadores do Sul", o músico alentejano de Redondo "Vitorino" e o irreverente artista e entertainer "Jaimão" constituem as participações especiais presentes no CD "In Taberna".', 
          secondText:'Em jeito de comemoração do seu 20º aniversário, no dia 15 de março de 2012, o grupo lançou o seu primeiro trabalho audiovisual, cuja gravação resultou do espectáculo de lançamento do segundo trabalho discográfico e, por isso, foi igualmente intitulado "In Taberna". Além da comemoração do aniversário do G.A.S., o lançamento deste trabalho teve também uma vertente de cariz solidário, tendo sido leiloado um computador cujos fundos reverteram para o Lar de Santa Helena, instituição que dá apoio às vítimas de violência doméstica.', 
          thirdText:'Em 2013, graças ao trabalho e virtuosismo de alguns elementos do grupo, surgiu o tanto inédito quanto inovador Karaoke dos Seistetos, o "Singteto", contendo algumas das mais populares músicas do grupo.',
          imgPath:'tetosCD2.webp',
        },
        { id: 4,
          title: "Atualiade", 
          firstText:'Hoje em dia o Grupo Académico Seistetos continua a participar em atuações e a distribuir as suas famosas "Palmadas" por todo o país. É responsável por diversos eventos que enaltecem a vida e tradição académicas da Universidade de Évora, é convidado a animar instituições, como lares de idosos e escolas, e não deixa de marcar presença na vida noturna dos estudantes.', 
          secondText:'', 
          thirdText:'',
          imgPath:'tetosMarcelo.webp',
        },
      ],
    }
  },
  components: {
    Navbar,
    ApeitaBtn,
    ScrollToTopButton,
    TextCard,
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
    },
    showFundacao() {
      this.showingFundacao = true;
      this.showingNatalejo = false;
      this.showingTaberna = false;
      this.showingAtualidade = false;
    },
    showNatalejo() {
      this.showingFundacao = false;
      this.showingNatalejo = true;
      this.showingTaberna = false;
      this.showingAtualidade = false;
    },
    showTaberna() {
      this.showingFundacao = false;
      this.showingNatalejo = false;
      this.showingTaberna = true;
      this.showingAtualidade = false;
    },
    showAtualidade() {
      this.showingFundacao = false;
      this.showingNatalejo = false;
      this.showingTaberna = false;
      this.showingAtualidade = true;
    },
  },
});
</script>

<style lang="scss">

.ourStory {
  display: flex;
	flex-direction: row;
  align-items: flex-start;
  background-color: #f7f7f7;
  padding-top: 145px;

  .indice {
    display: flex;
    flex-direction: column;
    text-align: center;
    min-width: 40%;
    font-size: 25px;

    i {
      width: 100%;
      font-size: 30px;
      padding: 15px;
    
      span {
        font-family: sans-serif;
        margin-left: 10px;
        margin-right: 50px;
        letter-spacing: 5px;
      }
    }

    li {
      width: 90%;
      padding: 30px;
    } 

    a {
      font-size: 25px;
      color: #555;
      display: inline-block;
      position: relative;
      padding: 10px;
  
      &:hover {
        scale: 0.98;

        &:before {
          color: #000000;
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      }

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color:  #6d1112;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
      }
    }
  }
}

</style>