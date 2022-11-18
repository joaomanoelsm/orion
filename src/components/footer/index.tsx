import FooterLogo from '../../assets/svgs/Logo-Footer.svg'
import InstragramIcon from '../../assets/svgs/Icon-Instagram.svg'
import TwitterIcon from '../../assets/svgs/Icon-Twitter.svg'
import TiktokIcon from '../../assets/svgs/Icon-Tiktok.svg'
import FacebookIcon from '../../assets/svgs/Icon-Facebook.svg'

const Footer = () => {
  return (
    <footer id='footer'>
        <div id='footer__container'>
            <div id='footer__info'>
                <img id='footer__logo' src={ FooterLogo } alt="Logo do rodapé" />
                <div id='footer__lists-container'>
                    <div id='footer__list-about'>
                        <h3 className='footer__list-title'>Sobre</h3>
                        <hr />
                        <ul className='footer__lists'>
                            <li><a href="#start">Inicio</a></li>
                            <li><a href="#services">Serviços</a></li>
                            <li><a href="#procedure">Planejamento</a></li>
                            <li><a href="#works">Trabalhos</a></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>
                    </div>
                    <div id='footer__list-politics'>
                        <h3 className='footer__list-title'>Política</h3>
                        <hr />
                        <ul className='footer__lists'>
                            <li>Termos de uso</li>
                            <li>Política de privacidade</li>
                            <li>Política de Cookies</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr id='footer__line' />
            <div id='footer__copyright-container'>
                <span id='footer__copyright'>Copyright Orion - Todos os direitos reservados</span>
                <div id='footer__icons-container'>
                    <img className='footer__icons' src={ InstragramIcon } alt="Ícone do instagram" />
                    <img className='footer__icons' src={ TwitterIcon } alt="Ícone do twitter" />
                    <img className='footer__icons' src={ TiktokIcon } alt="Ícone do tiktok" />
                    <img className='footer__icons' src={ FacebookIcon } alt="Ícone do facebook" />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer