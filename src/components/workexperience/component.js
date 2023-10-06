import Heading from '../heading/component';
import WorkExperienceCardComponent from './card/component';
import data from './data.json'
import './style.css';

function Experience() {
    return (
        <section id="work-experience">
            <Heading text="Work experience" />
            <div id="work-experience-card-container">
                {data.map((i, index) => <WorkExperienceCardComponent {...i} key={index} />)}
            </div>
        </section>
    );
}

export default Experience;