function ProjectCardComponent({ props }) {
    return (
        <div className='projects-card-container'>
            <div className='projects-card'>
                <h3 className='project-title'>
                    <a className='project-link' target='_blank' rel='noreferrer' href={props.title_link}>
                        {props.title}
                    </a>
                </h3>
                <p className='project-description'>
                    {props.description}
                </p>
                <ul className='project-links'>
                    {
                        props.links.map(
                            item => <li key={item.id}><a target='_blank' rel="noreferrer" href={item.link}>{item.label}</a></li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default ProjectCardComponent;