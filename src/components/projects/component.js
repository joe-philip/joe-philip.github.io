import Heading from '../heading/component';
import ProjectCardComponent from './project-card-component';
import './style.css';

function ProjectsComponent(props) {
    return (
        <section id='projects'>
            <Heading text='Projects' />
            <div className='projects-container'>
                { props.projects && props.projects.map(obj => <ProjectCardComponent key={obj.ordering} props={obj} />) }
            </div>
        </section>
    );
}

export default ProjectsComponent;