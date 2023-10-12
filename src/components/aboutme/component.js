import Heading from '../heading/component';
import ContactComponent from './contact-component/component';
import contactData from './contact-component/contact.json';
import data from './data.json';
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
                            <img src={data.image} alt='img' className='about-me-img' />
                        </div>
                        <ContactComponent data={contactData} />
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
                        <p className='about-me-intro' dangerouslySetInnerHTML={{ __html: data.info }}></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMeComponent;