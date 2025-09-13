
import {Flame} from 'lucide-react'
import {Link} from 'react-router-dom'
import './Header.css'
import { useEffect, useState } from 'react';

const Header = () => {
    const [activeSection, setActiveSection] = useState('inicio')

    const scrollToSection = (sectionId) => {

        const element = document.getElementById(sectionId)
        if(element){
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['inicio', 'sobre', 'planos', 'contato'];
            const scrollPosition = window.scrollY + 150; // Offset para o header fixo

            let currentSection = 'inicio';

            sections.forEach((sectionId) => {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementTop = rect.top + window.scrollY;
                    
                    if (scrollPosition >= elementTop) {
                        currentSection = sectionId;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        
        window.addEventListener('scroll', handleScroll);
        handleScroll();

      return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
        <header>
            <div className="haeader">
                <div className="nav-header">
                     
                    <button onClick={() => scrollToSection('inicio')}
                    className='title' >
                        <Flame size={25} color='red' />
                        FireLink
                    </button>

                    <nav className="nav-bar">
                        <button onClick={() => scrollToSection('inicio')} className={`nav-link ${activeSection === 'inicio' ? 'active': ''}`}>Inicio</button>
                         <button onClick={() => scrollToSection('sobre')} className={`nav-link ${activeSection === 'sobre' ? 'active': ''}`}>Sobre</button>
                        <button onClick={() => scrollToSection('planos')} className={`nav-link ${activeSection === 'planos' ? 'active': ''}`}>Planos</button>
                        <button onClick={() => scrollToSection('contato')} className={`nav-link ${activeSection === 'contato' ? 'active': ''}`}>Contato</button>
                    </nav>

                    <div className="client">
                        <button className="client-area">
                            Area do cliente
                        </button>
                    </div>
                </div>
            </div>
        </header>
      
    
  )
}

export default Header
