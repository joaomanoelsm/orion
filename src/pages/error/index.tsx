import { useNavigate } from 'react-router-dom'
import ErrorLogo from '../../assets/svgs/Logo-Footer.svg'
import ErrorImg from '../../assets/imgs/Img-Error.png'

const Error = () => {

  const navigate = useNavigate()

  const backPage = () => {
    navigate('/orion/')
    window.scrollTo(0, 0)
  }

  return (
    <section id="error">
        <div id='error__container'>
            <img id="error__logo" src={ ErrorLogo } alt="logo" />
            <img id="error__img" src={ ErrorImg } alt="Error" />
            <button onClick={ backPage } id="error__button">Voltar ao inicio</button>
        </div>
    </section>
  )
}

export default Error