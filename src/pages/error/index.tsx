import ErrorLogo from '../../assets/svgs/Logo-Footer.svg'

const Error = () => {
  return (
    <section id="error">
        <div id='error__container'>
            <img id="error__logo" src={ ErrorLogo } alt="logo" />
            <h1 id="error__title">404</h1>
            <button id="error__button">Voltar ao inicio</button>
        </div>
    </section>
  )
}

export default Error