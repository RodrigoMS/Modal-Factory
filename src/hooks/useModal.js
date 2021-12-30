// Import o arquivo bus.
// bus e uma biblioteca externa que possui os metodos
// open, close, listen e off.
import bus from '../utils/bus'

const EVENT_NAME = 'modal:toggle'

export default function useModal () {
  // Abre o evento recebendo o payload do modal.
  function open (payload = {}) {
    // Recebe o nome do evento o status que é true e o resto do payload.
    bus.emit(EVENT_NAME, { status: true, ...payload })
  }

  // Fecha o evento recebendo o payload do modal.
  function close (payload = {}) {
    // Recebe o evento, e um objeto com com o status obrigatório e o
    // resto do playload.
    bus.emit(EVENT_NAME, { status: false, ...payload })
  }

  // O modal factory a utiliza para escutar os eventos.
  // O modal factory não esta usando eventos diretamente mas sim serviços.
  // recebe uma função a qual ele tem que ficar escutando.
  function listen (fn) {
    bus.on(EVENT_NAME, fn)
  }

  // Mesmo sendo um serviço o modal continua utilizado eventos.
  // Recebe uma função a qual ele tem que parar de escutar.
  function off (fn) {
    bus.off(EVENT_NAME, fn)
  }

  // Retorna as funções padrões da API.
  return { open, close, listen, off }
}
