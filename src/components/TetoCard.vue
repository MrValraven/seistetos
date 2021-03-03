<template>
    <li class="card">
		<img class="avatar" :src="ImgPath" alt="">
		<p class="quote"> {{ quote }} </p>
		<p class="author"> {{ author }} </p>
	</li>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TetoCard',
  props: {
      ImgPath: String,
      quote: String,
      author: String,
  }
});
</script>

<style lang="scss" scoped>

.card {
    margin: 10px;

    p {
        justify-content: center;
	    margin: 25px;
    }

    .avatar {
        justify-content: center;
        max-width: 250px;
        max-height: 250px;
        border-radius: 50%;
    }

    .quote{
        width: 80%;
        font-size: 22px;
        font-weight: 300;
        line-height: 1.5;
        margin-bottom: 20px;
        padding: 0;
    }

    .author {
        margin-bottom: 0;
    }

}

@media (max-width: 400px) {
    .card {
      padding: 10px;  
    }
    
}

</style>