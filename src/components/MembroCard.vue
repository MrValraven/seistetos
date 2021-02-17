<template>
    <div class="memberCard">
        <div class="imageBox">
            <img :src='imgPath'>
        </div>
        <div class="content">
            <h1> {{nome }}</h1>
            <h2>Alcunha: 
                <span> {{ alcunha }} </span>
            </h2>
            <h2>Instrumento: 
                <span> {{ instrumento }}</span>
            </h2>
            <h2>Curso: 
                <span> {{ curso }} </span>
            </h2>
            <h2>Ano de Entrada: 
                <span> {{ ano }}</span>
            </h2>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MembroCard',
  props: {
      imgPath: String,
      nome: String,
      alcunha: String,
      instrumento: String,
      curso: String,
      ano: String,
  }
});
</script>

<style lang="scss">

.memberCard {
	position: relative;
	max-width: 300px;
	height: 360px;
	margin: 30px 10px;
	padding: 2rem 1rem;
    display: flex;
    align-items: flex-end;
	flex-direction: column;
	box-shadow: 0 5px 20px rgba(0,0,0,0.5);
	transition: 0.5s ease-in-out;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, #6d111379, #490b0c);
        z-index: 2;
        transition: 0.5S ease-in-out;
        opacity: 0;
    }

    &:hover {
        transform: translateY(20px);

        &::before {
            opacity: 1;
        }

        .content {
            opacity: 1;
            transform: translateY(0px);
        }
    }

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        top: 0;
        left: 0;
    }

    .content {
        position: relative;
        z-index: 3;
        color: #ffffff;
        opacity: 0;
        transform: translateY(30px);
        transition: 0.5s all;

        h1 {
            margin: 0;
            padding-bottom: 20px;
            text-shadow: 1px 1px black;
        }

        h2 {
            letter-spacing: 1px;
            font-size: 20px;
            margin-top: 10px;
            margin-bottom: 20px;
            font-weight: bold;
            text-shadow: 1px 1px black;

            span {
                font-weight: 100;
                color: #f5f5f5ec;
            }
        }
    }
}

</style>