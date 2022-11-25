import StartBackground from '../../../assets/imgs/Background-Home.jpg'
import StartImg from '../../../assets/imgs/Img-Home.png'
import ArrowIcon from '../../../assets/imgs/Icon-Arrow-Down.png'

const Start = () => {

  return (
    <section className='start' style={{ background: `url(${ StartBackground })`, backgroundSize: 'cover'}}>
        <div className='start__container'>
            <div className='start__info'>
              <h1 className='start__title'>Geramos <br /> soluções que viram <br /> resultados!</h1>
              <p className='start__text'>
                Pensamos e calculamos a melhor forma de estruturar e crescer o seu négocio no meio digital, possuimos profissionais qualificados que entregam resultados.
              </p>
              <a href="#"><button className='start__button'>Contato</button></a>
            </div>
            <img className='start__img' src={ StartImg } alt="Img inicial" />
        </div>
        <img className='start__icon' src={ ArrowIcon } alt="Icone para baixo" />
    </section>
  )
}

export default Start