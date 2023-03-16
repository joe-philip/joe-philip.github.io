import './style.css'
import Heading from '../heading/component'

function ProjectsComponent() {
    return (
        <section id='projects'>
            <Heading text='Projects' />
            <div className='projects-card-container'>
                <div className='projects-card'>
                    <h3 className='project-title'>
                        <a className='project-link' target='_blank' rel='noreferrer' href='https://joe-philip.github.io/random_password_generator_react/'>
                            Random password generator
                        </a>
                    </h3>
                    <p className='project-description'>
                        Random password generator is a basic web app developed for generating strong random passwords. The app is build using front-end technology ReactJS and backedn technology Flask.
                    </p>
                    <ul className='project-links'>
                        <li>
                            <a href='https://joe-philip.github.io/random_password_generator_react/'>View Deployment</a>
                        </li>
                        <li>
                            <a href='https://github.com/joe-philip/random_password_generator_react'>Frontend Repository</a>
                        </li>
                        <li>
                            <a href='https://github.com/joe-philip/random_password_generator'>Backend Repository</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default ProjectsComponent;