<template>

  <header class="header">
    <nav id="nav">
		<div class="logo">
            <router-link class="logoName" to="/">
                <img src="../assets/media/logo_seistetos.svg" alt="">
            </router-link>
        </div>
		<ul>
			<li><router-link class="navLinks" to="/">Home</router-link></li>
			<li><router-link class="navLinks" :to="{ name: 'Historia' }">Historia</router-link></li>
			<li><router-link class="navLinks" :to="{ name: 'Eventos' }">Eventos</router-link></li>
			<li><router-link class="navLinks" :to="{ name: 'Tetos' }">Tetos</router-link></li>
			<li><router-link class="navLinks" :to="{ name: 'Discografia' }">Discografia</router-link></li>
      <li><router-link class="navLinks" :to="{ name: 'Contactos' }">Contactos</router-link></li>
		</ul>
	</nav>
  </header>
    
  
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navbar',
});
</script>

<style lang="scss">

.header {
  position: absolute;
	z-index: 10;
	width: 100%;
	opacity: 0;
	color: #fff;
	padding: 35px 100px 0;
	animation: 1s fadeIn 0.5 forwards;

  @keyframes fadeIn {
    100% {
      opacity: 1;
    }
  }

  #nav {
    display: flex;
    justify-content: space-between;

    .logo {

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 20rem;
        height: 17rem;
        display: inline;
      }
    }

    ul {
      display: flex;
      justify-content: space-around;

      li {
        padding: 10px;
        font-size: 24px;

        a {
          font-weight: bold;
          color: #ffffff;

          &.router-link-exact-active {
            color: #42b983;
          }
        }  
      }
    }
  }
}
</style>