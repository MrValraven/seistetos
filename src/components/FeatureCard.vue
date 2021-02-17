<template>
    <li class="card">
		<i :class="icon"></i>
		<h1 class="quote"> {{ title }} </h1>
		<p class="author"> {{ description }} </p>
	</li>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FeatureCard',
  props: {
      icon: String,
      title: String,
      description: String,
  }
});
</script>

<style lang="scss">

$tetosPrimary: #6d1112;

.card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
	padding: 20px;
	text-align: center;
	margin: 10px;
    box-shadow: -4px -4px 15px rgba(255,255,255,1) , 4px 4px 15px rgba(0,0,0,0.1);

    i {
        font-size: 50px;
        color: $tetosPrimary;
        margin-bottom: 25px;
    }

    h1 {
        color: #555;
        font-size: 20px;
        margin-bottom: 25px;
    }

    p {
        margin: 0;
    }

}

</style>