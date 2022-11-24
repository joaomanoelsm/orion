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
                        Na Orion você vai encontrar toda uma equipe de profissionais preparados para
                        alcançar suas metas!
                    </p>
                </div>
                <div className='forWhom__itens'>
                    <h3 className='forWhom__itens-title'>Empresas</h3>
                    <p className='forWhom__text'>
                        Grandes empresas necessitam de um time de valor, responsável e competente 
                        para cuidar de todo o tráfico de informações que compõe um grande negócio.                    
                    </p>
                </div>
                <div className='forWhom__itens'>
                    <h3 className='forWhom__itens-title'>Influencers</h3>
                    <p className='forWhom__text'>
                        Nós, da Orion Soluções Digitais, somos responsáveis pela organização
                         e projeção de diversos negócios de sucesso.                    
                    </p>
                </div>
            </div>
            <a href="#"><button className='forWhom__button'>Saiba mais</button></a>
        </div>
    </section>
  )
}

export default ForWhom