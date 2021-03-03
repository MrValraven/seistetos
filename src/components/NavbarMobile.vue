<template>
    <nav class="mobileNav">
        <transition-group 
        tag="ul"
        @before-enter="beforeEnter"
        @enter="enter"
        class="navLinks" 
        :class="isActive"
        >
            <li><router-link to="/">Home</router-link></li>
            <li><router-link :to="{ name: 'Historia' }">História</router-link></li>
            <li><router-link :to="{ name: 'Eventos' }">Eventos</router-link></li>
            <li><router-link :to="{ name: 'Tetos' }">Tetos</router-link></li>
            <li><router-link :to="{ name: 'Discografia' }">Discografia</router-link></li>
            <li><router-link :to="{ name: 'Contactos' }">Contactos</router-link></li>
        </transition-group>

        <div class="burger" @click="toggleClass()">
            <div v-if="!isActive" class="burgerText">MENU</div>
            <div class="drawing" :class="newClass">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </div>
       
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import gsap from 'gsap';
export default defineComponent({
    setup() {

        const beforeEnter = (element: any) => {
            element.style.opacity = 0;
            element.style.transform = 'translateX(100px)';
        }

        const enter = (element: any, done: any) => {
            gsap.to(element, {
                opacity: 1,
                x: 0,
                duration: 0.8,
                onComplete: done,
                delay: 0.2,
            })
        }

        return { beforeEnter, enter }

    },
    name: "MobileNav",
    data() {
        return {
            toggle: false,
            newClass: "",
            isActive: "",
        }
    },
    methods: {
        toggleClass() {
            this.toggle = !this.toggle;
            this.toggle ? this.newClass = "toggle" : this.newClass = "";
            this.toggle ? this.isActive = "isActive" : this.isActive = "";
        }
    }
});
</script>

<style lang="scss">

body {
		overflow-x: hidden;
	}

.mobileNav {
    position: absolute;
	z-index: 10;
	width: 100%;
	opacity: 1;
	color: #fff;
	padding: 35px 100px 0;

    .navLinks {
        position: absolute;
        right: 0px;
        height: 100vh;
        top: 0vh;
        background-color: #6d1112;
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        opacity: 0;
        width: 100%;
        transition: all 0.4s ease-in;

        li {
            opacity: 1;
            letter-spacing: 5px;
            font-size: 20px;
            text-transform: uppercase;
        }
	}
    
    .isActive {
        transform: translateX(0%);
        display: flex;
        opacity: 1;
    }

    .burger {
        display: flex;
        align-items: center;
        cursor: pointer;
        position: fixed;
        top: 20px;
        right: 20px;

        .burgerText {
            font-size: 20px;
            letter-spacing: 3px;
        }

        .drawing div{
            width: 35px;
            height: 3px;
            margin: 5px;
            background-color: white;
            transition: all 0.3s ease;
        }

         .toggle {

            .line1 {
                transform: rotate(-45deg) translate(-5px, 6px);
            }

            .line2 {
                opacity: 0;
            }

            .line3 {
                transform: rotate(45deg) translate(-5px, -6px);
            }
            
        }

    }
}


</style>