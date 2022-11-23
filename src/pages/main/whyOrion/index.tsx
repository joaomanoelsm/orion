import WhiteBackground from '../../../assets/imgs/Background-White.jpg'
import ArrowIcon from '../../../assets/svgs/Icon-Arrow.svg'

const WhyOrion = () => {

  return (
    <section id="whyOrion" style={{ background: `url(${ WhiteBackground })`}}>
        <div className="whyOrion__container">
            <div className="whyOrion__title-contain">
                <img className="whyOrion__icon" src={ ArrowIcon } alt="Decorador" />
                <h2 className="whyOrion__title">Por que seu <br /> negócio precisa da <br /> <span>Orion?</span></h2>
            </div>
            <div className="whyOrion__info">
                <p className="whyOrion__text">
                    "Seu sucesso pede nossa qualidade"!, Essa frase mais que define todos os porquês que devem esta em sua mente neste momento, carregamos o termo soluções em nosso nome, então podemos definir que todos seus problemas no digital acabam de ter um fim, pois está dianta da Orion, agência que foi criada com intuito de facilitar todos os processos que levam a ter sucesso no digital!
                </p>
                <br />
                <p className="whyOrion__text">
                Seja bem vindo a um novo nível, a partir de agora está prestes a conhecer as nossos principais soluções, mas para isso preciso te alertar, a Orion está fadada ao sucesso e estamos dispostos a caminhar ao lado apenas daqueles que compreendem total capacidade de nossa agência.
                </p>
                <a href="#"><button className="whyOrion__button">Saiba mais</button></a>
                <div className='whyOrion__decorator'>
                    <div className='whyOrion__circle'></div>
                    <div className='whyOrion__circle'></div>
                    <div className='whyOrion__circle'></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyOrion