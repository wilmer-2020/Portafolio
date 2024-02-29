import htmlIcon from '../assets/html.svg'
import cssIcon from '../assets/css.svg'
import sassIcon from '../assets/sass.svg'
import javascriptIcon from '../assets/javascript.svg'
import reactIcon from '../assets/react.svg'
import nextIcon from '../assets/next-js.svg'
import gitIcon from '../assets/git.svg'
import firebase from '../assets/firebase.svg'

const Experiencia = () => {
  return (
    <>
    <h2 className='title-stack'>Stack de Habilidades</h2>
    <section className="experiencia-container" id="experiencia">
        <img src={htmlIcon} alt="" />
        <img src={cssIcon} alt="" />
        <img src={sassIcon} alt="" />
        <img src={javascriptIcon} alt="" />
        <img src={reactIcon} alt="" />
        <img src={nextIcon} alt="" />
        <img src={gitIcon} alt="" />
        <img src={firebase} alt="" />
    </section>
    </>
  )
}

export default Experiencia