
import './App.css'
import { Header } from './components/Header.jsx'
import { MainTitle } from './components/Main/MainTitle.jsx'
import { MainDescription} from './components/Main/MainDescription.jsx'
import { MainUsage } from './components/Main/MainUsage.jsx'
import { MainIformation } from './components/Main/MainInformation.jsx'
import { Footer } from './components/Footer.jsx'

function App() {

  return (
    <>
      <header>
        <Header/>
      </header>

      <main className='container-fluid'>
        <MainTitle/>
        <MainDescription/>
        <MainUsage/>
        <MainIformation/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App