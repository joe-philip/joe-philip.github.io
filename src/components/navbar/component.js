import { useState } from 'react';
import './style.css'

const headerOpenAnimation = [{ height: '21px' }, { height: '137px' }];
const navLinkAnimation = [{ opacity: 0 }, { opacity: 0 }, { opacity: 1 }];
const fadeOutAnimation = [{ opacity: 0 }, { opacity: 1 }];
const headerCloseAnimation = [{ height: '137px' }, { height: '21px' }];
const animationTiming = { duration: 1000, iterations: 1 };

function Navbar() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [menuState, setMenuState] = useState('closed')
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth))

    return (
        <header id='header'>
            <nav id='navbar'>
                <ul id='navlist'>
                    <li className='nav-item'>
                        <a href='/' className='nav-link'>Joe Philip</a>
                        {
                            screenWidth <= 412 ?
                                menuState === 'closed' ?
                                    <a href='/' onClick={dropDownOpen} className='material-symbols-outlined' id='hamburger-menu-open'>menu</a> :
                                    <a href='/' onClick={dropDownClose} className='material-symbols-outlined' id='hamburger-menu-close'>close</a>
                                : ''
                        }
                    </li>
                    <li className='nav-item'>
                        <a href='#work-experience' className='nav-link'>Work Experience</a>
                    </li>
                    <li className='nav-item'><a href='#projects' className='nav-link'>Projects</a></li>
                    <li className='nav-item'><a href='/' className='nav-link'>Education</a></li>
                    <li className='nav-item'><a href='/' className='nav-link'>About me</a></li>
                </ul>
            </nav>
        </header>
    );
    function dropDownOpen(e) {
        e.preventDefault();
        setMenuState('opened')
        var firstElement = true;
        e.target.animate(fadeOutAnimation, animationTiming); // eslint-disable-next-line
        [...document.getElementsByClassName('nav-link')].map(i => {
            if (!firstElement) {
                i.animate(navLinkAnimation, { ...animationTiming, duration: 2000 });
            }
            firstElement = false;
        });
        var header = document.getElementById('header');
        header.animate(headerOpenAnimation, animationTiming);
        header.style.overflowY = 'initial';
        header.style.height = 'auto';
    }
    function dropDownClose(e) {
        e.preventDefault();
        e.target.animate(fadeOutAnimation, animationTiming);
        setMenuState('closed')
        var header = document.getElementById('header');
        header.animate(headerCloseAnimation, { ...animationTiming, duration: 500 });
        header.style.overflowY = 'hidden';
        header.style.height = '21px';
    }
}


export default Navbar;