import Heading from "../heading/component";
import WorkExperienceCardComponent from './card/component';
import aatoonLogo from './logos/aatoon.png';
import scoposLogo from './logos/scopos.png';
import './style.css';

const data = [
    {
        companyTitle: 'Aatoon Solutions',
        logo: aatoonLogo,
        link: 'https://www.aatoon.com/',
        otherData: {
            'Joining date': '22-11-2021',
            Status: 'Presently working',
            Role: 'Junior Python developer',
            Location: 'Unit 1B, First Floor, Carnival Infopark Phase II Infopark Kochi P.O Kakkand, Kochi, Kerala 682042'
        }
    },
    {
        companyTitle: 'Scopos Technologies',
        logo: scoposLogo,
        otherData: {
            Role: 'Python developer',
            'Internship duration': '15-01-2020 - 16-02-2021',
            'Work period': '20-02-2021 - 30-09-2021',
            'Location': 'A&S TOWER, BYPASS JUNCTION, Kallumthazham, Kollam, Kerala 691004'
        }
    }
]

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