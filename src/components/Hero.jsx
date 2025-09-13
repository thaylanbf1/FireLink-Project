import React from 'react'
import './Hero.css'
import {Wifi} from 'lucide-react'
const Hero = () => {

     const scroolToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if(element){
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

  return (
    <section className="hero">
            <div className="hero-info">
                
                    <h1 className='hero-title'>Internet de 
                        <span className='hero-text hero-gradient-text'> Alta Velocidade</span>
                    </h1>
                    <p className='hero-description'>Conecte-se ao mundo com nossa internet fibra optica. 
                        Velocidade, estabilidade e suporte 24h
                    </p>
                    <div className="hero-buttons">
                        <button onClick={() => scroolToSection('planos')} className="plans">
                            Ver Planos
                        </button>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-card">
                        <div className='hero-card-inner'>
                            <div className="hero-card-outer">
                                <Wifi size={28} color='white'/>
                                <h3>Fibra Optica</h3>
                                <p>Tecnologia de ponta para maxima velocidade</p>
                            </div>
                        </div>
                    </div>
                </div>
                
    </section>
  )
}

export default Hero
