<template>
  <main>
    <img src="@/assets/logo.png" alt="Logo Vue.js">

    <!-- Obtem os clicks dos botoes de evento custonizados. -->
    <div id="button-container">
      <button @click="handleLogin">
        Entrar
      </button>
      <button @click="handleAccountCreate">
        Criar conta
      </button>
    </div>

    <p>Vue (pronuncia-se /vjuː/, como view, em inglês) é um framework progressivo para a construção de interfaces de usuário. Ao contrário de outros frameworks monolíticos, Vue foi projetado desde sua concepção para ser adotável incrementalmente. A biblioteca principal é focada exclusivamente na camada visual (view layer), sendo fácil adotar e integrar com outras bibliotecas ou projetos existentes. Por outro lado, Vue também é perfeitamente capaz de dar poder a sofisticadas Single-Page Applications quando usado em conjunto com ferramentas modernas e bibliotecas de apoio.

    Se você gostaria de saber mais sobre Vue antes de mergulhar nele, nós criamos um vídeo passeando pelos princípios básicos com um exemplo de projeto.

    Se você é um desenvolvedor frontend experiente e quer saber como Vue se compara a outras bibliotecas/frameworks, confira a Comparação com Outros Frameworks.</p>

    <p>
      Local texto: <a href="https://vuejsbr-docs-next.netlify.app/guide/introduction.html">Documentação Vue.js</a>
    </p>
  </main>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import useModal from '../hooks/useModal'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },

  setup () {
    const modal = useModal()

    function handleLogin () {
      modal.open({ component: 'ModalLogin' })
    }

    function handleAccountCreate () {
      modal.open({ component: 'ModalCreateAccount' })
    }

    return {
      handleLogin,
      handleAccountCreate
    }
  }
}
</script>

<style scoped lang="sass">
  main
    display: flex
    flex-wrap: wrap

  img
    width: 100px
    height: 100px
    margin-left: 20px

  #button-container
    display: flex
    align-items: center
    justify-content: center
    flex-wrap: wrap
    width: calc(100% - 120px)

  button
    border: 2px solid black
    background-color: white
    color: black
    padding: 14px 28px
    margin: 10px
    font-size: 16px
    cursor: pointer
    border-color: #04AA6D
    color: green
    transition: 0.2s
    width: 200px
    height: 50px

    &:hover
      background-color: #04AA6D
      color: white

  p
    font-size: 18pt
    text-align: justify
    margin: 20px

  a 
    text-decoration: none
    color: #04AA6D

</style>
