<template>
    <li class="song"> {{ nomeMusica }}
        <a v-if="spotify" :href="spotify">
            <i class="fa fa-spotify"></i>
        </a>
        <a v-if="youtube" :href="youtube">
            <i class="fa fa-youtube-play"></i>
        </a>
    </li>
</template>


<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Song',
    props: {
        nomeMusica: String,
        spotify: String,
        youtube: String,
    }
});
</script>

<style lang="scss">

.song {
    font-size: 30px;
	padding: 20px;
	margin: 10px;

    a {
        padding: 10px;
	    font-size: 40px;
	    color: black;

        border-radius: 50%;
        margin: 0px 8px;
        box-shadow: -7px -7px 20px 0px #fff9,
        -4px -4px 5px 0px #fff9,
        7px 7px 20px 0px #0002,
        4px 4px 5px 0px #0001,
        inset 0px 0px 0px 0px #fff9,
        inset 0px 0px 0px 0px #0001,
        inset 0px 0px 0px 0px #fff9,
        inset 0px 0px 0px 0px #0001;
	    transition: background-color  0.2s ease-in;

        &:hover {
            background-color: #333;
	        box-shadow: inset -2px -2px 3px rgba(0,0,0,0.2) , inset 2px 2px 3px rgba(0,0,0,0.2);

            .fa-spotify {
                color: #1DB954;
            }

            .fa-youtube-play {
                color: #FF0000;
            }
        }
    }
}

</style>