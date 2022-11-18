import React, { useEffect } from 'react'

interface SlideI {
    elem: React.MutableRefObject<HTMLDivElement>,
    time: number
}

const Slide = ({ elem, time }: SlideI) => {

    useEffect( () => {

        setInterval( () => {
            elem.current.style.transform = 'translateX(-100%)'
        }, time)

        elem.current.ontransitionend = () => {
            elem.current.style.transition = 'none'
            elem.current.appendChild( elem.current.firstElementChild! )
            elem.current.style.transform = 'translateX(0)'
            
            setTimeout( () => elem.current.style.transition = 'all 1s' )
        }
    })

  return null
}

export default Slide