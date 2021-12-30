<template>
  <ModalFactory/>
  <Home/>
</template>
<script>

import ModalFactory from './components/ModalFactory'
import Home from './views/Home'

export default {
  components: { 
    ModalFactory,
    Home
  }
}
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
  box-sizing: border-box


#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

</style>
