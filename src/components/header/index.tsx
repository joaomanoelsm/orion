import Logo from '../../assets/svgs/Logo-Header.svg'

const Header = () => {
  return (
    <header id='header'>
      <div id='header__container'>
        <img id='header__logo' src={ Logo } alt="Logo" />
        <nav id='header__navbar'>
            <ul id='header__list'>
                <li className='header__links'><a href="#">Inicio</a></li>
                <li className='header__links'><a href="#">Serviços</a></li>
                <li className='header__links'><a href="#">Jobs</a></li>
                <li className='header__links'><a href="#">Contato</a></li>
            </ul>
            <div id='header__menu'>
              <div className='header__menu-lines'></div>
              <div className='header__menu-lines'></div>
              <div className='header__menu-lines'></div>
            </div>
        </nav>
        <a href=""><button id='header__button'>Iniciar</button></a>
      </div>
    </header>
  )
}

export default Header