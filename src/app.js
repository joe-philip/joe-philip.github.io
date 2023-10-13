import React from 'react';
import AboutMeComponent from './components/aboutme/component';
import BannerComponent from './components/banner-img/component';
import bannerData from './components/banner-img/data.json';
import ContactMe from './components/contactme/component';
import Footer from './components/footer/component';
import Navbar from './components/navbar/component';
import ProjectsComponent from './components/projects/component';
import Experience from './components/workexperience/component';
import './index.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <BannerComponent data={bannerData.img} />
            <AboutMeComponent />
            <Experience />
            <ProjectsComponent />
            <ContactMe />
            <Footer />
        </div>
    )
}

export default App;