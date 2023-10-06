import Heading from '../heading/component';
import image from './image.jpg';
import SkillsList from './skills-component/component';
import skillsData from './skills-component/data.json';
import socialsData from './socials-component/data.json';
import SocialsList from './socials-component/socials';
import './style.css';
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
                            <SkillsList data={skillsData} />
                        </div>
                        <div className='socials'>
                            <h3 className='socials-title'>Socials</h3>
                            <SocialsList data={socialsData} />
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