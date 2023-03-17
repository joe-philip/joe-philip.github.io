import React from 'react';
import ReactDOM from 'react-dom/client';
import BannerComponent from './components/banner-img/component';
import Navbar from './components/navbar/component';
import ProjectsComponent from './components/projects/component';
import Experience from './components/workexperience/component';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Navbar />
    <BannerComponent />
    <Experience />
    <ProjectsComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
