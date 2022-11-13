import ServicesBackground from '../../../assets/imgs/Background-Services.jpg'
import OrionIcon from '../../../assets/svgs/Icon-Orion.svg'

const Services = () => {
  return (
    <section id='services' style={{ background: `url(${ ServicesBackground })`}}>
        <div id='services__container'>
            <div id='services__info'>
                <img id='services__icon' src={ OrionIcon } alt="ìcone da orion" />
                <h2 id='services__title'>O que solucionamos?</h2>
                <p id='services__text'>Principais áreas que atuamos e desenvolvemos para nossos clientes.</p>
            </div>
            <div id='services__topics'>
                <div className='services__topics-itens'>Lançamentos</div>
                <div className='services__topics-itens'>Tráfego Pago</div>
                <div className='services__topics-itens'>Audio Visual</div>
                <div className='services__topics-itens'>Identidade Visual</div>
                <div className='services__topics-itens'>Websites</div>
                <div className='services__topics-itens'>Social Media</div>
            </div>
        </div>
    </section>
  )
}

export default Services