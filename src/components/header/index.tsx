import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/svgs/Logo.svg';

const Header = () => {
    const navigate = useNavigate();

    const backPage = () => {
        navigate('/orion/');
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        const header = document.querySelector('#header') as HTMLHeadElement;

        const changeHeaderBackground = () => {
            const url = window.location.pathname;

            if (url === '/orion/') {
                return header.classList.toggle(
                    'header--background',
                    scrollY > 0
                );
            }
            header.classList.add('header--background');
        };

        window.addEventListener('scroll', changeHeaderBackground);
    });

    useEffect(() => {
        const menu = document.querySelector('.header__menu') as HTMLDivElement;
        const list = document.querySelector(
            '.header__list'
        ) as HTMLUListElement;
        const links = document.querySelectorAll(
            '.header__links'
        ) as NodeListOf<HTMLLIElement>;

        const changeNavigation = () => {
            list.classList.toggle('header__list--appearance');
            menu.classList.toggle('header__menu--animation');
        };

        menu.onclick = () => changeNavigation();

        links.forEach((link: HTMLLIElement) => {
            link.onclick = () => changeNavigation();
        });
    });

    useEffect(() => {
        const logo = document.querySelector(
            '.header__logo'
        ) as HTMLImageElement;
        const button = document.querySelector(
            '.header__button-link'
        ) as HTMLButtonElement;
        const links = document.querySelectorAll(
            '.header__links'
        ) as NodeListOf<HTMLLIElement>;

        const poppingAnimation = () => {
            logo.setAttribute('id', 'header--animation');

            setTimeout(() => {
                links.forEach((link: HTMLLIElement, index: number) => {
                    setTimeout(() => {
                        link.setAttribute('id', 'header--animation');
                    }, index * 100);
                });
            }, 500);

            setTimeout(() => {
                button.setAttribute('id', 'header--animation');
            }, 1000);
        };

        poppingAnimation();
    });

    return (
        <header id="header">
            <div className="header__container">
                <img
                    onClick={backPage}
                    className="header__logo"
                    src={Logo}
                    alt="Logo"
                />
                <nav className="header__navbar">
                    <ul className="header__list">
                        <li datatype="Inicio" className="header__links">
                            <a href="#start">Inicio</a>
                        </li>
                        <li datatype="Serviços" className="header__links">
                            <a href="#services">Serviços</a>
                        </li>
                        <li datatype="Jobs" className="header__links">
                            <a href="#works">Jobs</a>
                        </li>
                        <li datatype="Contato" className="header__links">
                            <a href="#contact">Contato</a>
                        </li>
                    </ul>
                    <div className="header__menu">
                        <div className="header__menu-lines"></div>
                        <div className="header__menu-lines"></div>
                        <div className="header__menu-lines"></div>
                    </div>
                </nav>
                <a
                    target={'_blank'}
                    className="header__button-link"
                    href="https://linker.fit/iIaLDbyxYhzHhcg"
                >
                    <button className="header__button">Iniciar</button>
                </a>
            </div>
        </header>
    );
};

export default Header;
