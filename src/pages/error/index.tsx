import { useNavigate } from 'react-router-dom'
import ErrorLogo from '../../assets/svgs/Logo-Footer.svg'
import Lottie from 'lottie-react'
import ErrorAnimation from '../../assets/animations/errorAnimation.json'

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
            <Lottie id='error__img' animationData={ ErrorAnimation }></Lottie>
            <button onClick={ backPage } id="error__button">Voltar ao inicio</button>
        </div>
    </section>
  )
}

export default Error