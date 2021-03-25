<template>
    <ul class="box">
        <a :href="link">
            <li class="icon">
                <i :class="icon" aria-hidden="true"></i>
            </li>
            <li class="cardtext">
                {{ text }}
            </li>
        </a>
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
    border-radius: 12px;
	width: 100%;
	margin: 0px 20px;
    transition: all 0.4s cubic-bezier(.79,.21,.06,.81);

    &:hover {
        cursor: pointer;
        box-shadow: -7px -7px 20px 0px #fff9,
        -4px -4px 5px 0px #fff9,
        7px 7px 20px 0px #0002,
        4px 4px 5px 0px #0001,
        inset 0px 0px 0px 0px #fff9,
        inset 0px 0px 0px 0px #0001,
        inset 0px 0px 0px 0px #fff9,
        inset 0px 0px 0px 0px #0001;

        a >.icon {
            transform: scale(1.1);
            background-color: #6d1112;
            color: #ffffff;
        }
    }

    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        opacity: 1;
    }

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
        transition: all 0.4s cubic-bezier(.79,.21,.06,.81);
        z-index: 2;
    }

    .cardtext {
        color: black;
        font-size: 18px;
    }
}

@media (max-width: 700px) {
    .cardtext {
        font-size: 16px;
    }
}

@media (max-width: 1000px) {
    .box {
        margin: 40px 0 40px 0;
        box-shadow: -7px -7px 20px 0px #fff9,
        -4px -4px 5px 0px #fff9,
        7px 7px 20px 0px #0002,
        4px 4px 5px 0px #0001,
        inset 0px 0px 0px 0px #fff9,
        inset 0px 0px 0px 0px #0001,
        inset 0px 0px 0px 0px #fff9,
        inset 0px 0px 0px 0px #0001;

        a >.icon {
            background-color: #6d1112;
            color: #ffffff;
        }
    }
}



</style>>
