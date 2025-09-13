import { plansData } from "../data/data"
import PlansCards from "./PlansCards"
import './Plans.css'

const Plans = () => {
  return (
    <section id="plans" className="plans-container">
        <div className="plans-section">
         
                <div className="plans-title">
                    <h2 className="title-plans  title-gradient-plans">Escolha seu Plano</h2>
                    <p className="subtitle-plans">Planos pensados para sua necessidade</p>
                </div>
           

            <div className="plans-cards">
                {plansData.map((plan, index) => (
                    <PlansCards key={index} plan={plan} />
                ))}
            </div>
        </div>
      
    </section>
  )
}

export default Plans
