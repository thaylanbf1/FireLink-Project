import React from 'react'
import './Feature.css'



const FeatureCard = ({icon: Icon, title, description}) => {
  return (
    <div className='card-top'>
      <div className="card-midle">
        <Icon size={45} color="white" />
      </div>
      <h3 className="title title-gradient-feature">{title}</h3>
      <p className="description">{description}</p>
    </div>
  )
}

export default FeatureCard
