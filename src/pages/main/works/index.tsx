import { useEffect, useRef, useState } from 'react';
import WorkBackground from '../../../assets/imgs/Background-Works.jpg';
import Slide from '../slide';
import WorkImg1 from '../../../assets/imgs/Img-Works-1.jpg';
import WorkImg2 from '../../../assets/imgs/Img-Works-2.jpg';
import WorkImg3 from '../../../assets/imgs/Img-Works-3.jpg';
import WorkImg4 from '../../../assets/imgs/Img-Works-4.jpg';

const Works = () => {
    const slideRef = useRef<HTMLDivElement>(null!);
    const [cellPhoneOrientation, setCellPhoneOrientation] =
        useState<boolean>(false);

    const worksArray = [
        {
            img: WorkImg1,
            title: 'Jasa',
        },
        {
            img: WorkImg2,
            title: 'Vd. campos',
        },
        {
            img: WorkImg3,
            title: 'Cetta',
        },
        {
            img: WorkImg4,
            title: 'CDT Tia Aila',
        },
    ];

    useEffect(() => {
        if (window.matchMedia('(max-width: 500px)').matches) {
            return setCellPhoneOrientation(true);
        }
        setCellPhoneOrientation(false);
    }, [window.matchMedia]);

    return (
        <section id="works" style={{ background: `url(${WorkBackground})` }}>
            {cellPhoneOrientation ? (
                <Slide elem={slideRef} time={5000} />
            ) : null}
            <div id="works__container">
                <h2 id="works__title">Nossos trabalhos</h2>
                <p id="works__text">
                    Alguns trabalhos realizados para nossos clientes
                </p>
                <div id="works__itens-contain">
                    <div ref={slideRef} id="works__slide">
                        {worksArray.map((work, index) => (
                            <div key={index + 1} className="works__itens">
                                <div id="works__img-contain">
                                    <img
                                        id="works__img"
                                        src={work.img}
                                        alt="Imagem dos projetos"
                                    />
                                </div>
                                <h3 id="works__itens-title">{work.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Works;
