import {Check} from 'lucide-react'
import './Plans.css'

const PlansCards = ({plan}) => {
  return (
    <div className='plans-container'>
      <div className='color-card'>
        <div className={`plan-card ${plan.popular ? 'plan-card-popular' : ''}`}>
          {plan.popular && (
            <div className="plan-pop-badge">Mais Popular</div>
          )}
        </div>
      
        <div className="plans-section">
          <h3 className="plan-title">{plan.name}</h3>
          <div className="plans-description">
              <span className="speed">{plan.speed}</span>
              <span className="mega">Mega</span>
          </div>
          <div className="plans-price">
              <span className="price">{plan.price}</span>
              <span className="mes">/mês</span>
          </div>
          <ul className="plan-space">
              {plan.features.map((feature, index) => (
                  <li key={index} className='li-itens'>
                      <Check size={20} className="icon" />
                      <span>{feature}</span>
                  </li>
              ))}
          </ul>
          <button className={`plan-button ${plan.popular ? 'plan-button-popular' : 'plan-button-regular'}`}>Assinar Agora</button>
        </div>
    </div>
  </div>
  )
}

export default PlansCards
