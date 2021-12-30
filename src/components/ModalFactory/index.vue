<!-- Recebe uma propriendade que o torna um componente,
     que pode ser a tela de login ou cadastro. Ou qualquer
     outro componente que quiser                           -->

<template>
  <!-- Transportar o elemento para a tag body. -->
  <teleport to="body">

    <!-- v-if - Verifica se o modal esta ativo. -->
    <!-- @click - Fecha o modal. -->
    <div id="back"
      v-if="state.isActive"
      @click="handleModalToogle({ status: false })"
    >

      <!-- @click.stop - Para o evento click -->
      <div id="overlay" @click.stop> 

          <!-- Adiciona o componente apartir da propriedade ":is"-->
          <!-- v-bind - Passar como propriedade valores. -->
          <div id="container">
            <component :is="state.component" v-bind="state.props"/>
          </div>
      </div>

    </div>
  </teleport>
</template>

<script>
import { reactive, onMounted, onBeforeUnmount, defineAsyncComponent } from 'vue'
import useModal from '../../hooks/useModal'

// Registra o modal login para ser utilizado.
const ModalLogin = defineAsyncComponent(() => import('../ModalLogin'))
const ModalCreateAccount = defineAsyncComponent(() => import('../ModalCreateAccount'))

// Define a largura do componente.
const DEFAULT_WIDTH = '600px'

export default {
  components: {
    ModalLogin,
    ModalCreateAccount
  },
  setup () {
    const modal = useModal()
    const state = reactive({
      // Verifica se o modal esta ativo ou nao.
      isActive: false,

      component: {},
      props: {},
      width: DEFAULT_WIDTH
    })

    // Quando o componente for montado.
    onMounted(() => {
      // O modal factory a utiliza para escutar os eventos.
      modal.listen(handleModalToogle)
    })

    // Antes de desmontar o componente.
    onBeforeUnmount(() => {
      // Para de excutar o evento.
      modal.off(handleModalToogle)
    })

    function handleModalToogle (payload) {
      // Se estiver montando os dados vao para o payload.
      if (payload.status) {
        console.log(payload)
        state.component = payload.component
        state.props = payload.props

        // Utilizar largura vinda pelo payload ou
        // usar a largura padrao.
        state.width = payload.width ?? DEFAULT_WIDTH
      } else {
        // Remove os dados do status.
        // Fazendo um reset para que um modal nao seja
        // montado sobre o antigo.
        state.component = {}
        state.props = {}
        state.width = DEFAULT_WIDTH
      }

      state.isActive = payload.status
    }

    return {
      state,
      handleModalToogle
    }
  }
}
</script>

<style lang="sass" scoped>
  #back 
    position: fixed
    top: 0
    left: 0
    z-index: 50
    display: flex
    justify-content: center
    align-items: center
    width: 100vw
    height: 100vh
    background: rgba(0, 0, 0, 0.5)
    animation-name: fadeIn
    animation-duration: 0.4s

  #overlay 
    overflow: hidden
    animation-name: zoomIn
    animation-duration: 0.4s

  #container 
    padding: 12px 10px
    background: white

  @keyframes fadeIn 
    from 
      opacity: 0
    to 
      opacity: 1

  @keyframes zoomIn 
    from 
      transform: scale(0)
    to 
      transform: scale(1)

</style>
