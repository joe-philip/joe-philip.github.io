import Heading from '../heading/component';
import data from './data.json';
import ProjectCardComponent from './project-card-component';
import './style.css';

function ProjectsComponent() {
    return (
        <section id='projects'>
            <Heading text='Projects' />
            <div className='projects-container'>
                { data.map(obj => <ProjectCardComponent key={obj.ordering} props={obj} />) }
            </div>
        </section>
    );
}

export default ProjectsComponent;