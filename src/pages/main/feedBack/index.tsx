import React, { useRef } from 'react'
import FeedBackBackground from '../../../assets/imgs/Background-Feedback.jpg'
import StarsIcon from '../../../assets/svgs/Icon-Stars.svg'
import Slide from './slide'

const FeedBack = () => {
    const slideRef = useRef<HTMLDivElement>(null!)

    interface FeedBackArrayI {
        id: number,
        name: string,
        summary: string,
        job: string,
        profileImg: string
    }

    const feedBackArray: Array<FeedBackArrayI> = [
        {
            id: 1,
            name: 'Deoae',
            summary: 'Adorei a Orion, Melhor empresa do mundo!',
            job: 'Designer',
            profileImg: 'url'
        },
        {
            id: 2,
            name: 'Vinicius',
            summary: 'Tudo no precinho!!!',
            job: 'Designer',
            profileImg: 'url'
        },
        {
            id: 3,
            name: 'Felipe',
            summary: 'Empresa rápida e eficaz',
            job: 'Ceo',
            profileImg: 'url'
        },
        {
            id: 4,
            name: 'Cleber',
            summary: 'Bastante dedicada com o consumidor',
            job: 'Administrador',
            profileImg: 'url'
        },
        {
            id: 5,
            name: 'Larrisa',
            summary: 'Extremamente rápido na entrega.',
            job: 'Influencer',
            profileImg: 'url'
        },
    ]

  return (
    <section id='feedBack' style={{ background: `url(${ FeedBackBackground })`}}>
        <Slide elem={ slideRef } time={ 5000 } />
        <div id='feedBack__container'>
            <h2 id='feedBack__title'>FeedBack</h2>
            <p id='feedBack__text'>Clientes que fazem parte da Orion</p>
            <div id='feedBack__itens-contain'>
                <div ref={ slideRef } id='feedBack__slide'>
                    {
                        feedBackArray.map( user => (
                            <div key={ user.id } className='feedBack__itens'>
                                <div className='feedBack__img-contain'>
                                    <img src="" alt="Imagem de perfil" />
                                </div>
                                <div className='feedBack__info'>
                                    <p className='feedBack__summary'>{ user.summary }</p>
                                    <img className='feedBack__icon' src={ StarsIcon } alt="Avaliação" />
                                    <p className='feedBack__name'>{ user.name }</p>
                                    <p className='feedBack__job'>{ user.job }</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeedBack