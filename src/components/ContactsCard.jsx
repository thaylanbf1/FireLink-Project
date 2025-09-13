import './Contacts.css'

const ContactsCard = ({icon: Icon, title, info}) => {
  return (
    
      <div className='contact-card'>
        <div className="midle-card">
            <Icon size={45} color="white" />
        </div>
        <h3 className="title title-gradient-contacts">{title}</h3>
        <p className="info">{info}</p>
    </div>
  
  )
}

export default ContactsCard
