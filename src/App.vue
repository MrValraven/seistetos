<template>

    <router-view/>

 
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  cursor: pointer;
  opacity: 0.75;

  &:hover {
    opacity: 1;
  }
}

nav, ul {
  list-style-type: none;
}

</style>
