import { useState,useEffect } from "react";

const Nav = () => {
  const ColorLinks1 = 'white'; 
  const ColorLinks2 = '#13678a'
  const ShadowNav = '10px 9px 11px -14px rgba(0, 0, 0, 0.75)'

  const [colorNav, setColorNav] = useState('');
  const [colorText, setColorText] = useState('');
  const [shadowNav, setShadow] = useState('');

  const changeColor = () => {
    if (window.scrollY >= 15) {
    setColorNav('rgb(17, 17, 17)')
      setColorText(ColorLinks1)
      setShadow(ShadowNav)
    }else{
      setColorNav('transparent')
      setColorText(ColorLinks2)
      setShadow('none')
    }
  }

  useEffect(() => {
    changeColor()
   
}, [])

window.addEventListener("scroll",changeColor)

  return (
    <nav style={{
      backgroundColor:colorNav,
      boxShadow:shadowNav
    }}>
        <h1>Wilmer Castellanos</h1>
        <ul>
            <li><a href="#aboutme" style={{
              color:colorText
            }}>About</a></li>

            <li><a href="#experiencia" style={{
              color:colorText
            }}>Experiencia</a></li>

            <li><a href="#proyectos" style={{
              color:colorText
            }}>Proyectos</a></li>

            <li><a href="#contacto" style={{
              color:colorText
            }}>Contactame</a></li>

        </ul>
    </nav>
  )
}

export default Nav  