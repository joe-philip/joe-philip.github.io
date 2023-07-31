import './style.css'
import Heading from '../heading/component'

function ProjectsComponent() {
    return (
        <section id='projects'>
            <Heading text='Projects' />
            <div className='projects-container'>
                <div className='projects-card-container'>
                    <div className='projects-card'>
                        <h3 className='project-title'>
                            <a className='project-link' target='_blank' rel='noreferrer' href='https://joe-philip.github.io/random_password_generator_react/'>
                                Random password generator
                            </a>
                        </h3>
                        <p className='project-description'>
                            Random password generator is a basic web app developed for generating strong random passwords. The app is build using front-end technology ReactJS and backend technology Django.
                        </p>
                        <ul className='project-links'>
                            <li>
                                <a href='https://joe-philip.github.io/random_password_generator_react/'>View Deployment</a>
                            </li>
                            <li>
                                <a href='https://github.com/joe-philip/random_password_generator_react'>Frontend Repository</a>
                            </li>
                            <li>
                                <a href='https://github.com/joe-philip/random_password_generator_django'>Backend Repository</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='projects-card-container'>
                    <div className='projects-card'>
                        <h3 className='project-title'>
                            <a className='project-link' target='_blank' rel='noreferrer' href='https://joe-philip.github.io/random_password_generator_react/'>
                                Python django code snippets for VSCode
                            </a>
                        </h3>
                        <p className='project-description'>
                        Python django rest framework code snippets for VSCode is a VSCode extension that provides a collection of useful code snippets for Python programming in Django rest framework. The extension includes snippets for commonly used code segments, such as loops, functions, file handling, regular expressions, and more. With this extension, you can save valuable time and effort by quickly inserting these code segments into your projects, without the need to manually type them out.
                        </p>
                        <ul className='project-links'>
                            <li>
                                <a href='https://joe-philip.github.io/python_django_rest_framework_code_snippets/'>View Documentation page</a>
                            </li>
                            <li>
                                <a href='https://marketplace.visualstudio.com/items?itemName=JoePhilip.pythondjangocodesnippet&ssr=false#overview'>View extension in VS Code marketplace</a>
                            </li>
                            <li>
                                <a href='https://gitlab.com/joe-philip/python_code_snippets'>View Repository</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectsComponent;