<template>
    <footer>
		<ul>
			<li><a class="icon" id="instagram" href="https://www.instagram.com/seistetos/"><i class="fa fa-instagram"></i></a></li>
			<li><a class="icon" id="facebook" href="https://www.facebook.com/grupoacademicoseistetos"><i class="fa fa-facebook-square"></i></a></li>
			<li><a class="icon" id="youtube" href="https://www.youtube.com/channel/UCB2mmWReEYkChqlMk0GjvNA"><i class="fa fa-youtube-play"></i></a></li>
			<li><a class="icon" id="spotify" href="https://open.spotify.com/artist/6UytzMPJfPy7zHhPXTDMvr?si=ZE2jZQWPQiShPtvbs0WjOg"><i  class="fa fa-spotify"></i></a></li>
		</ul>
		<p class="moto">A chumbar a Maria desde 1992</p>
		<p>Developed with 🍷 by <a href="https://www.linkedin.com/in/tiago-costa-b141121b1/" target="_blank" rel="noopener">Tiago "Papasmurf" Costa</a>.</p>
	</footer>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
});
</script>

<style lang="scss">

footer {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	color: #fff;
	background-color: #414a4f;
	padding: 60px 0;


    ul{
        display: flex;
        margin-bottom: 25px;
        font-size: 32px;

        li{
            height: 35px;
            width: 50px;
            background-color: #333;
            margin: 0 8px;
            border-radius: 15px;
            box-shadow: -2px -2px 3px rgba(255,255,255,0.05) , 2px 2px 3px rgba(0,0,0,0.2);

            &:hover {
                scale: 1.2;
                
                & #instagram {
                    color:  #c13584;
                }

                & #facebook {
                    color: #3b5998;
                }

                & #youtube {
                    color: #FF0000;
                }

                & #spotify {
                    color:  #1DB954;
                }
            }

            &:first-child{
                margin-left: 0;	
            }

            &:last-child{
                margin-right: 0;	
            }
        }
    }

    p{
        text-transform: uppercase;
        font-size: 14px;
        color: rgba(255,255,255,0.6);
        color: #f5f5f5d2;
        margin-bottom: 10px;

        a{
            border-bottom: 1px solid white;
        }

    }

    .moto {
            font-size: 16px;
        }
}

@media (max-width: 700px){

	footer {
		padding: 80px 15px;
	}
}

</style>
