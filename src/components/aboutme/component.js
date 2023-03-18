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
                            </ul>
                        </div>
                    </div>
                    <div className='about-me-section-2'>
                        <h3>About me</h3>
                        <p className='about-me-intro'>
                            Hello, I'm Joe Philip, a skilled software developer with a passion for creating innovative solutions to complex problems. With 2+ years of experience in <b>Python</b>. I am specialized in <b>web development</b> and have successfully completed fair amount projects as part of working with a team. As a highly motivated and detail-oriented developer, I thrive in challenging environments and love to collaborate with cross-functional teams to achieve project goals. When I'm not coding, I enjoy spending my time travelling. I'm excited to continue my journey as a software developer and help organizations achieve their technological aspirations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMeComponent;