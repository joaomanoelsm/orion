import ProcedureBackground from '../../../assets/imgs/Background-Planning.jpg';
import ArrowIcon from '../../../assets/imgs/Icon-Arrow-Down.png';

import Icon1 from '../../../assets/svgs/Icon-1.svg';
import Icon2 from '../../../assets/svgs/Icon-2.svg';
import Icon3 from '../../../assets/svgs/Icon-3.svg';
import Icon4 from '../../../assets/svgs/Icon-4.svg';
import Icon5 from '../../../assets/svgs/Icon-5.svg';
import Icon6 from '../../../assets/svgs/Icon-6.svg';

const Procedure = () => {
    return (
        <section
            id="procedure"
            style={{ background: `url(${ProcedureBackground})` }}
        >
            <div id="procedure__container">
                <h2 id="procedure__title">Nosso procedimento</h2>
                <div id="procedure__list-container">
                    <ul className="procedure__lists">
                        <li>
                            <img src={Icon1} alt="Ícone" />
                            Reunião para <br /> alinhamento
                        </li>
                        <li>
                            <img src={Icon2} alt="Ícone" />
                            Desenvolvimento <br /> da metodologia <br /> e
                            estratégia de <br /> campanha
                        </li>
                        <li>
                            <img src={Icon3} alt="Ícone" />
                            Reunião para <br /> apresentação da <br />{' '}
                            estrátegia esco- <br /> lhida
                        </li>
                    </ul>
                    <div id="procedure__decorator">
                        <div id="procedure__border">
                            <ul id="procedure__topics">
                                <li>Alinhamento</li>
                                <li>Gestão</li>
                                <li>Estratégia</li>
                                <li>Resultados</li>
                            </ul>
                            <div className="procedure__circles"></div>
                            <div className="procedure__circles"></div>
                            <div className="procedure__circles"></div>
                        </div>
                    </div>
                    <ul className="procedure__lists">
                        <li>
                            <img src={Icon4} alt="Ícone" />
                            <span>
                                Gerenciamento <br /> do projeto
                            </span>
                        </li>
                        <li>
                            <img src={Icon5} alt="Ícone" />
                            Programação do <br /> material e ads <br /> nas
                            plataformas
                        </li>
                        <li>
                            <img src={Icon6} alt="Ícone" />
                            Reunião final <br /> para baixas de <br />{' '}
                            resultados
                        </li>
                    </ul>
                </div>
            </div>
            <img id="procedure__icon" src={ArrowIcon} alt="Icone para baixo" />
        </section>
    );
};

export default Procedure;
