import { useEffect, useState } from "react"
import { AvaliationsData } from "../data/data"
import { Star } from "lucide-react";
import './Testemunhas.css';

const Testemunhas = () => {

    const [curremtTime, setCurrentTime] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime((prev) => (prev + 1) % AvaliationsData.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const avaliations = AvaliationsData[curremtTime];

  return (
    <section className="section-avaliation">
        <div className="sec-container">
            <div className="sec-title">
                <h2 className="title-avaliation-sec title-gradient-depoiments">O que nossos clientes dizem</h2>
                <p>Satisfação comprovada no Pará</p>
            </div>

            <div className="ava-container">
                <div className="ava-cards">
                    {[...Array(avaliations.rating)].map((_, i) =>(
                        <Star key={i} size={25} className="icon-star" />
                    ))}
                </div>
                <p className="testimonial-avaliation">
                    "{avaliations.text}"
                </p>
                <div className="info-avaliations">
                    <h4 className="name-testemunial">{avaliations.name}</h4>
                    <p className="local">{avaliations.location}</p>
                </div>

                <div className="testimonials-buttons">
                    {AvaliationsData.map((_, index) =>(
                        <button key={index}
                        className={`testimonial-button ${index === curremtTime ? 'testimonial-button-active' : ""}`} onClick={() => setCurrentTime(index)} />
                    ))}
                </div>

            </div>
        </div>


      
    </section>
  )
}

export default Testemunhas
