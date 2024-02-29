import AboutImg from '../assets/aboutMe.jpeg';
import ExperienceIcon from '../assets/experience.svg'
import GraduationIcon from '../assets/graduation.svg';
const AboutMe = () => {
  return (
   <>
        <h2 className='title-about'>Acerca de Mi</h2>
     <section className="aboutme" id='aboutme'>
        <article className="aboutme-img">
            <img src={AboutImg} alt="" />
        </article>

            <div className="aboutme-item">
                <div className="item">
                    <img src={ExperienceIcon} alt="" className='item-icon'/>
                    <p>Experiencia</p>
                    <p>2 años aprendiendo sobre front-end</p>
                </div>
                <div className="item">
                <img src={GraduationIcon} alt="" className='item-icon'/>
                    <p>Educacion</p>
                    <p>BTP en Informatica</p>
                </div>
            </div>
            <div className="about-text">
                <p>¡Hola! Soy, un apasionado programador front-end con un viaje de aprendizaje continuo que comenzó en 2019. Desde entonces, me he sumergido en el apasionante mundo del desarrollo web y he adquirido una sólida comprensión de las tecnologías y herramientas clave para construir experiencias web increíbles.</p><br />
               <p>Durante mi viaje, he explorado diversos lenguajes de programación como HTML, CSS y JavaScript, y me he sumergido en el ecosistema de bibliotecas y frameworks como React.js. He disfrutado cada desafío y cada línea de código escrita, encontrando inspiración en la resolución de problemas y la creación de soluciones elegantes.</p>
            </div>
    </section>
   </>
  )
}

export default AboutMe