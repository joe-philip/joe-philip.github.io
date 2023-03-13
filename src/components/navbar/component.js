import './style.css'

function Navbar() {
    return (
        <header id='header'>
            <nav id='navbar'>
                <ul id='navlist'>
                    <li className='nav-item'><a href='#' className='nav-link'>Joe Philip</a></li>
                    <li className='nav-item'><a href='#' className='nav-link'>Work Experience</a></li>
                    <li className='nav-item'><a href='#' className='nav-link'>Projects</a></li>
                    <li className='nav-item'><a href='#' className='nav-link'>Education</a></li>
                    <li className='nav-item'><a href='#' className='nav-link'>About me</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;