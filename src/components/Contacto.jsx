import Button from "../layouts/Button"
import InputForm from "../layouts/InputForm.jsx"

const Contacto = () => {
  return (
    <>
        <section className="contacto-container" id="contacto">
        <div className="contacto-text">
            <h2>CONTACTAME</h2>
            <p>¿Tienes alguna pregunta, comentario o consulta? 
            ¡Me encantaría escucharte! No dudes en ponerte en contacto conmigo
             utilizando el formulario de contacto a continuación. 
             Estoy aquí para ayudarte en lo que necesites y espero poder atenderte pronto.</p>
          </div>
            <form action="" className="form">
            <InputForm
              labelText={'Nombre'}
            />
            <InputForm
              labelText={'Telefono'}
            />
            <InputForm
              labelText={'Direccion'}
            />
            <label htmlFor="" className="consulta-title">Escriba su consulta</label>
            <textarea name="consulta" id="" cols="30" rows="10" className="consulta"></textarea>
            <Button 
              type={'submit'}
              text={'ENVIAR'}
              className={'buttonEnviar'}
            />
          </form>
        </section>
    </>
  )
}

export default Contacto