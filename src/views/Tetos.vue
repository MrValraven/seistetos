<template>
    <ScrollToTopButton v-if="!isAtTop"  @click="scrollToElement('body')"/>
    <NavbarMobile v-if="mobileMode && isAtTop" />
    <Navbar v-if="!mobileMode" />
    <Hero :backgroundImage="getImgURL('tetosBilhar.webp')" title="Quem somos?" subtitle="Honesta Açorda com Muito Bacalhau Misturado" callToAction="Apeitas-te?" />
    <section class="members">
        <ul class="indice">
            <li><a @click="showFundadores()">🍷 FUNDADORES</a></li>
            <li><a @click="showVelha()">🥃 VELHA GUARDA</a></li>
            <li><a @click="showAtual()">🍻 FORMAÇÃO ATUAL</a></li>
        </ul>
        <div class="container">
            <div v-if="showingFundadores">
                <MembroCard v-for="fundador in fundadores" :key="fundador.id" :nome="fundador.nome" :alcunha="fundador.alcunha" :instrumento="fundador.instrumento" :curso="fundador.curso" :ano="fundador.anoDeEntrada" :imgPath="getImgURL(fundador.imagem)" />
            </div>
            <div v-if="showingVelha">
                <MembroCard v-for="velha in velhaGuarda" :key="velha.id" :nome="velha.nome" :alcunha="velha.alcunha" :instrumento="velha.instrumento" :curso="velha.curso" :ano="velha.anoDeEntrada" :imgPath="getImgURL(velha.imagem)" />
            </div>
            <div v-if="showingAtual">
                <MembroCard v-for="atual in formacaoAtual" :key="atual.id" :nome="atual.nome" :alcunha="atual.alcunha" :instrumento="atual.instrumento" :curso="atual.curso" :ano="atual.anoDeEntrada" :imgPath="getImgURL(atual.imagem)" />
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import ScrollToTopButton from '../components/ScrollToTopButton.vue';
import Navbar from '../components/Navbar.vue';
import NavbarMobile from '../components/NavbarMobile.vue';
import Hero from '../components/Hero.vue';
import MembroCard from '../components/MembroCard.vue';

export default defineComponent({
  name: 'Tetos',
  components: {
    ScrollToTopButton,
    Navbar,
    NavbarMobile,
    Hero,
    MembroCard
  },
  data() {
    return {
        isAtTop: true,
        mobileMode: false,
        showingFundadores: true,
        showingVelha: false,
        showingAtual: false,
        fundadores: [
            {id: 0, nome: "Mário Moita", alcunha: "Xico da Moita", instrumento: "Acordeão", curso: "Engenharia Zootécnica", anoDeEntrada: "1992", imagem: "fundadores/marioMoita.webp", },
            {id: 1, nome: "Nuno Tirapicos", alcunha: "Tira Tira", instrumento: "Bombo / Castanholas", curso: "Engenharia Zootécnica", anoDeEntrada: "1992", imagem: "fundadores/nunoTirapicos.webp", },
            {id: 2, nome: "Jorge Pena", alcunha: "Chili", instrumento: "Ferrinhos", curso: "Engenharia Agrícola", anoDeEntrada: "1992", imagem: "fundadores/jorgePena.webp", },
            {id: 3, nome: "José Manuel", alcunha: "Zéii", instrumento: "Guitarra", curso: "Engenharia Agrícola", anoDeEntrada: "1992", imagem: "fundadores/joseManuel.webp", },
            {id: 4, nome: "Daniel Aurélio", alcunha: "El Batatiña", instrumento: "Cavaquinho", curso: "Engenharia Zootécnica", anoDeEntrada: "1992", imagem: "fundadores/danielAurelio.webp", },
            {id: 5, nome: "Paulo Gomes", alcunha: "Brasileiro", instrumento: "Guitarra", curso: "Engenharia Agrícola", anoDeEntrada: "1992", imagem: "fundadores/placeholder.webp", },
            {id: 6, nome: "Paulo Fernandes", alcunha: "Sprite", instrumento: "Pandeireta", curso: "Engenharia Zootécnica", anoDeEntrada: "1992", imagem: "fundadores/placeholder.webp", },
            
        ],
        velhaGuarda: [
            {id: 1, nome: "Gonçalo Póvoas", alcunha: "Bolas", instrumento: " Estandarte, cavaquinho, viola campaniça (ainda conseguiu acertar 2 ou 3 acordes)", curso: "Agronomia", anoDeEntrada: "2009", imagem: "fundadores/placeholder.webp", },
            {id: 2, nome: "Vasco Miguel", alcunha: "Entrecosto, Rei do MEG", instrumento: "Pandeireta (diz que tentou)", curso: "Biologia", anoDeEntrada: "2009", imagem: "velhaguarda/vascoMiguel.webp", },
            {id: 3, nome: "Sandro Vicente", alcunha: "G, Stor Calhau, Açoreano da Madeira", instrumento: "Acordeão", curso: "Engenharia Geológica", anoDeEntrada: "2010", imagem: "fundadores/placeholder.webp", },
            {id: 4, nome: "Pedro Parreira", alcunha: "PP, Uvas, Colhão Esquerdo", instrumento: "Cavaquinho", curso: "História e Arqueologia", anoDeEntrada: "2011", imagem: "fundadores/placeholder.webp", },
            {id: 5, nome: "David Ferreira", alcunha: "Barril, 3D, Hodor", instrumento: "Bombo", curso: "Biotecnologia", anoDeEntrada: "2012", imagem: "fundadores/placeholder.webp", },
            {id: 6, nome: "Fábio Alberto", alcunha: "Falberto", instrumento: "Voz", curso: "Engenharia Infórmatica", anoDeEntrada: "2012", imagem: "fundadores/placeholder.webp", },
            {id: 7, nome: "Luís Carvalho", alcunha: "Beirão", instrumento: "Baixo / Maço de Tabaco", curso: "Geografia", anoDeEntrada: "2012", imagem: "velhaguarda/luisCarvalho.webp", },
            {id: 8, nome: "Tiago Pinheiro", alcunha: "Zé do Espeto", instrumento: "Estandarte / Saca-rolhas / Abre-caricas", curso: "Línguas, Literaturas e Culturas", anoDeEntrada: "2012", imagem: "velhaguarda/tiagoPinheiro.webp", },
            {id: 9, nome: "Tiago Sofio", alcunha: "Smurf, Gasosa, Rei do Giraldo", instrumento: "Pandeireta, Guitarra", curso: "Ciências do Desporto", anoDeEntrada: "2012", imagem: "velhaguarda/tiagoSofio.webp", },
            {id: 10, nome: "André Lourenço", alcunha: "Sideshow Bob", instrumento: "Guitarra, Bandolim", curso: "Engenharia Informática", anoDeEntrada: "2013", imagem: "fundadores/placeholder.webp", },
            {id: 11, nome: "Duarte Barreiros", alcunha: "Rochinha", instrumento: "Guitarra, Bandolim", curso: "Enfermagem", anoDeEntrada: "2013", imagem: "fundadores/placeholder.webp", },
            {id: 12, nome: "Jorge Lourenço", alcunha: "Majó, Renato Seabra", instrumento: "Estandarte", curso: "Gestão", anoDeEntrada: "2013", imagem: "fundadores/placeholder.webp", },
            {id: 13, nome: "Ricardo Aldeano", alcunha: "Kiwi", instrumento: "Estandarte", curso: " Linguas, Literaturas e Culturas", anoDeEntrada: "2013", imagem: "fundadores/placeholder.webp", },           
            {id: 14, nome: "Bruno Tasanis", alcunha: "Tarzanis", instrumento: "Viola Campaniça, Ferrinhos, Ovos, Dácia Duster", curso: "Psicologia", anoDeEntrada: "2014", imagem: "fundadores/placeholder.webp", },
            {id: 15, nome: "Carlos Duarte", alcunha: "Badalo, Chocalho", instrumento: "Percussão", curso: "Geografia", anoDeEntrada: "2014", imagem: "fundadores/placeholder.webp", },
            {id: 16, nome: "Carlos Valente", alcunha: "Kaka do Bacelo", instrumento: "Pandeireta", curso: "Engenharia Informática", anoDeEntrada: "2014", imagem: "fundadores/placeholder.webp", },
            {id: 17, nome: "Edi Lourenço", alcunha: "Pinscher", instrumento: "Bandolim", curso: "Gestão", anoDeEntrada: "2014", imagem: "fundadores/placeholder.webp", },
            {id: 18, nome: "Fábio Gomes", alcunha: "Cegonha, Short II", instrumento: "Guitarra, Acordeão", curso: "Biotecnologia", anoDeEntrada: "2014", imagem: "fundadores/placeholder.webp", },
            {id: 19, nome: "Helmer Maldini", alcunha: "Branca de Neve", instrumento: "Pandeireta", curso: "Gestão", anoDeEntrada: "2014", imagem: "fundadores/placeholder.webp", },
            {id: 20, nome: "José Rico", alcunha: "Fa's Mi, Lambrusco", instrumento: "Guitarra, Flauta", curso: "Ciência e Tecnologia Animal", anoDeEntrada: "2014", imagem: "fundadores/placeholder.webp", },
            {id: 21, nome: "Zé Serra", alcunha: "Cheira a Coimbra", instrumento: " Guitarra", curso: "Engenharia Informática", anoDeEntrada: "2014", imagem: "fundadores/placeholder.webp", },
            {id: 22, nome: "António Maia", alcunha: "Abelha Maia", instrumento: "Pandeireta", curso: "Gestão", anoDeEntrada: "2015", imagem: "fundadores/placeholder.webp", },
            {id: 23, nome: "Daniel Garcia", alcunha: "Mamute, Mãos de Vaca", instrumento: "Voz", curso: "Geologia", anoDeEntrada: "2015", imagem: "fundadores/placeholder.webp", },           
            {id: 24, nome: "Diogo Ganhão", alcunha: "Zé dos barcos, Vira carros", instrumento: "Pandeireta", curso: "Gestão", anoDeEntrada: "2015", imagem: "fundadores/placeholder.webp", },   
            {id: 25, nome: "Francisco Patanita", alcunha: "Sem sangue", instrumento: "Cavaquinho", curso: "Medicina Veterinária", anoDeEntrada: "2015", imagem: "fundadores/placeholder.webp", },
            {id: 26, nome: "Gabriel Charrua", alcunha: "Estudanteto", instrumento: "Guitarra", curso: "Engenharia Informática", anoDeEntrada: "2015", imagem: "fundadores/placeholder.webp", },
            {id: 27, nome: "João Pica", alcunha: "Gasóleo", instrumento: "Bandolim, Guitarra", curso: "Engenharia Informática", anoDeEntrada: "2015", imagem: "fundadores/placeholder.webp", },
            {id: 28, nome: "Pedro Fernandes", alcunha: "Hernandes", instrumento: "Guitarra", curso: "Bioquímica", anoDeEntrada: "2015", imagem: "fundadores/placeholder.webp", },
            {id: 29, nome: "Pedro Valente", alcunha: "Bibi", instrumento: "Bandolim", curso: "Gestão", anoDeEntrada: "2015", imagem: "fundadores/placeholder.webp", },
            {id: 30, nome: "Rodrigo Silva", alcunha: "TGV", instrumento: "Estandarte", curso: "Reabilitação Psicomotora", anoDeEntrada: "2015", imagem: "rodrigo.webp", },
            {id: 31, nome: "Vitor Hugo Peniche", alcunha: "Toru", instrumento: "Voz", curso: "Bioquímica", anoDeEntrada: "2015", imagem: "fundadores/placeholder.webp", },            
           
        ],
        formacaoAtual: [
            {id: 1, nome: "Bernardo Faria", alcunha: "Tia, Roll On", instrumento: "Voz", curso: "Ciência e Tecnologia Animal", anoDeEntrada: "2015", imagem: "fundadores/placeholder.webp", },
            {id: 2, nome: "Luís Mendes", alcunha: "Lunetes", instrumento: "Pandeireta", curso: "Medecina Veterinária", anoDeEntrada: "2015", imagem: "formacaoAtual/luisMendes.webp", },
            {id: 3, nome: "Rúben Lima", alcunha: "Staff, Staffue, Estaffa", instrumento: "Bombo", curso: "Gestão", anoDeEntrada: "2015", imagem: "formacaoAtual/rubenLima.webp", },
            {id: 4, nome: "Rúben Santos", alcunha: "Alpiarça", instrumento: "Pandeireta", curso: "Biologia", anoDeEntrada: "2015", imagem: "formacaoAtual/rubenSantos.webp", },
            {id: 5, nome: "Daniel Traguedo", alcunha: "Jesus, ArquiTeto", instrumento: "Guitarra", curso: "Arquitetura", anoDeEntrada: "2016", imagem: "fundadores/placeholder.webp", },
            {id: 6, nome: "Fábio Saruga", alcunha: "Stifler", instrumento: "Estandarte", curso: "Biotecnologia", anoDeEntrada: "2016", imagem: "formacaoAtual/fabioSaruga.webp", },
            {id: 7, nome: "Francisco Lopes", alcunha: "Charro", instrumento: "Baixo", curso: "Economia", anoDeEntrada: "2016", imagem: "formacaoAtual/franciscoLopes.webp", },
            {id: 8, nome: "Henrique Gil", alcunha: "Camões", instrumento: "Bombo", curso: "Ciências e Tecnologia Animal", anoDeEntrada: "2016", imagem: "formacaoAtual/henriqueGil.webp", },
            {id: 9, nome: "João Figueiredo", alcunha: "Tozinho, Alzheimer", instrumento: "Bandolim", curso: "Biologia", anoDeEntrada: "2016", imagem: "formacaoAtual/joaoFigueiredo.webp", },
            {id: 10, nome: "João Seixas", alcunha: "Wolverine", instrumento: "Guitarra", curso: "Economia", anoDeEntrada: "2016", imagem: "seixas.webp", },
            {id: 11, nome: "Joaquim Rosa", alcunha: "Bomba", instrumento: "Cavaquinho", curso: "Biotecnologia", anoDeEntrada: "2016", imagem: "formacaoAtual/joaquimRosa.webp", },
            {id: 12, nome: "Nuno Serôdio", alcunha: "Caçador", instrumento: "Guitarra", curso: "Línguas e Literatura", anoDeEntrada: "2016", imagem: "serodio.webp", },
            {id: 13, nome: "Rúben Duarte", alcunha: "Pizzi", instrumento: "Pandeireta / Cavaquinho", curso: "Bioquímica", anoDeEntrada: "2016", imagem: "formacaoAtual/rubenDuarte.webp", },
            {id: 14, nome: "Rui Patinhas", alcunha: "Herói", instrumento: "Cavaquinho", curso: "Engenharia Informática", anoDeEntrada: "2016", imagem: "formacaoAtual/ruiPatinhas.webp", },
            {id: 15, nome: "Fábio Santos", alcunha: "Pavão", instrumento: "Bombo", curso: "Ciências e Tecnologia Animal", anoDeEntrada: "2017", imagem: "formacaoAtual/fabioSantos.webp", },
            {id: 16, nome: "Márcio Filipe", alcunha: "Mosquito", instrumento: "Estandarte", curso: "Biotecnologia", anoDeEntrada: "2017", imagem: "formacaoAtual/marcioFilipe.webp", },
            {id: 17, nome: "Miguel Moleiro", alcunha: "Piglet, puta fina, rebolo", instrumento: "Bandolim, Guitarra", curso: "Ciências e Tecnologia Animal", anoDeEntrada: "2017", imagem: "formacaoAtual/miguelMoleiro.webp", },
            {id: 18, nome: "Miguel Santos", alcunha: "Vlachodimos", instrumento: "Acordeâo", curso: "Música", anoDeEntrada: "2017", imagem: "formacaoAtual/miguelSantos.webp", },
            {id: 19, nome: "Marcos Vinicius", alcunha: "Preto", instrumento: "Pandeireta", curso: "Relações Internacionais", anoDeEntrada: "2018", imagem: "formacaoAtual/marcosVinicius.webp", },
            {id: 20, nome: "Miguel Maria", alcunha: "El Bagaço", instrumento: "Estandarte", curso: "Bioquímica", anoDeEntrada: "2018", imagem: "formacaoAtual/miguelMaria.webp", },
            {id: 21, nome: "Tiago Costa", alcunha: "Papasmurf", instrumento: "Pandeireta", curso: "Engenharia Informática", anoDeEntrada: "2018", imagem: "formacaoAtual/tiagoCosta.webp", },
        ],
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
        window.pageYOffset >= 250 ? this.isAtTop = false : this.isAtTop = true;
    },
    handleResize () {
        this.mobileMode = window.innerWidth <= 1015;
    },
    showFundadores() {
        this.showingFundadores = true;
        this.showingVelha = false;
        this.showingAtual = false;
    },
    showVelha() {
        this.showingFundadores = false;
        this.showingVelha = true;
        this.showingAtual = false;
    },
    showAtual() {
        this.showingFundadores = false;
        this.showingVelha = false;
        this.showingAtual = true;
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
.members {
	margin: 0px;
	padding: 0px;
	display: flex;
	justify-content: center;
	align-items: center;
    background-color: #f7f7f7;

    .indice {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        min-width: 100%;
        font-size: 25px;

        li {
            margin: 50px 10px 10px 10px;
            padding: 30px 30px;
            border-radius: 10px;
            background-color: #f5f5f5;
            box-shadow: -7px -7px 20px 0px #fff9,
            -4px -4px 5px 0px #fff9,
            7px 7px 20px 0px #0002,
            4px 4px 5px 0px #0001,
            inset 0px 0px 0px 0px #fff9,
            inset 0px 0px 0px 0px #0001,
            inset 0px 0px 0px 0px #fff9,
            inset 0px 0px 0px 0px #0001;
            transition:box-shadow 0.6s cubic-bezier(.79,.21,.06,.81);

            &:hover {
                box-shadow: 0px 0px 0px 0px #fff9,
                0px 0px 0px 0px #fff9,
                0px 0px 0px 0px #0001,
                0px 0px 0px 0px #0001,
                inset -7px -7px 20px 0px #fff9,
                inset -4px -4px 5px 0px #fff9,
                inset 7px 7px 20px 0px #0003,
                inset 4px 4px 5px 0px #0001;
            }

            a {
                height: 75px;
                font-size: 25px;
                color: #555;
                display: inline-block;
                position: relative;
                padding: 10px;

                &:hover {
                    scale: 0.98;

                    &::before {
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

    .container {
        display: flex;

        div {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
    }
}

</style>