import Button from "../layouts/Button"
import portalBrisas from '../assets/brisas.jpeg'
import Ferre from '../assets/ferre.jpg'

const Proyectos = () => {
  return (
    <>
        <h2 className="title-proyectos">Proyectos</h2>
        <section className="proyectos-container" id="proyectos">

            <div className="proyecto-card">
                <img src={portalBrisas} alt="" />
                <p>Landing-Page Portal Brisas del Campo</p>
                <div className="proyecto-buttons">
                    <Button
                        type={'button'}
                        text={'Codigo'}
                        className={'button'}
                        url={'https://github.com/wilmer-2020/landing-react'}
                    />
                    <Button
                        type={'button'}
                        text={'Ver Proyecto'}
                        className={'button'}
                        url={'https://portal-brisas-del-campo.netlify.app/'}
                    />
                </div>
            </div>

            <div className="proyecto-card">
                <img src={Ferre} alt="" />
                <p>Aplicacion Web para Pedidos a Ferreterias</p>
                <div className="proyecto-buttons">
                    <Button
                        type={'button'}
                        text={'Codigo'}
                        className={'button'}
                        url={'https://github.com/wilmer-2020/ProyectoFerre'}
                    />
                    <Button
                        type={'button'}
                        text={'Ver Proyecto'}
                        className={'button'}
                        url={'https://pedidos-ferre.netlify.app/'}
                    />
                </div>
            </div>


        </section>
    </>
  )
}

export default Proyectos