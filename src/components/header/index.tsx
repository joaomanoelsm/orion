import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/svgs/Logo-Header.svg'

const Header = () => {

  useEffect( () => {
    const header = document.querySelector('#header') as HTMLHeadElement

    console.log( window.location.pathname )

    const url = window.location.pathname 

    if ( url !== '/orion/' ) header.style.background = 'red';
  }, [ useNavigate ])

  useEffect( () => {
    const header = document.querySelector('#header') as HTMLHeadElement

    const headerToggle = () => header.classList.toggle('header--background', scrollY > 0 )

    window.addEventListener('scroll', headerToggle)
  })

  useEffect( () => {
    const menu = document.querySelector('.header__menu') as HTMLDivElement
    const list = document.querySelector('.header__list') as HTMLUListElement
    const links = document.querySelectorAll('.header__links') as NodeListOf<HTMLLIElement>

    const toggleMenu = () => {
      list.classList.toggle('header__list--appearance')
      menu.classList.toggle('header__menu--animation')
    }

    menu.onclick = () => toggleMenu()

    links.forEach( ( link: HTMLLIElement ) => link.onclick = () => toggleMenu() )
  })

  return (
    <header id='header'>
      <div id='header__container'>
        <img id='header__logo' src={ Logo } alt="Logo" />
        <nav id='header__navbar'>
            <ul className='header__list'>
                <li datatype='Inicio' className='header__links'><a href="#start">Inicio</a></li>
                <li datatype='Serviços' className='header__links'><a href="#services">Serviços</a></li>
                <li datatype='Jobs' className='header__links'><a href="#works">Jobs</a></li>
                <li datatype='Contato' className='header__links'><a href="#contact">Contato</a></li>
            </ul>
            <div className='header__menu'>
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