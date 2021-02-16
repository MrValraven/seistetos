<template>
  <a class="apeita"> {{ callToAction }}</a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ApeitaBtn',
    props: {
    callToAction: String,
    }    

});
</script>

<style lang="scss">

.apeita {
    font-weight: 600;
    padding: 20px 46px;
	display: inline-block;
	position: relative;
	border-radius: 20px;
	scale: 1.2;
	background-color: #6d1112;
	text-decoration: none;
	text-transform: uppercase;
	transition: 0.5s;
	overflow: hidden;

    &:hover {
        background-color: #6d1112;
        box-shadow: 0px 6px #580e0f;
        top: 2px;
    }

    &:active {
        box-shadow: 0px 4px #580e0f;
        top: 4px;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent,#fff, transparent);
        transition: 0.5s;
    }

    &:hover::before {
        left: 100%;
    }
}

</style>