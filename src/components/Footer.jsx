import './Footer.css'
import {Flame, Linkedin, Github} from 'lucide-react'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-container">
        <Flame size={38} color='red'/>
         <h2 className="logo">FireLink</h2>
        <p className='description'>Conectando pessoas e atraves da tecnologia</p>
        <div className="copyright">
        <p className='copy'>&copy; 2025 Thaylan Fonseca. Todos os direitos reservados.</p> 
        <div className='copy-links'>
        <a href="https://www.linkedin.com/in/thaylanbf1" target='_blank'> <Linkedin className='linkd'/> </a>
        <a href="https://github.com/thaylanbf1" target='_blank'> <Github className='git'/> </a>
        </div>
      </div>

      </div>
      
    </footer>
  )
}

export default Footer
