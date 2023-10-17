import { useEffect, useState } from 'react';
import Heading from '../heading/component';
import ContactComponent from './contact-component/component';
import SkillsList from './skills-component/component';
import SocialsList from './socials-component/socials';
import './style.css';
function AboutMeComponent(props) {
    const [resume, setResume] = useState(null)
    useEffect(
        () => {
            fetch(
                `${process.env.REACT_APP_API_URL}/download_resume/1`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/pdf'
                    }
                }
            ).then(response => {
                response.blob().then(blob => setResume(blob))
            })
        }, [resume]);
    function handeDownload() {
        if (resume) {
            const file = URL.createObjectURL(resume);
            const element = document.createElement('a');
            element.href = file;
            element.download = 'resume.pdf';
            element.click();
            URL.revokeObjectURL(file);
        }
    }
    return (
        <section id='about-me'>
            <Heading text="About me" />
            <div className='about-me-card-container'>
                <div className='about-me-card'>
                    <div className='about-me-section-1'>
                        <div className='about-me-img-container'>
                            <img src={props.image} alt='img' className='about-me-img' />
                        </div>
                        {props.contact && <ContactComponent data={props.contact} />}
                        <div className='skills'>
                            <h3 className='skills-title'>Skills</h3>
                            {props.skills && <SkillsList data={props.skills} />}
                        </div>
                        <div className='socials'>
                            <h3 className='socials-title'>Socials</h3>
                            {props.socials && <SocialsList data={props.socials} />}
                        </div>
                    </div>
                    <div className='about-me-section-2'>
                        <h3>About me</h3>
                        <p className='about-me-intro' dangerouslySetInnerHTML={{ __html: props.info }}></p>
                        <ul className='resume'>
                            <li>
                                <a href={props.resume} target='_blank' rel='noreferrer'>View resume</a>
                            </li>
                            <li>
                                {
                                    // eslint-disable-next-line
                                    <a id='download-resume' onClick={handeDownload} disabled={!resume}>
                                        <ion-icon name="download-outline"></ion-icon>
                                    </a>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMeComponent;