import { useEffect } from 'react'
import WhiteBackground from '../../../assets/imgs/Background-ForWhon.jpg'

const ForWhom = () => {

  return (
    <section id='forWhom' style={{ background: `url(${ WhiteBackground })`}}>
        <div className='forWhom__container'>
            <h2 className='forWhom__title'>Para quem é <br /> a <span>Orion?</span></h2>
            <div className='forWhom__itens-contain'>
                <div className='forWhom__itens'>
                    <h3 className='forWhom__itens-title'>Empreendedores</h3>
                    <p className='forWhom__text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias qui, dignissimos earum corporis fugiat saepe, vero
                    </p>
                </div>
                <div className='forWhom__itens'>
                    <h3 className='forWhom__itens-title'>Empresas</h3>
                    <p className='forWhom__text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias qui, dignissimos earum corporis fugiat saepe, vero
                    </p>
                </div>
                <div className='forWhom__itens'>
                    <h3 className='forWhom__itens-title'>Influencers</h3>
                    <p className='forWhom__text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias qui, dignissimos earum corporis fugiat saepe, vero
                    </p>
                </div>
            </div>
            <a href="#"><button className='forWhom__button'>Saiba mais</button></a>
        </div>
    </section>
  )
}

export default ForWhom