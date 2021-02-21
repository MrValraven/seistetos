<template>
    <div class="epoca">
        <h1 class="titulo"> {{ nomeCD }}</h1>
        <ul class="musicas">
            <Song v-for="musica in musicas" :key="musica.id" :nomeMusica="musica.nome" :spotify="musica.spotify" :youtube="musica.youtube"/>
        </ul>
        <img :src="imgPath" alt="">
    </div>
  
</template>


<script lang="ts">

import { defineComponent } from 'vue';
import Song from '../components/Song.vue'

export default defineComponent({
    name: 'SongCard',
    components: {
        Song,
    },
    props: {
        nomeCD: String,
        musicas: {
            type: Array,
            required: true,
        },
        imgPath: String,
    }
});
</script>

<style scoped>


.musicas {
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: justify;
}


</style>