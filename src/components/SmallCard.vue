<template>
    <ul class="box">
        <li class="icon">
            <a :href="link">
                <i :class="icon" aria-hidden="true"></i>
            </a>
        </li>
        <li class="cardtext">
            {{ text }}
        </li>
    </ul>
  
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: "SmallCard",
    props: {
        link: String,
        icon: String,
        text: String,
    }
});
</script>>

<style lang="scss" scoped>

.box {
	position: relative;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin: 0px 20px;

    .icon {
        width: 60px;
        height: 60px;
        margin-bottom: 20px;
        color: #000000;
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 22px;
        box-shadow: -2px -2px 3px rgba(255,255,255,0.05) , 2px 2px 3px rgba(0,0,0,0.2);
        transition: all 0.6s cubic-bezier(.79,.21,.06,.81);
        z-index: 2;

        &:hover {
            background-color: #6d1112;
	        scale: 1.1;
        }

        a {
            color: black;

            &:hover {
                color: #ffffff;
	            scale: 1.5; 
            }
        }
    }

    .cardtext {
        font-size: 24px;
    }
}

@media (max-width: 700px) {
    .cardtext {
        font-size: 20px;
    }
}



</style>>
