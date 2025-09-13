import './App.css'
import Conatcts from './components/Conatcts'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Plans from './components/Plans'
import Testemunhas from './components/Testemunhas'


function App() {
 

  return (
    <div className='App'>
      <div className="container">
        <Header />
        <section id='inicio'>
          <Hero />
        </section>
        
        <section id="sobre">
          <Feature />
        </section>
        
        <section id="planos">
          <Plans />
        </section>
       
       <section id="depoimentos">
        <Testemunhas />
       </section>
        
        <section id='contato'>
          <Conatcts />
        </section>
  
        <Footer />
        
      </div>
    </div>
  )
}

export default App
