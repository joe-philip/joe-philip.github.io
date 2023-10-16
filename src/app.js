import React, { useEffect, useState } from 'react';
import AboutMeComponent from './components/aboutme/component';
import BannerComponent from './components/banner-img/component';
import ContactMe from './components/contactme/component';
import Footer from './components/footer/component';
import Navbar from './components/navbar/component';
import ProjectsComponent from './components/projects/component';
import Experience from './components/workexperience/component';
import './index.css';

function App() {
    const [propsData, setPropsData] = useState({})
    const apiURL = `${process.env.REACT_APP_API_URL}/profile`;
    useEffect(
        () => {
            fetch(apiURL).then(
                response => {
                    if (response.status === 200) {
                        response.json().then(
                            response => {
                                setPropsData(response.data)
                            }
                        )
                    }
                }
            )
        }, [apiURL]
    );
    return (
        <div className="App">
            <Navbar />
            <BannerComponent data={propsData.banner_img} />
            <AboutMeComponent
                info={propsData.info}
                image={propsData.profile_img}
                skills={propsData.skills}
                socials={propsData.social_media}
            />
            <Experience experience={propsData.work_experience} />
            <ProjectsComponent projects={propsData.projects} />
            <ContactMe />
            <Footer />
        </div>
    )
}

export default App;