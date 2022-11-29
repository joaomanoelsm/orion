import ServicesBackground from '../../../assets/imgs/Background-Services.jpg';
import OrionIcon from '../../../assets/svgs/Icon-Orion.svg';

const Services = () => {
    return (
        <section
            id="services"
            style={{ background: `url(${ServicesBackground})` }}
        >
            <div className="services__container">
                <div className="services__info">
                    <img
                        className="services__icon"
                        src={OrionIcon}
                        alt="ìcone da orion"
                    />
                    <h2 className="services__title">O que solucionamos?</h2>
                    <p className="services__text">
                        Principais áreas que atuamos e desenvolvemos para nossos
                        clientes.
                    </p>
                </div>
                <div className="services__topics">
                    <div
                        datatype="Lançamentos"
                        className="services__topics-itens"
                    >
                        Lançamentos
                    </div>
                    <div
                        datatype="Tráfego Pago"
                        className="services__topics-itens"
                    >
                        Tráfego Pago
                    </div>
                    <div
                        datatype="Audio Visual"
                        className="services__topics-itens"
                    >
                        Audio Visual
                    </div>
                    <div
                        datatype="Identidade Visual"
                        className="services__topics-itens"
                    >
                        Identidade Visual
                    </div>
                    <div datatype="Websites" className="services__topics-itens">
                        Websites
                    </div>
                    <div
                        datatype="Social Media"
                        className="services__topics-itens"
                    >
                        Social Media
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
