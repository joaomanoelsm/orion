import StartBackground from '../../../assets/imgs/Background-Home.jpg'
import StartImg from '../../../assets/imgs/Img-Home.png'
import ArrowIcon from '../../../assets/svgs/Icon-Arrow-Bottom.svg'

const Start = () => {
  return (
    <section id='start' style={{ background: `url(${ StartBackground })`, backgroundSize: 'cover'}}>
        <div id='start__container'>
            <div id='start__info'>
              <h1 id='start__title'>Geramos <br /> soluções que viram <br /> resultados!</h1>
              <p id='start__text'>
                Pensamos e calculamos a melhor forma de estruturar e crescer o seu négocio no meio digital, possuimos profissionais qualificados que entregam resultados.
              </p>
              <a href="#"><button id='start__button'>Contato</button></a>
            </div>
            <img id='start__img' src={ StartImg } alt="Img inicial" />
        </div>
        <img id='start__icon' src={ ArrowIcon } alt="Icone para baixo" />
    </section>
  )
}

export default Start