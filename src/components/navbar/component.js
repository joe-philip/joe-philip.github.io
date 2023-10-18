import { useState } from 'react';
import { setDarkTheme, setLightTheme } from '../../utils';
import './style.css';

const headerOpenAnimation = [{ height: '21px' }, { height: '108px' }];
const navLinkAnimation = [{ opacity: 0 }, { opacity: 0 }, { opacity: 1 }];
const fadeOutAnimation = [{ opacity: 0 }, { opacity: 1 }];
const headerCloseAnimation = [{ height: '108px' }, { height: '21px' }];
const animationTiming = { duration: 1000, iterations: 1 };

function Navbar(props) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [menuState, setMenuState] = useState('closed')
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth))
    function toggleColorTheme(colorTheme) {
        if (colorTheme === 1) {
            setDarkTheme()
            props.setColorTheme(0)
        }
        else {
            setLightTheme()
            props.setColorTheme(1)
        }
    }

    return (
        <header id='header'>
            <nav id='navbar'>
                <ul id='navlist'>
                    <li className='nav-item'>
                        <a href='/' className='nav-link'>{props.name} - {props.role}</a>
                        {
                            screenWidth <= 412 ?
                                menuState === 'closed' ?
                                    <a href='/' onClick={dropDownOpen} className='material-symbols-outlined' id='hamburger-menu-open'>menu</a> :
                                    <a href='/' onClick={dropDownClose} className='material-symbols-outlined' id='hamburger-menu-close'>close</a>
                                : ''
                        }
                    </li>
                    <li className='nav-item'><a href='#about-me' className='nav-link'>About me</a></li>
                    <li className='nav-item'>
                        <a href='#work-experience' className='nav-link'>Work Experience</a>
                    </li>
                    <li className='nav-item'><a href='#projects' className='nav-link'>Projects</a></li>
                    <li className='nav-item'><a href='#contact-me' className='nav-link'>Contact me</a></li>
                    {
                        props.setColorTheme && <li className='nav-item toggle-color-theme' title='Toggle light/dark theme'>
                            {
                                // eslint-disable-next-line
                                <a onClick={() => toggleColorTheme(props.colorTheme)} className='nav-link'>
                                <ion-icon name="contrast-outline"></ion-icon>
                            </a>
                            }
                        </li>
                    }
                </ul>
            </nav>
        </header>
    );
    function dropDownOpen(e) {
        e.preventDefault();
        var header = document.getElementById('header');
        setMenuState('opened')
        e.target.animate(fadeOutAnimation, animationTiming);
        animateNavLinks();
        header.animate(headerOpenAnimation, animationTiming);
        header.style.overflowY = 'initial';
        header.style.height = 'auto';
    }
    function dropDownClose(e) {
        e.preventDefault();
        var header = document.getElementById('header');
        e.target.animate(fadeOutAnimation, animationTiming);
        setMenuState('closed')
        header.animate(headerCloseAnimation, { ...animationTiming, duration: 500 });
        header.style.overflowY = 'hidden';
        header.style.height = '21px';
    }
}

function animateNavLinks() { // eslint-disable-next-line
    [...document.getElementsByClassName('nav-link')].slice(1).map(
        i => i.animate(navLinkAnimation, { ...animationTiming, duration: 2000 })
    );
}

export default Navbar;