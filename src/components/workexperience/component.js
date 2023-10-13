import Heading from '../heading/component';
import WorkExperienceCardComponent from './card/component';
import './style.css';

function Experience(props) {
    return (
        <section id="work-experience">
            <Heading text="Work experience" />
            <div id="work-experience-card-container">
                {props.experience && props.experience.map(i => <WorkExperienceCardComponent experienceData={i} key={i.id} />)}
            </div>
        </section>
    );
}

export default Experience;