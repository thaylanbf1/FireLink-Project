import './Contacts.css'
import { contactData } from '../data/data'
import ContactsCard from './ContactsCard'

const Conatcts = () => {
  return (
    <section className='contacts'>
        <div className="contacts-container">
            <div className="section-contacts">
              <h2 className="contacts-title title-gradient-contacts">Entre em contato com nosso time</h2>
            </div>
          

            <div className="contacts-cards">
            {contactData.map((contact, index) => (
                <ContactsCard key={index}
                icon={contact.icon}
                title={contact.title}
                info={contact.info}
              />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Conatcts
