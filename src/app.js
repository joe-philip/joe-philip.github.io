import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import './app.css';
import AboutMeComponent from './components/aboutme/component';
import BannerComponent from './components/banner-img/component';
import ContactMe from './components/contactme/component';
import Footer from './components/footer/component';
import Navbar from './components/navbar/component';
import ProjectsComponent from './components/projects/component';
import Experience from './components/workexperience/component';
import './index.css';
import { toggleThemeAction } from './redux/actions/toggleTheme';
import { setDarkTheme, setLightTheme } from './utils';
import RefreshPageComponent from './components/refresh/component';

function App() {
    const [propsData, setPropsData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const apiURL = `${process.env.REACT_APP_API_URL}/profile`;
    const [theme, refresh] = [useSelector(state => state.theme), useSelector(state => state.refresh)]
    useEffect(
        () => {
            setIsLoading(true);
            fetch(apiURL).then(
                response => {
                    setIsLoading(false);
                    if (response.status === 200) {
                        response.json().then(response => setPropsData(response.data))
                    }
                }
            )
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
            return () => window.removeEventListener('scroll', handleScroll); // eslint-disable-next-line
        }, [refresh]
    );
    useEffect(() => theme === 0 ? setDarkTheme() : setLightTheme(), [theme])
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
                <RefreshPageComponent />
            </div>
        </>
    )
}

function mapStateToProps(state) {
    return { theme: state.theme }
}

function mapDispatchToProps(dispatch) {
    return { toggleTheme: () => dispatch(toggleThemeAction()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
