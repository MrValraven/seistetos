<template>
    <ScrollToTopButton v-if="!isAtTop"  @click="scrollToElement('.header')"/>
    <NavbarMobile v-if="mobileMode" />
    <Navbar v-if="!mobileMode" />
    <Hero :backgroundImage="getImgURL('tetosSeixas.webp')" title="Discografia" subtitle="Honesta Açorda com Muito Bacalhau Misturado" callToAction="Apeitas-te?" />
    <section class="ourSongs">
        <ul class="indice">
            <i class="fa fa-arrow-circle-down" aria-hidden="true"><span>DISCOGRAFIA</span></i>
            <li><a @click="showCD1()">CD.1 - ANDA KÁ K'EU NÃTALÊJO</a></li>
            <li><a @click="showCD2()">CD.2 - IN TABERNA</a></li>
            <li><a @click="showSingteto()">KARAOKE - SINGTETO</a></li>
        </ul>
        <div>
            <SongCard v-if="showingCD1" :nomeCD="cds[0].title" :musicas="cds[0].musicas" :imgPath="getImgURL(cds[0].imgPath)"/>
            <SongCard v-if="showingCD2" :nomeCD="cds[1].title" :musicas="cds[1].musicas" :imgPath="getImgURL(cds[1].imgPath)"/>
            <TextCard v-if="showingSingteto" :title="cds[2].title" :firstText="cds[2].firstText" :secondText="cds[2].secondText" :thirdText="cds[2].thirdText" :imgPath="getImgURL(cds[2].imgPath)"/>
        </div>
    </section>
    <Footer />
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import ScrollToTopButton from '../components/ScrollToTopButton.vue';
import Navbar from '../components/Navbar.vue';
import NavbarMobile from '../components/NavbarMobile.vue';
import Hero from '../components/Hero.vue';
import TextCard from '../components/TextCard.vue';
import SongCard from '../components/SongCard.vue';
import Footer from '../components/Footer.vue';

export default defineComponent({
  name: 'Discografia',
  components: {
    ScrollToTopButton,
    Navbar,
    NavbarMobile,
    Hero,
    SongCard,
    TextCard,
    Footer,
  },
  data() {
    return {
        isAtTop: true,
        mobileMode: false,
        showingCD1: true,
        showingCD2: false,
        showingSingteto: false,
        cds: [{
            id: 1,
            title: "Anda Ká K'Eu Nãtalêjo", 
            musicas: [
                {id: 0, nome: "Balada dos Seistetos", spotify: "https://open.spotify.com/track/3Ps5FD9Z10hnt81pCQY2WQ?si=zf2leySVQsqF8jOJJ5vu7g", youtube: "https://www.youtube.com/watch?v=3UDiRsRiu58"},
                {id: 1, nome: "Mariana ", spotify: "https://open.spotify.com/track/6u4DuLwmAuwuomfWrQVgiQ?si=yrCClDGBRPm_I-h8yUXq_A", youtube: "https://www.youtube.com/watch?v=WNiRQtlaUcI"},
                {id: 2, nome: "Nuvens", spotify: "https://open.spotify.com/track/58IjnzJ1thT1dMWAJ4RjpX?si=eiD4XLw4RgugMscQkT9A-w", youtube: "https://www.youtube.com/watch?v=0-r6rmYSgmE"},
                {id: 3, nome: "Abraço ao Alentejo", spotify: "https://open.spotify.com/track/3CUF1Xd6RoBSWOLu524D7i?si=GbVI_369SOmdNXXSs0EJRg", youtube: "https://www.youtube.com/watch?v=nqHT6NuAzNY"},
                {id: 4, nome: "Meninas da U.E", spotify: "https://open.spotify.com/track/3WAZ9pnzCINnDUhVXS4KQM?si=VjGwfxH_QBGVjx03Tbla9g", youtube: ""},
                {id: 5, nome: "Évora Meu Amor", spotify: "https://open.spotify.com/track/1tbsiYagQH9ms4COgIThLn?si=tTJ6JNjaQ8GYQaLjqZRqwg", youtube: ""},
                {id: 6, nome: "Moda das Mamas Grandes", spotify: "https://open.spotify.com/track/1mfbUeOtZejaDRU17FC8Ae?si=ElRq4FR-R5aQgFb-uedDEw", youtube: "https://www.youtube.com/watch?v=2lBxv7sndUE"},
                {id: 7, nome: "Mix (Instrumental)", spotify: "https://open.spotify.com/track/5VAUPWZ4flMFxgzMquyeaS?si=txP7W2LnQ-qVsDl6B5yG_A", youtube: ""},
                {id: 8, nome: "Maria da Rocha", spotify: "https://open.spotify.com/track/7MLySL8R6KV4TykmCpmMJ1?si=545444TcR9yhnREJiGWCnQ", youtube: "https://www.youtube.com/watch?v=Qt7QdivjlG0"},
                {id: 9, nome: "Veterana", spotify: "https://open.spotify.com/track/1P6rVcfHLIiOMOVQHdDcuc?si=E6RLlOJuSmqK49OkrGWavQ", youtube: ""},
                {id: 10, nome: "Caloira ", spotify: "https://open.spotify.com/track/5wndSwU7LisFYMQ8AXAGP9?si=y6XkADa-T-qBCdXX_epefA", youtube: "https://www.youtube.com/watch?v=fPf_ExXHCeI"},
            ], 
            imgPath: "tetosCD1.webp"
            },
            {
            id: 2,
            title: "In Taberna", 
            musicas: [
                {id: 0, nome: "In Taberna", spotify: "https://open.spotify.com/track/5y97p75Ksrp1oVuABfb1Js?si=RvS77jvMQgKvsDO_ti0I6w", youtube: ""},
                {id: 1, nome: "Noites Boémias", spotify: "https://open.spotify.com/track/64wied5KZPib7TBhevtptj?si=e75rX58dSt-0NYna1VOfWQ", youtube: "ttps://www.youtube.com/watch?v=9ppeebJ6tug"},
                {id: 2, nome: "Chumbo da Maria", spotify: "https://open.spotify.com/track/1HH6XW60EYyp2n5PEnEW2a?si=gVpiFkcnSS2N-iAjkUcoxA", youtube: "https://www.youtube.com/watch?v=XREZoI0SLE0"},
                {id: 3, nome: "Boris", spotify: "https://open.spotify.com/track/2epLE0JRcQUlEAQ4vROjSg?si=ECvoojPVQ4GeGyzvfwZDTg", youtube: "https://www.youtube.com/watch?v=T4vhyb_6fJE"},
                {id: 4, nome: "Ao Romper da Bela Aurora", spotify: "https://open.spotify.com/track/5u4hFZPH6myfaQqPy892ed?si=lGeXOHngRDCD0_zWsbUUjA", youtube: ""},
                {id: 5, nome: "Alentejo não tem Sombra", spotify: "https://open.spotify.com/track/4dQ34WAJzJOkEz4hVVdb1S?si=YkLxz_UWShqIqkgPMsZfoA", youtube: "https://www.youtube.com/watch?v=ySe4JbRweu8"},
                {id: 6, nome: "Senhora Maria", spotify: "https://open.spotify.com/track/0zriIWyVFFlQsCberoefg8?si=gM-Re43yRROrCHBL9zuovQ", youtube: "https://www.youtube.com/watch?v=GYITq4BsIdU"},
                {id: 7, nome: "Serenata para Fazer-te a Folha", spotify: "https://open.spotify.com/track/2LnuizWCvkmEqk0Bn4HgbF?si=CMyY1Ij4SUOQ5jyckbMx8Q", youtube: ""},
                {id: 8, nome: "Promessa da Caloira", spotify: "https://open.spotify.com/track/5JKJqK6v3GwLu7ajutVkVo?si=fZHAZlwXRASOB0YoEQo1PA", youtube: "https://www.youtube.com/watch?v=cHXm65JHtlE"},
                {id: 9, nome: "Meninas da U.E (Parte II)", spotify: "https://open.spotify.com/track/6V2YL34YCWJAUAnFDoq9OL?si=p_4uQ1WsRium0FjZ7xcneg", youtube: ""},
                {id: 10, nome: "O Sol e a Lua", spotify: "https://open.spotify.com/track/2WsVrDfzu9bqrBXQRuLKT2?si=UI0UfRG4QCmDc50QeBLOzg", youtube: ""},
                {id: 11, nome: "Vida de Estudante", spotify: "https://open.spotify.com/track/46YKRMr4AiVIasKE43hxr2?si=vwcJmG36S1m2vzUh9YLc2Q", youtube: "https://www.youtube.com/watch?v=9CH5U8HZB1Y"},
            ], 
            imgPath: "tetosCD2.webp"
            },
            { id: 3,
            title: "O Singteto", 
            firstText:'Uma das imagens do Grupo Académico Seistetos é a criatividade e a inovação que, com o que vos vamos apresentar aqui, conseguiu mais uma vez dar prova disso. Depois de dois albuns (Anda cá k\'eu nãtalêjo e In Taberna), desta vez quisemos ir mais além ao que a trabalhos discográficos diz respeito e lançamos agora um produto exclusivo e pioneiro no que toca a grupos de índole académicos, o Karaoke dos Seistetos, o Singteto!',
            secondText:'Trata-se de um videojogo em tudo semelhante ao conhecido Singstar, mas com uma pequena grande diferença, contendo as músicas do Grupo Académico Seistetos. Neste trabalho apostamos, em geral, nas músicas que mais furor fazem por entre os nossos seguidores, amigos e conhecidos desde o nosso hino "Balada dos Seistetos", a música tradicional portuguesa "Mariana", músicas que descrevem quase na perfeição a vida do estudante da Universidade de Évora como a "Vida de Estudante" e as "Noites Boémias" até a mais cantada e entoada nas ruas de Évora durante as praxes e não só, as "Palmadas". Como não poderia deixar de ser, também temos musicas dedicadas a elas (meninas), como o "Chumbo da Maria" e a "Promessa da Caloira" para as irreverentes e com mais "à vontade" ou a "Serenata para Fazer-te a Folha" para as mais sentimentais.', 
            thirdText:'',
            imgPath:'tetosMatriculas.webp',
        },
        ]
    }
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
    handleResize () {
        this.mobileMode = window.innerWidth <= 1015;
    },
    showCD1() {
        this.showingCD1 = true;
        this.showingCD2 = false;
        this.showingSingteto = false;
    },
    showCD2() {
        this.showingCD1 = false;
        this.showingCD2 = true;
        this.showingSingteto = false;
    },
    showSingteto() {
        this.showingCD1 = false;
        this.showingCD2 = false;
        this.showingSingteto = true;
    },
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
});

</script>


<style lang="scss">

.ourSongs {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
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