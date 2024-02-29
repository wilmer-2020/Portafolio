import Button from "./Button"
import Me from '../assets/me.png'
import github from '../assets/github.svg'
import linkend from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'
import gmail from '../assets/gmail.svg'
import whatsapp from '../assets/whatsapp.svg'
const MainInfo = () => {
  return (
    <div className="main-info">
        <article className="main-photo">
            <img src={Me} alt="" />
        </article>

        <article className="main-data">
            <h2>Wilmer Castellanos</h2>
            <p>Frontend Developer</p>
            <div className="info-buttons">
                <Button
                    text={'Descargar CV'}
                    className={'button-CV'}
                    url={'https://drive.google.com/file/d/15z_18H3ZZcaOkv8dliBLPFUX1Kw3KQvu/view?usp=drive_link'}
                />
                
                <Button
                    text={'Contactarme'}
                    className={'button-contact'}
                    url={'https://wa.me/96027464?text=Hola contactame'}
                />

            </div>
            <div className="info-social">
            <a href="https://github.com/wilmer-2020/" target="_blank" rel="noreferrer"><img src={github} alt="" /></a>
            <a href="https://www.linkedin.com/in/wilmer-castellanos-6590b1286/" target="_blank" rel="noreferrer"><img src={linkend} alt="" /></a>
            <a href="https://www.instagram.com/wilmerc05/" target="_blank" rel="noreferrer"><img src={instagram} alt="" /></a>
            <a href="mailto:alfredomontes1970@gmail.com" target="_blank" rel="noreferrer"><img src={gmail} alt="" /></a>
            <a href="https://wa.me/96027464?text=Hola contactame" target="_blank" rel="noreferrer"><img src={whatsapp} alt="" /></a>
            </div>
        </article>

    </div>
  )
}

export default MainInfo