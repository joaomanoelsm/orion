import { useEffect, useRef, useState } from 'react'
import WorkBackground from '../../../assets/imgs/Background-Works.jpg'
import Slide from '../slide'

const Works = () => {
    const slideRef = useRef<HTMLDivElement>(null!)
    const [ cellPhoneOrientation, setCellPhoneOrientation ] = useState<boolean>(false)

    const worksArray = [
        {
            img: 'url',
            title: 'Cliente'
        },
        {
            img: 'url',
            title: 'Cliente'
        },
        {
            img: 'url',
            title: 'Cliente'
        },
        {
            img: 'url',
            title: 'Cliente'
        },
    ]

    useEffect( () => {
        if ( window.matchMedia("(max-width: 500px)").matches ) {
            return setCellPhoneOrientation( true )
        }
        setCellPhoneOrientation( false )
    }, [ window.matchMedia ])

  return (
    <section id='works' style={{ background: `url(${ WorkBackground })`}}>
        { cellPhoneOrientation ? <Slide elem={ slideRef } time={ 5000 } /> : null }
        <div id='works__container'>
            <h2 id='works__title'>Nossos trabalhos</h2>
            <p id='works__text'>Alguns trabalhos realizados para nossos clientes</p>
            <div id='works__itens-contain'>
                <div ref={ slideRef } id='works__slide'>
                    {
                        worksArray.map( ( work, index ) => (
                            <div key={ index } className='works__itens'>
                                <div id='works__img-contain'>
                                    <img id='works__img' src="" alt="Imagem dos projetos" />
                                </div>
                                <h3 id='works__itens-title'>{ work.title }</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Works