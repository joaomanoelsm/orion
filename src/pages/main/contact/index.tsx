import Lottie from 'lottie-react';
import ComputerAnimation from '../../../assets/animations/computerAnimation.json';

const Contact = () => {
    return (
        <section id="contact">
            <div id="contact__container">
                <Lottie animationData={ComputerAnimation} id="contact__img" />
                <div id="contact__info">
                    <h2 id="contact__title">Conecte-se com a Orion</h2>
                    <p id="contact__text">
                        Comece agora mesmo a levar o seu empreedimento a um novo
                        nível
                    </p>
                    <a
                        target={'_blank'}
                        href="https://linker.fit/iIaLDbyxYhzHhcg"
                    >
                        <button id="contact__button">Iniciar</button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
