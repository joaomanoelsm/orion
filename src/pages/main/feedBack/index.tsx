import { useRef } from 'react';
import FeedBackBackground from '../../../assets/imgs/Background-Feedback.jpg';
import StarsIcon from '../../../assets/svgs/Icon-Stars.svg';
import Slide from '../slide';

import Profile1 from '../../../assets/imgs/Profile-1.jpg';
import Profile2 from '../../../assets/imgs/Profile-2.jpg';
import Profile3 from '../../../assets/imgs/Profile-3.jpg';
import Profile4 from '../../../assets/imgs/Profile-4.jpg';

const FeedBack = () => {
    const slideRef = useRef<HTMLDivElement>(null!);

    interface FeedBackArrayI {
        id: number;
        name: string;
        summary: string;
        job: string;
        profileImg: string;
    }

    const feedBackArray: Array<FeedBackArrayI> = [
        {
            id: 1,
            name: 'Alex ',
            summary: 'Ótima qualidade de todos os matériais',
            job: 'Treinador',
            profileImg: Profile1,
        },
        {
            id: 2,
            name: 'Aila',
            summary: 'Serviço de extrema qualidade, adoramos!',
            job: 'Professora',
            profileImg: Profile2,
        },
        {
            id: 3,
            name: 'Anderson ',
            summary: 'Extrema velocidade, serviço ótimo!',
            job: 'Contador',
            profileImg: Profile3,
        },
        {
            id: 4,
            name: 'David ',
            summary: 'Extremo profissionalismo e pontualidade com os serviços',
            job: 'Vidraceiro',
            profileImg: Profile4,
        },
    ];

    return (
        <section
            id="feedBack"
            style={{ background: `url(${FeedBackBackground})` }}
        >
            <Slide elem={slideRef} time={5000} />
            <div id="feedBack__container">
                <h2 id="feedBack__title">FeedBack</h2>
                <p id="feedBack__text">Clientes que fazem parte da Orion</p>
                <div id="feedBack__itens-contain">
                    <div ref={slideRef} id="feedBack__slide">
                        {feedBackArray.map((user) => (
                            <div key={user.id} className="feedBack__itens">
                                <div className="feedBack__img-contain">
                                    <img
                                        className="feedBack__img"
                                        src={user.profileImg}
                                        alt="Imagem de perfil"
                                    />
                                </div>
                                <div className="feedBack__info">
                                    <p className="feedBack__summary">
                                        {user.summary}
                                    </p>
                                    <img
                                        className="feedBack__icon"
                                        src={StarsIcon}
                                        alt="Avaliação"
                                    />
                                    <p className="feedBack__name">
                                        {user.name}
                                    </p>
                                    <p className="feedBack__job">{user.job}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeedBack;
