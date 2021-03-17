<template>
  <ScrollToTopButton v-if="!isAtTop"  @click="scrollToElement('body')"/>
  <NavbarMobile v-if="(mobileMode && isAtTop) || (activatedNavbar && mobileMode)" @click="activatedNavbar = !activatedNavbar" />
  <Navbar v-if="!mobileMode" />
  <Hero :backgroundImage="getImgURL('tetosMatriculas.webp')" title="Os nossos Eventos" subtitle="Honesta Açorda com Muito Bacalhau Misturado" destination=".ourEvents"/>
  <section class="ourEvents">
    <ul class="indice">
      <i class="fa fa-arrow-circle-down" aria-hidden="true"><span>EVENTOS</span></i>
      <li><a @click="showBadalo(); scrollToElementMobile('.epoca')">BADALO</a></li>
      <li><a @click="showBaile(); scrollToElementMobile('.epoca')">BAILE DO BICHO</a></li>
      <li><a @click="showCaminhada(); scrollToElementMobile('.epoca')">A GRANDIOSA CAMINHADA PARA A MITRA</a></li>
      <li><a @click="showMagusto(); scrollToElementMobile('.epoca')">MAGUSTO DE S.TETINHO</a></li>
      <li><a @click="showLentrisco(); scrollToElementMobile('.epoca')">FESTA DO LENTRISCO</a></li>
      <li><a @click="showCarrossel(); scrollToElementMobile('.epoca')">CARROSSEL MÁGICO</a></li>
      <li><a @click="showCantar(); scrollToElementMobile('.epoca')">CANTAR ENTRE MESTRES E APRENDIZES</a></li>
    </ul>
    <div class="textcard">
        <TextCard v-if="showingDefault" :title="epocas[0].title" :firstText="epocas[0].firstText" :secondText="epocas[0].secondText" :thirdText="epocas[0].thirdText" :imgPath="getImgURL(epocas[0].imgPath)"/>
        <TextCard v-if="showingBadalo" :title="epocas[1].title" :firstText="epocas[1].firstText" :secondText="epocas[1].secondText" :thirdText="epocas[1].thirdText" :imgPath="getImgURL(epocas[1].imgPath)">
          <template v-slot:secondTitle>
          <h2>Arraial das Palmadas</h2>
          </template>
          <template v-slot:thirdTitle>
          <h2>Noite de Cante Alentejano</h2>
          </template>
          <template v-slot:fourthTitle>
          <h2>Dia do Festival</h2>
          <p class="text">Finalmente, na terceira noite, dá-se o “Badalo”. 
            Os grupos concorrentes e convidados apresentam-se através de breves atuações, demonstrando o espírito da sua academia; 
            O Grupo Académico Seistetos reúne um leque de gerações em palco matando saudades e avivando memórias de copos e guitarradas; 
            E, por fim, são atribuídos os prémios do concurso aos grupos que contribuiram para uma grandiosa noite de espetáculo e todo um festival memorável.</p>
          </template>
        </TextCard>
        <TextCard v-if="showingBaile" :title="epocas[2].title" :firstText="epocas[2].firstText" :secondText="epocas[2].secondText" :thirdText="epocas[2].thirdText" :imgPath="getImgURL(epocas[2].imgPath)"/>
        <TextCard v-if="showingCaminhada" :title="epocas[3].title" :firstText="epocas[3].firstText" :secondText="epocas[3].secondText" :thirdText="epocas[3].thirdText" :imgPath="getImgURL(epocas[3].imgPath)">
           <template v-slot:fourthTitle>
            <p class="text"> {{ epocas[3].fourthText }}</p>
           </template>
        </TextCard>
        <TextCard v-if="showingMagusto" :title="epocas[4].title" :firstText="epocas[4].firstText" :secondText="epocas[4].secondText" :thirdText="epocas[4].thirdText" :imgPath="getImgURL(epocas[4].imgPath)"/>
        <TextCard v-if="showingLentrisco" :title="epocas[5].title" :firstText="epocas[5].firstText" :secondText="epocas[5].secondText" :thirdText="epocas[5].thirdText" :imgPath="getImgURL(epocas[5].imgPath)"/>
        <TextCard v-if="showingCarrossel" :title="epocas[6].title" :firstText="epocas[6].firstText" :secondText="epocas[6].secondText" :thirdText="epocas[6].thirdText" :imgPath="getImgURL(epocas[6].imgPath)"/>
        <TextCard v-if="showingCantar" :title="epocas[7].title" :firstText="epocas[7].firstText" :secondText="epocas[7].secondText" :thirdText="epocas[7].thirdText" :imgPath="getImgURL(epocas[7].imgPath)"/>
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
import TextCard from '../components/TextCard.vue';
import ScrollToTopButton from '../components/ScrollToTopButton.vue';
import Footer from '../components/Footer.vue';

export default defineComponent({
  name: 'Historia',
  data() {
    return {
      activatedNavbar: false,
      isAtTop: true,
      mobileMode: false,
      showingDefault: true,
      showingBadalo: false,
      showingBaile: false,
      showingCaminhada: false,
      showingMagusto: false,
      showingLentrisco: false,
      showingCarrossel: false,
      showingCantar: false,
      epocas: [
          { id: 0,
            title: "Eventos", 
            firstText:'O Grupo Académico Seistetos, para além de participar na maioria dos eventos da UE, tais como, a Queima das Fitas e a Receção ao Caloiro, também organiza vários eventos próprios do grupo, como o famoso Baile do Bicho e o seu festival "O Badalo". Nestes eventos o G.A.S demonstra a força e dedicação dos seus membros, enaltecendo também os seus laços com a UÉ e todos aqueles que dela fazem parte. É uma altura em que o grupo mostra o que é o Grupo Académico Seistetos aos restantes alunos da UE e demonstra aos seus novos membros o que é ser um Teto!',
            secondText:'', 
            thirdText:'',
            imgPath:'tetosArraiolos.webp',
        },
        { id: 1,
          title: "Badalo", 
          firstText:'O “Badalo” é o culminar de todo o trabalho, esforço e dedicação realizado durante o ano letivo. Com origens humildes, o "Grandioso Badalo" é o ponto de encontro entre as várias gerações de tetos que já passaram pelo nosso grupo e a atual formação que, através da entreajuda de todos, torna este festival o contínuo sucesso que é e continuará a ser. Este evento de caráter académico e musical, tem como objetivo promover a música, a gastronomia e o vinho da região do Alentejo, bem como a tradição, o espírito académico e a amizade entre os diferentes grupos de todos os cantos do país. É um festival que ninguém quer perder!',
          secondText:'Estrearam-se oficialmente no mês de maio do mesmo ano, na noite de tunas da Queima das Fitas da Universidade de Évora, sendo apadrinhados pelo Sr. Prof. Doutor Jorge Araújo e pela Sr.ª Dr.ª Maria dos Céus Ramos, respectivamente o reitor da Universidade de Évora e a Secretária de Estado da Juventude na altura.', 
          thirdText:'Tendo em conta a experiência musical e raízes alentejanas dos fundadores, as primeiras referências musicais começaram por ser as músicas populares do cancioneiro alentejano. Foram escolhidas as músicas com as quais mais se identificava o seu estado de espírito sempre alegre, descontraido, boémio e apreciador das mulheres e foi-lhes dado um cunho pessoal, fruto da sua vivência académica. Nasceram então canções como a “Caloira” e “Veterana”, cuja letra foi adaptada para elucidar as tradições académicas. Outras canções como a “Moda das Mamas Grandes” ou “Balada dos Seistetos” já foram adaptadas de fados conhecidos, no entanto “As nuvens”, “Abraço ao Alentejo” e “Maria da Rocha” mantêm a letra e música populares também conhecida no cancioneiro alentejano. Mais recentemente surgiram canções originais e adaptações sob outras influências musicais, no entanto não decaíram das suas letras o espírito irreverente e boémio, nem tão pouco a sua musicalidade alegre tão peculiar.',
          imgPath:'tetosArena.webp',
        },
        { id: 2, 
          title: "Baile do Bicho", 
          firstText:'Acabados de chegar à Universidade, para além do estudo, os "bichos" querem é festas e arraiais! Então o Grupo Académico Seistetos organiza o primeiro arraial do ano, o "Baile do Bicho". Um arraial que tem vindo sempre a crescer e já se tornou obrigatório na vida académica desta Universidade onde os novos estudantes terão uma prova do que é a vida boémia académica.', 
          secondText:'', 
          thirdText:'',
          imgPath:'tetosBB.webp',
        },
        { id: 3, 
          title: "A Grandiosa Caminhada para a Mitra", 
          firstText:'Já há anos que cada vez mais estudantes aderem a este evento devido à da Lenda do Sarrabulho! Esta lenda conta que numa madrugada de Abril, um antigo aluno da Universidade de Évora terá saído já bem tratado de um estabelecimento noturno qualquer, nisto lembrou-se que havia Ferra da Mitra na manhã seguinte, então Zé Sarrabulho (nome fictício), meteu-se a andar para a Herdade da Mitra com o objectivo de chegar lá pela manhã.', 
          secondText:'Conta-se que a meio do caminho Zé Sarrabulho encontrou umas "serelhas", que tal como sereias existem no meio do mar, estas vivem no meio do campo e que ao invés de metade mulher/peixe, eram metade mulher/ovelha! Estes seres entoavam o canto das Serelhas, que descrito por Zé Sarrabulho, seria um canto "tã lindu e agradáveli de s\'ouviri...E nã era só mééé que elas faziam, porra!". Quando as Serelhas deram por ele ali especado a olhar para elas, Zé Sarrabulho ainda tentou esconder-se, mas não teria valido a pena porque elas assim do nada, como as rãs comem moscas, as serelhas desapareceram... Nisto Zé Sarrabulho desatou a correr que nem um maluco, mal metia os pés no chão, com o objectivo de chegar o mais depressa possível à Mitra e contar a toda a gente o sucedido. Chegando lá, óbvio que ninguém acreditou no pobre rapaz, tudo se riu e Zé Sarrabulho, com tamanha tristeza, ainda pegou uma vaca e meteu-se d\'ali pra fora... A partir desse dia, Zé Sarrabulho tornou-se outra pessoa, começou a estudar como nunca o tinha feito!', 
          thirdText:'Foi aí que começou a Lenda do Sarrabulho... e claro, a Grandiosa Caminhada para a Mitra. Em que estudantes perdidos e já sem esperança de acabar o curso, se juntam nessa madrugada com o objectivo de encontrar as tais Serelhas e de ouvir o seu canto, pois dizem que ouvindo esse canto tornar-se-ão em estudantes marrões e o curso será finalmente acabado!',
          fourthText: "Se nunca tiveste a oportunidade de caminhar aos S\'s até à Mitra, obviamente não vais querer perder esta! Por isso, se adoras madrugar, tens espírito de aventura e gostas de caminhar com o garrafão do vinho às costas, junta-te a nós nesta caminhada única que decorre todos os anos e cada vez com mais estudantes a aderir! Tráz o avô dos tintóis ou o pai taberneiro... ou então podes só trazer o burro do teu colega!",
          imgPath:'tetosCaminhada.webp',
        },
        { id: 4,
          title: "Magusto de São Tetinho", 
          firstText:'Reza a lenda que S.Tetinho, antigo estudante da Universidade de Évora, ajudou uma caloira no dia 11 de novembro de 1900 e trocópasso que morria de frio ao sair do Capitulo... Quando lhe perguntou como se chamava, a pequena disse que era a "Joana Castanha Assada Jeropiga de Água-pé", que era de Ourique e tinha vivido em Loulé. O resto não sabemos, porque ainda não eramos nascidos na altura, SEUS CUSCOS! O que sabemos, bem sabido, é que nesse mesmo dia (sim cumprimos horários!) é o Magusto de S.Tetinho, um ganda maluco, que deixou muita saudade e é celebrado todos os anos! Vem conhecer a tua Joana, Maria, Susana, Carina ou Celeste! Às Joanas, Marias, Susanas, Carinas e Celestes, venham conhecer os Joães, Raúis, Sauís e Miguéis desta vida! Vem magustar com quem magusta de ti!', 
          secondText:'', 
          thirdText:'',
          imgPath:'tetosMagusto.webp',
        },
        { id: 5,
          title: "Festa do Lentrisco", 
          firstText:'Também conhecido como a largada anual do lentrisco, esta é uma festa que não vais querer perder! Este ser que acolhemos com toda a boa vontade precisa de vez em quando de apanhar ar e correr um bocadinho, daí que os vamos soltar todos. São seres amistosos que poderás ver em primeira mão e quem sabe adotar algum! Este ser de hábitos predatórios nocturnos, alimenta-se maioritariamente a Uva e Cevada. Escondem-se da multidão, aparecendo apenas quando ouvem o seu chamamento "Palmadas"! Junta-te ao teu grupo favorito e embarca numa aventura à busca deste animal mítico da fauna eborense!', 
          secondText:'', 
          thirdText:'',
          imgPath:'tetosLentriscos.webp',
        },
        { id: 6,
          title: "O Carrossel mágico dos Seistetos", 
          firstText:'Com a colaboração da Práxis Club, esta é uma festa que garantidamente enche a casa. Uma espécie de arraial "indoors", esta festa traz toda a diversão e espírito de uma atuação do Grupo Académico Seistetos para que todos possam desfrutar de uma excelente noite na nossa companhia. Vai ser a loucura, sensação desde a mãe ao irmão, desde o bicho ao venerável estão todos convidados para esta noite memorável!', 
          secondText:'', 
          thirdText:'',
          imgPath:'tetosPraxisFiltro.webp',
        },
        { id: 7,
          title: "Cantar entre Mestres e Aprendizes", 
          firstText:'Devido à experiência musical e raízes alentejanas dos fundadores do Grupo Académico Seistetos, as primeiras referências musicais começaram por ser as do cancioneiro alentejano, como por exemplo, “As Nuvens”, “Abraço ao Alentejo” e “Maria da Rocha”.', 
          secondText:'É promovida na cidade de Évora um espectáculo de homenagem ao Cante Alentejano, eleito pela Organização das Nações Unidas para a Educação, Ciência e Cultura como Património Imaterial da Humanidade. Iremos proporcionar aos Eborenses e demais visitantes, um grandioso espetáculo de Cante Alentejano. Neste evento é feito uma aproximação entre a cultura, tradição, Cante Alentejano e os jovens, sendo a partilha entre gerações, desta importante expressão cultural, o ponto alto da noite.', 
          thirdText:'',
          imgPath:'tetosCantares.webp',
        },
      ],
    }
  },
  components: {
    Navbar,
    NavbarMobile,
    ApeitaBtn,
    ScrollToTopButton,
    TextCard,
    Hero,
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
    scrollToElementMobile(destination: string) {
      const element = document.querySelector(destination);

      if (element && this.mobileMode) {
        element.scrollIntoView({behavior: 'smooth'});
       
      }
    },
    handleScroll () {
      window.pageYOffset >= 250 ? this.isAtTop = false : this.isAtTop = true;
    },
    handleResize () {
      this.mobileMode = window.innerWidth <= 1015;
    },
    showBadalo() {
      this.showingBadalo = true;
      this.showingBaile = false;
      this.showingCaminhada = false;
      this.showingMagusto = false;
      this.showingLentrisco = false;
      this.showingCarrossel = false;
      this.showingCantar = false;
      this.showingDefault = false;
    },
    showBaile() {
      this.showingBadalo = false;
      this.showingBaile = true;
      this.showingCaminhada = false;
      this.showingMagusto = false;
      this.showingLentrisco = false;
      this.showingCarrossel = false;
      this.showingCantar = false;
      this.showingDefault = false;
    },
    showCaminhada() {
      this.showingBadalo = false;
      this.showingBaile = false;
      this.showingCaminhada = true;
      this.showingMagusto = false;
      this.showingLentrisco = false;
      this.showingCarrossel = false;
      this.showingCantar = false;
      this.showingDefault = false;
    },
    showMagusto() {
      this.showingBadalo = false;
      this.showingBaile = false;
      this.showingCaminhada = false;
      this.showingMagusto = true;
      this.showingLentrisco = false;
      this.showingCarrossel = false;
      this.showingCantar = false;
      this.showingDefault = false;
    },
    showLentrisco() {
      this.showingBadalo = false;
      this.showingBaile = false;
      this.showingCaminhada = false;
      this.showingMagusto = false;
      this.showingLentrisco = true;
      this.showingCarrossel = false;
      this.showingCantar = false;
      this.showingDefault = false;
    },
    showCarrossel() {
      this.showingBadalo = false;
      this.showingBaile = false;
      this.showingCaminhada = false;
      this.showingMagusto = false;
      this.showingLentrisco = false;
      this.showingCarrossel = true;
      this.showingCantar = false;
      this.showingDefault = false;
    },
    showCantar() {
      this.showingBadalo = false;
      this.showingBaile = false;
      this.showingCaminhada = false;
      this.showingMagusto = false;
      this.showingLentrisco = false;
      this.showingCarrossel = false;
      this.showingCantar = true;
      this.showingDefault = false;
    },
  },
});
</script>

<style lang="scss">
.ourEvents {
  display: flex;
	flex-direction: row;
  align-items: flex-start;
  background-color: #f7f7f7;
  padding-top: 145px;

  .indice {
    display: flex;
    flex-direction: column;
    text-align: left;
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
      padding: 10px 30px 0 30px;
    } 

    a {
      font-size: 24px;
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

  h2 {
    margin-top: 25px;
    text-indent: 30px;
  }
}

@media (max-width: 700px) {

  .ourEvents {
    flex-direction: column;
    padding: 50px 10px;

    .indice {
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 100%;

      li {
        padding: 10px 30px 10px 30px;
        border-radius: 45px;
        box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.1);
      }

      i span {
        margin-right: 0;
      }
    }

    .textcard {
      margin-top: 30px
    }
    h2 {
      text-indent: 0px;
    }
  }
}
</style>