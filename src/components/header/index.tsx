import { useEffect } from 'react'
import Logo from '../../assets/svgs/Logo-Header.svg'

const Header = () => {

  useEffect( () => {
    const header = document.querySelector('#header') as HTMLHeadElement

    const headerToggle = () => header.classList.toggle('header--background', scrollY > 0 )

    window.addEventListener('scroll', headerToggle)
  })

  useEffect( () => {
    const links = document.querySelectorAll('.header__links') as NodeListOf<HTMLLIElement>

    links.forEach( ( link: HTMLLIElement ) => {
      link.addEventListener('mouseover', () => link.classList.toggle('animation') )
    })

  })

  return (
    <header id='header'>
      <div id='header__container'>
        <img id='header__logo' src={ Logo } alt="Logo" />
        <nav id='header__navbar'>
            <ul id='header__list'>
                <li className='header__links'><a href="#start">Inicio</a></li>
                <li className='header__links'><a href="#services">Serviços</a></li>
                <li className='header__links'><a href="#works">Jobs</a></li>
                <li className='header__links'><a href="#contact">Contato</a></li>
            </ul>
            <div id='header__menu'>
              <div className='header__menu-lines'></div>
              <div className='header__menu-lines'></div>
              <div className='header__menu-lines'></div>
            </div>
        </nav>
        <a id='header__button-link' href="#"><button id='header__button'>Iniciar</button></a>
      </div>
    </header>
  )
}

export default Header