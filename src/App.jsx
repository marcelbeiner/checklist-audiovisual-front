import { Page } from "./App.style"
import Tabela from "./components/Tabela"
import Formulario from './components/Formulario';
import api from './api'

function App() {

  return (
  <Page className='container'>
    <h1>CHECKLIST <span>SEGURO</span> </h1>
    <Tabela/>
  </Page>
  )
}

export default App
