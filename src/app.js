import React, { useEffect, useState } from 'react';
import './app.css';
import AboutMeComponent from './components/aboutme/component';
import BannerComponent from './components/banner-img/component';
import ContactMe from './components/contactme/component';
import Footer from './components/footer/component';
import Navbar from './components/navbar/component';
import ProjectsComponent from './components/projects/component';
import Experience from './components/workexperience/component';
import './index.css';
import { setDarkTheme, setLightTheme } from './utils';

function App() {
    const [propsData, setPropsData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [colorTheme, setColorTheme] = useState(1)
    const apiURL = `${process.env.REACT_APP_API_URL}/profile`;
    useEffect(
        () => {
            setIsLoading(true);
            fetch(apiURL).then(
                response => {
                    setIsLoading(false);
                    if (response.status === 200) {
                        response.json().then(
                            response => {
                                setPropsData(response.data)
                            }
                        )
                    }
                }
            )
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setDarkTheme();
                setColorTheme(0)
            } else {
                setLightTheme();
                setColorTheme(1)
            }
        }, [apiURL]
    );
    useEffect(
        () => {
            const handleScroll = () => {
                const banner = document.getElementById('banner');

                if (banner) {
                    const distance = banner.getBoundingClientRect().bottom;
                    const root = document.documentElement;
                    const cssVariableValue = getComputedStyle(root).getPropertyValue('--color-background-primary');
                    document.documentElement.style.setProperty(
                        '--navbar-bg',
                        distance <= 0 ? `${cssVariableValue}ff` : `${cssVariableValue}aa`
                    );
                }
            }
            // Add scroll event listener
            window.addEventListener('scroll', handleScroll);

            // Clean up the event listener when the component unmounts
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []
    );
    return (
        <>
            {isLoading && <div id='page-loader'>
                <div className='page-spinner'></div>
                Loading...
            </div>}
            <div className="App">
                <Navbar
                    name={propsData.name}
                    role={propsData.job_role}
                    colorTheme={colorTheme}
                    setColorTheme={state => setColorTheme(state)}
                />
                <BannerComponent data={propsData.banner_img} />
                <AboutMeComponent
                    info={propsData.info}
                    image={propsData.profile_img}
                    skills={propsData.skills}
                    socials={propsData.social_media}
                    contact={propsData.contact_info}
                    resume={propsData.resume}
                />
                <Experience experience={propsData.work_experience} />
                <ProjectsComponent projects={propsData.projects} />
                <ContactMe />
                <Footer />
            </div>
        </>
    )
}

export default App;