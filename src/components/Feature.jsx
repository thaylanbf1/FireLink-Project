import React from 'react'
import FeatureCard from './FeatureCard'
import './Feature.css'
import { featureData } from '../data/data'

const Feature = () => {
  return (
    <section className='feature'>
      <div className="feature-container">
        <div className="section-title">
            <h2 className="title-feature title-gradient-feature">Por que escolher a FireLink?</h2>
            <p className="subtitle">Oferecemos o melhor em conectividade e atendimentos</p>
        </div>

        <div className="feature-cards">
            {featureData.map((feature, index) => (
                <FeatureCard key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                />
            ))}
        </div>
      </div>
    </section>
  )
}

export default Feature
