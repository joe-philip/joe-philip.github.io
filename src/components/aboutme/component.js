import './style.css'
import image from './image.jpg'
import Heading from '../heading/component';

function AboutMeComponent() {
    return (
        <section id='about-me'>
            <Heading text="About me" />
            <div className='about-me-card-container'>
                <div className='about-me-card'>
                    <div className='about-me-section-1'>
                        <div className='about-me-img-container'>
                            <img src={image} alt='img' className='about-me-img' />
                        </div>
                        <div className='about-me-info'>
                            <span className='key'>Name:</span><span className='val'>Joe Philip</span>
                            <span className='key'>Role:</span><span className='val'>Python Developer</span>
                            <span className='key'>Email:</span><span className='val'>joe.philip@hotmail.co.in</span>
                            <span className='key'>Phone:</span><span className='val'>+91 9633 689 769</span>
                        </div>
                        <div className='skills'>
                            <h3 className='skills-title'>Skills</h3>
                            <ul className='skills-list'>
                                <li>Python</li>
                                <li>Django</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>ReactJS</li>
                                <li>GIT</li>
                                <li>MySQL</li>
                                <li>PostgreSQL</li>
                            </ul>
                        </div>
                        <div className='socials'>
                            <h3 className='socials-title'>Socials</h3>
                            <ul className='socials-list'>
                                <li>
                                    <a href='https://www.instagram.com/riderbones/' target='_blank' rel='noreferrer'>
                                        <ion-icon name='logo-instagram'></ion-icon>
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.facebook.com/unpredictableupshifts/' target='_blank' rel='noreferrer'>
                                        <ion-icon name='logo-facebook'></ion-icon>
                                    </a>
                                </li>
                                <li>
                                    <a href='https://github.com/joe-philip' target='_blank' rel='noreferrer'>
                                        <ion-icon name='logo-github'></ion-icon>
                                    </a>
                                </li>
                                <li>
                                    <a href='https://gitlab.com/joe-philip' target='_blank' rel='noreferrer'>
                                        <ion-icon name='logo-gitlab'></ion-icon>
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.linkedin.com/in/joe-philip/' target='_blank' rel='noreferrer'>
                                        <ion-icon name='logo-linkedin'></ion-icon>
                                    </a>
                                </li>
                                <li>
                                    <a href='https://twitter.com/joephilip95' target='_blank' rel='noreferrer'>
                                        <ion-icon name='logo-twitter'></ion-icon>
                                    </a>
                                </li>
                                <li>
                                    <a href='https://wa.me/919633689769' target='_blank' rel='noreferrer'>
                                        <ion-icon name="logo-whatsapp"></ion-icon>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='about-me-section-2'>
                        <h3>About me</h3>
                        <p className='about-me-intro'>
                            Hi, I'm Joe Philip and I'm a <b>Python developer</b> with more than 2 years of experience. I'm passionate about writing clean, efficient, and maintainable code that solves real-world problems.
                            My journey as a developer started when I was 20 years old and was fascinated by how technology can solve complex problems. I learned programming on my own and started working on small projects of my own, which eventually led me to pursue a career as a developer.
                            Over the years, I've worked on a wide range of projects built using Python's most popular web framework <b>Django</b>. I'm comfortable with back-end development and have experience working with databases like MySQL and PostgreSQL.
                            One of my favorite things about Python is its simplicity and readability. I strive to write code that is easy to understand, maintain, and scale.
                            In my free time, I love to contribute to open-source projects and stay up-to-date with the latest developments in the Python community.
                            If you're looking for a Python developer who is passionate about writing clean, efficient, and maintainable code, then I'd love to work with you. Feel free to get in touch with me to discuss your project requirements.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMeComponent;