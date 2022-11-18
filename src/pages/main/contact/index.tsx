import ContactImg from '../../../assets/imgs/Img-Contact.png'

const Contact = () => {
  return (
    <section id='contact'>
        <div id='contact__container'>
            <img id='contact__img' src={ ContactImg } alt="Imagem do contato" />
            <div id='contact__info'>
                <h2 id='contact__title'>Conecte-se com a Orion</h2>
                <p id='contact__text'>Comece agora mesmo a levar o seu empreedimento a um novo nível</p>
                <button id='contact__button'>Iniciar</button>
            </div>
        </div>
    </section>
  )
}

export default Contact