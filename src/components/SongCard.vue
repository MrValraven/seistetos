<template>
    <div>
        <h1> {{ nomeCD }}</h1>
        <ul>
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

<style>

</style>